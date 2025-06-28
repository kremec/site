import { getBlogPosts } from '@/app/(pages)/blog/_lib/utils'
import React from 'react'
import { BlogPostCard } from './post_card'

export async function BlogPosts() {
  let blogsRaw = getBlogPosts()
  let blogs = await Promise.all(
    blogsRaw.map(async (post) => ({
      ...post,
      metadata: await post.metadata,
    })),
  )

  blogs.sort((a, b) => {
    const aDate = new Date(a.metadata.publishedAt)
    const bDate = new Date(b.metadata.publishedAt)
    return bDate.getTime() - aDate.getTime()
  })

  return (
    <ul className="flex flex-col items-center gap-y-5">
      {blogs.length === 0 && <p>No posts yet</p>}
      {blogs.map((post) => (
        <li className="w-full" key={post.id}>
          <BlogPostCard id={post.id} metadata={post.metadata} />
        </li>
      ))}
    </ul>
  )
}
