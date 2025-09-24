import { getBlogPosts } from '@/app/(pages)/blog/_lib/utils'
import React from 'react'
import { BlogPostCard } from './post_card'

export async function BlogPosts() {
  const blogsRaw = getBlogPosts()
  const blogs = await Promise.all(
    blogsRaw.map(async (post) => ({
      ...post,
      metadata: await post.metadata,
    })),
  )

  // Group blogs by series
  const blogsBySeries: Record<string, typeof blogs> = {}
  blogs.forEach((post) => {
    const series = post.metadata.series || 'Uncategorized'
    if (!blogsBySeries[series]) {
      blogsBySeries[series] = []
    }
    blogsBySeries[series].push(post)
  })

  // Sort series alphabetically
  const sortedSeries = Object.keys(blogsBySeries).sort()

  // Sort posts within each series by partInSeries
  sortedSeries.forEach((series) => {
    blogsBySeries[series].sort((a, b) => {
      return (a.metadata.partInSeries ?? 0) - (b.metadata.partInSeries ?? 0)
    })
  })

  if (blogs.length === 0) {
    return (
      <ul className="flex flex-col items-center gap-y-5">
        <p>No posts yet</p>
      </ul>
    )
  }

  return (
    <ul className="flex flex-col items-center gap-y-5">
      {sortedSeries.map((series) => (
        <div key={series} className="w-full">
          <h4 className="mb-4 text-xl font-bold">{series}</h4>
          <ul className="flex flex-col items-center gap-y-5">
            {blogsBySeries[series].map((post) => (
              <li className="w-full" key={post.id}>
                <BlogPostCard id={post.id} metadata={post.metadata} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </ul>
  )
}
