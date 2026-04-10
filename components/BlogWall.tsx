"use client"

import BlogPosts from '@/app/blog/components/BlogPosts'
import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'

// Minimal defaults so the component doesn't reference undefined values
const isVisible = true
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

// Enter from above, exit by fading downward (top -> bottom fade-out)
const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, y: 20, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
}

const BlogWall = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        // toggle visibility on enter/exit so animations replay every time
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <section className='mt-32'>
      <div className="text-center">
        {/* Header */}
        <motion.div
          ref={containerRef}
          className="text-center"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.p
            className="text-[#ff4d2d] font-medium mb-3 text-3xl"
            variants={itemVariants}
          >
            Our Blogs
          </motion.p>
          <motion.h2
            className="text-white font-semibold text-3xl sm:text-4xl md:text-5xl leading-[1.35] mb-6"
            variants={itemVariants}
          >
            <div>
              <span className="bg-gradient-to-b from-white via-[#ffecd3] to-[#5a2e1b] text-transparent bg-clip-text">
                We make the process of working
              </span>
            </div>
            <div>
              <span className="text-white">too easy and simpler</span>
            </div>
          </motion.h2>
          <motion.p
            className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg font-light"
            variants={itemVariants}
          >
            Here&apos;s some of our blogs:
          </motion.p>
        </motion.div>
      </div>

      <div className="flex justify-center">
        {/* Blog Posts Grid */}
        <BlogPosts />
      </div>
    </section>
  )
}

export default BlogWall