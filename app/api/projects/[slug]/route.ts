import { fetchWithTimeout, isAbortLikeError } from "@/lib/wordpress";

// app/api/projects/[slug]/route.ts
export async function GET(
  _: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const wpRes = await fetchWithTimeout(
      `https://olive-peafowl-546702.hostingersite.com/index.php/wp-json/wp/v2/projects?slug=${params.slug}`
    );

    if (!wpRes.ok) {
      return new Response("Not found", { status: 404 });
    }

    const data = await wpRes.json();

    if (!data || data.length === 0) {
      return new Response("Not found", { status: 404 });
    }

    return new Response(JSON.stringify(data[0]), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(
      isAbortLikeError(error)
        ? `Project fetch timed out for slug "${params.slug}".`
        : "Project fetch failed:",
      error
    );
    return new Response("Not found", { status: 404 });
  }
}
