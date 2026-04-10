import React from 'react'

import BlogPosts from './components/BlogPosts'
import BlogPostsMobile from './components/BlogPostsMobile'
import Footer2 from '@/components/Footer2'
import BlogHeader from '@/components/BlogHeader'
import LogoSlider from '@/components/LogoSlider'
import { FaQ } from 'react-icons/fa6'
import FAQs from '../services/components/FAQs'
import ForumMap from '@/components/ForumMap'
import BlogPostGrid from './components/BlogPostGrid'


const BlogPage = () => {
  return (
    <section>
      <BlogHeader />
      <LogoSlider />
      <BlogPostGrid />
      <FAQs />
      <ForumMap />
      <Footer2 />
    </section>
  )
}

export default BlogPage