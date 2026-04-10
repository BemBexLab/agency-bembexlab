"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { GoArrowRight } from "react-icons/go";
import { blogPosts } from "../data";

const BlogPostGrid = () => {
    const initialCount = 4;
    const [displayedPosts, setDisplayedPosts] = useState(() => blogPosts.slice(0, initialCount));
    const [nextIndex, setNextIndex] = useState(initialCount);

    const showMore = () => {
        if (nextIndex >= blogPosts.length) return;
        const nextPosts = blogPosts.slice(nextIndex, nextIndex + initialCount);
        setDisplayedPosts((prev) => [...prev, ...nextPosts]);
        setNextIndex((n) => n + nextPosts.length);
    };

    const hasMorePosts = nextIndex < blogPosts.length;

    return (
        <section className="hidden mb-10 lg:block">
            <div className="grid grid-cols-3 gap-6 my-10 mx-auto max-w-[1400px] px-4">
                {displayedPosts.map((post, index) => (
                    <div
                        key={post.title || index}
                        className="p-4 h-[455px] rounded-xl bg-black/5"
                    >
                        <Image
                            src={post.image}
                            alt={post.title}
                            width={300}
                            height={200}
                            className="rounded-2xl w-full h-[250px] object-cover"
                        />
                        <div className="w-full h-[250px]">
                            <p className="text-sm mt-4 text-[#4C8C74]">{post.category}</p>
                            <h3 className="mt-3 text-xl font-semibold text-yellow-500">
                                {post.title}
                            </h3>
                            <p className="mt-2 text-sm">{post.description} </p>
                            <div className="flex flex-row justify-start items-center gap-2 mt-3">
                                <BsArrowUpRightCircle className="w-5 h-5 text-[#4C8C74]" />
                                <a className="text-sm font-light text-[#AAAAAA]" href={`/blog/${post.subblog[0]?.slug || 'default'}`}>Read More</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-8">
                <button
                    onClick={showMore}
                    disabled={!hasMorePosts}
                    className="relative px-6 py-2.5 rounded-full text-white text-base font-light flex items-center gap-3 bg-[#1a1a1a]/60 backdrop-blur-md border border-[#ff1e00]/20 transition-all duration-300 group overflow-hidden disabled:opacity-40 disabled:cursor-not-allowed">
                    <span className="relative z-10 transition-all duration-300 group-hover:translate-x-1">
                        Load More
                    </span>
                    <GoArrowRight className="relative z-10 text-white text-base transition-transform duration-300 group-hover:translate-x-1" />

                    <span className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-b from-[#ff1e00] to-transparent rounded-t-full pointer-events-none" />
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#ff1e00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-full" />
                    <span className="absolute inset-0 rounded-full shadow-[inset_0_4px_6px_rgba(255,255,255,0.08)] pointer-events-none" />
                </button>
            </div>
        </section>
    );
};

export default BlogPostGrid;