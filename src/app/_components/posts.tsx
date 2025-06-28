import Link from 'next/link'
import { formatDate, getBlogPosts } from '@/app/(pages)/blog/utils'
import React from 'react'

type BlogPostsProps = {
  limit?: number
  tag?: string | null
}

type BlogPost = ReturnType<typeof getBlogPosts>[number]

type BlogPostCardProps = {
  post: BlogPost
  highlight?: string | null
}

function BlogPostCard({ post, highlight }: BlogPostCardProps) {
  const { metadata, slug } = post
  const { title, description, publishedAt, tags } = metadata as any
  return (
    <div className="group relative transition-all">
      <Link href={`/blog/${slug}`} className="peer block">
        <div className="relative overflow-hidden rounded-md border-2 border-black">
          <div className="relative z-10 flex h-full w-full flex-col items-start bg-white bg-[image:var(--background-svg1)] p-3">
            <h4 className="text-lg font-bold text-wrap">
              <span className="relative inline-block before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:-z-10 before:bg-white before:blur-[0.5em] before:content-['']">
                {title}
              </span>
            </h4>
            {description && (
              <h5 className="text-wrap">
                <span className="relative inline-block before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:-z-10 before:bg-white before:blur-[0.5em] before:content-['']">
                  {description}
                </span>
              </h5>
            )}
            <div className="py-1"></div>
            <p className="text-sm italic">
              <span className="relative inline-block before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:-z-10 before:bg-white before:blur-[0.5em] before:content-['']">
                {formatDate(publishedAt, false)}
              </span>
            </p>
          </div>
        </div>
      </Link>
      <div className="transition-top absolute top-[0.5em] left-[0.5em] -z-10 h-full w-full rounded-md bg-[image:var(--background-svg2)] duration-300 group-hover:-top-[0.5em]" />
      {tags && Array.isArray(tags) && tags.length > 0 && (
        <div className="absolute right-2 bottom-2 z-10 flex gap-1">
          {tags.map((tag: string) => (
            <span
              key={tag}
              className={`rounded border px-2 py-0.5 font-mono text-xs ${highlight === tag ? 'bg-black text-white' : 'bg-white text-black'}`}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

export function BlogPosts({ limit, tag }: BlogPostsProps = {}) {
  let allBlogs = getBlogPosts().sort((a, b) => {
    const aDate = new Date(a.metadata.publishedAt)
    const bDate = new Date(b.metadata.publishedAt)
    return bDate.getTime() - aDate.getTime()
  })

  let filtered = tag
    ? allBlogs.filter(
        (post) =>
          Array.isArray(post.metadata.tags) && post.metadata.tags.includes(tag),
      )
    : allBlogs
  let sliced = limit ? filtered.slice(0, limit) : filtered

  return (
    <ul className="flex flex-col items-center gap-y-5">
      {sliced.length === 0 && <p>No posts yet</p>}
      {sliced.map((post) => (
        <li className="w-full" key={post.slug}>
          <BlogPostCard post={post} highlight={tag ?? undefined} />
        </li>
      ))}
    </ul>
  )
}
