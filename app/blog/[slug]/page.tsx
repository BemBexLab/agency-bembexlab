import React from 'react'
import BlogBody from '../components/BlogBody'
import BlogBodyMobile from '../components/BlogBodyMobile'
import { blogPosts } from '../data'
import { notFound } from 'next/navigation'
import Footer2 from '@/components/Footer2'
import ForumMap from '@/components/ForumMap'
import FAQs from '@/app/services/components/FAQs'

interface BlogPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const params: { slug: string }[] = []
  blogPosts.forEach((post) => {
    if (post.subblog && post.subblog.length > 0) {
      post.subblog.forEach((sub) => {
        params.push({ slug: sub.slug })
      })
    }
  })
  return params
}

const BlogPage = async ({ params }: BlogPageProps) => {
  const { slug } = await params

  let subblogData = null
  let blogPost = null

  for (const post of blogPosts) {
    if (post.subblog) {
      const found = post.subblog.find((sub) => sub.slug === slug)
      if (found) {
        subblogData = found
        blogPost = post
        break
      }
    }
  }

  if (!subblogData || !blogPost) {
    notFound()
  }

  return (
    <section className='pt-40 justify-center items-center text-center'>
      <h2 className='text-white text-6xl font-semibold scroll-mt-40 mx-auto max-w-3xl'>The Importance of Website Design in User Experience</h2>
      <BlogBody subblog={subblogData} />
      <BlogBodyMobile subblog={subblogData} />
      <FAQs />
      <ForumMap />
      <Footer2 />
    </section>
  )
}

export default BlogPage