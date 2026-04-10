"use client";

import Image from "next/image";
import React, { useState, useEffect, useMemo } from "react";
import { blogPosts } from "../data";

import { BsArrowUpRightCircle } from "react-icons/bs";

const BlogBody = ({ subblog }: { subblog?: any }) => {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    // Check if light mode is active
    const checkLightMode = () => {
      setIsLightMode(document.documentElement.classList.contains("light"));
    };

    checkLightMode();

    // Listen for theme changes
    const observer = new MutationObserver(checkLightMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  if (!subblog) {
    return <div className="p-10">Loading...</div>;
  }

  const blogPageBg = isLightMode ? '/Blog/blog_page_light.webp' : '/Blog/blog_page_dark.webp';
  const descriptionColor = isLightMode ? '#000000' : '#AAAAAA';

  return (
    <div className="hidden md:flex justify-center">
      <section className="w-full max-w-6xl">
        <div className="z-10">
          <Image
            src={subblog.image}
            alt="Blog Body Image"
            width={1500}
            height={1500}
            className="w-full max-w-[1180px] h-auto rounded-2xl my-10 mx-auto"
          />
          <div className="flex flex-row mx-10 justify-between items-start gap-6">
            <div className="w-[65%] h-auto">
              <p className="text-sm" style={{ color: descriptionColor }}>
                {subblog.description}
              </p>
            </div>

            {/* Related Blogs (by category) */}
            <div className="w-[30%] flex flex-col text-start">
              <h2 className="text-lg text-white font-semibold">Related Blogs</h2>

              <div className="felx flex-col mt-5">
                {useMemo(() => {
                  // Find parent post to obtain the category
                  const parent = blogPosts.find((bp) => bp.subblog?.some((s: any) => s.slug === subblog.slug));
                  const category = parent?.category || subblog.category || "";

                  // Find posts that share the same category (exclude current slug)
                  const related = blogPosts
                    .filter((bp) => bp.category === category)
                    .filter((bp) => bp.subblog?.[0]?.slug !== subblog.slug)
                    .map((bp) => ({
                      image: bp.image,
                      category: bp.category,
                      title: bp.title,
                      slug: bp.subblog?.[0]?.slug,
                    }));

                  const itemsToRender = related.length > 0 ? related : (subblog.relatedblog || []);

                  return itemsToRender.map((blog: any, index: number) => (
                    <div
                      key={blog.slug || index}
                      className="flex flex-row h-[125px] w-[380px] bg-cover bg-center rounded-lg mb-3"
                      style={{
                        backgroundImage: `url("${blogPageBg}")`,
                      }}
                    >
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        width={100}
                        height={100}
                        className="w-[100px] h-[90px] rounded-lg my-5"
                      />
                      <div className="flex flex-col py-8 px-3">
                        <p className="text-sm text-[#4C8C74]">{blog.category}</p>
                        <h2 className="text-sm text-yellow-500">{blog.title}</h2>

                        <div className="flex flex-row justify-start items-center gap-2 mt-1">
                          <BsArrowUpRightCircle className="w-5 h-5 text-[#4C8C74]" />
                          <a className="text-md font-light text-[#AAAAAA]" href={`/blog/${blog.slug || blog.link || '#'}`}>
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  ));
                }, [subblog.slug])}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogBody;
