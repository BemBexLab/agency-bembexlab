import { NextResponse } from "next/server";
import { fetchWithTimeout, isAbortLikeError } from "@/lib/wordpress";

type Post = {
  id: number;
  slug: string;
  title?: { rendered?: string };
  acf?: {
    project_image?: { url?: string };
    catogary?: string | string[];
    project_url?: string;
  };
};

const WP_POSTS_ENDPOINT =
  "https://olive-peafowl-546702.hostingersite.com/wp-json/wp/v2/posts";
const CACHE_TTL_MS = 5 * 60 * 1000;
const REVALIDATE_SECONDS = 300;
const WP_FIELDS = [
  "id",
  "slug",
  "title",
  "acf.project_image",
  "acf.catogary",
  "acf.project_url",
].join(",");

let memoryCache: { data: Post[]; expiresAt: number } | null = null;

function apiCacheHeaders() {
  return {
    "Cache-Control": "public, max-age=60, s-maxage=300, stale-while-revalidate=600",
  };
}

function isProjectPost(post: Post) {
  return Boolean(post?.slug && post?.acf?.project_image?.url);
}

async function fetchWpPage(page: number) {
  const url = `${WP_POSTS_ENDPOINT}?per_page=100&page=${page}&_fields=${encodeURIComponent(
    WP_FIELDS
  )}`;
  return fetchWithTimeout(url, { next: { revalidate: REVALIDATE_SECONDS } });
}

function getStaleCache() {
  return memoryCache?.data?.length ? memoryCache.data : null;
}

function logPageFetchError(page: number, error: unknown) {
  console.error(
    isAbortLikeError(error)
      ? `WordPress posts fetch timed out for page ${page}.`
      : `WordPress posts fetch failed for page ${page}:`,
    error
  );
}

export async function GET() {
  try {
    if (memoryCache && memoryCache.expiresAt > Date.now()) {
      return NextResponse.json(memoryCache.data, { headers: apiCacheHeaders() });
    }

    const firstRes = await fetchWpPage(1);
    if (!firstRes.ok) {
      throw new Error(`WordPress page 1 fetch failed: ${firstRes.status}`);
    }

    const totalPages = Number(firstRes.headers.get("X-WP-TotalPages") || "1");
    const firstPagePosts = (await firstRes.json()) as Post[];

    const remainingPagePromises: Promise<Response>[] = [];
    for (let page = 2; page <= totalPages; page++) {
      remainingPagePromises.push(fetchWpPage(page));
    }

    const remainingResults = await Promise.allSettled(remainingPagePromises);
    const remainingPages = await Promise.all(
      remainingResults.map(async (result, index) => {
        const page = index + 2;

        if (result.status === "rejected") {
          logPageFetchError(page, result.reason);
          return [];
        }

        if (!result.value.ok) {
          console.error(
            `WordPress posts fetch failed for page ${page}: ${result.value.status}`
          );
          return [];
        }

        return (await result.value.json()) as Post[];
      })
    );

    const allPosts = [...firstPagePosts, ...remainingPages.flat()];
    const projectPosts = allPosts.filter(isProjectPost);

    memoryCache = {
      data: projectPosts,
      expiresAt: Date.now() + CACHE_TTL_MS,
    };

    return NextResponse.json(projectPosts, { headers: apiCacheHeaders() });
  } catch (error) {
    const staleCache = getStaleCache();

    console.error(
      isAbortLikeError(error)
        ? "WordPress posts fetch timed out."
        : "API Route Error:",
      error
    );

    return NextResponse.json(staleCache ?? [], { headers: apiCacheHeaders() });
  }
}
