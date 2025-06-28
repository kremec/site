import Link from 'next/link'
import { formatDate } from '@/app/(pages)/blog/_lib/utils'
import React from 'react'
import { BlogPostData } from '../(pages)/blog/_lib/post_metadata'

export function BlogPostCard({
  id,
  metadata,
}: {
  id: string
  metadata: BlogPostData
}) {
  const { title, description, publishedAt, tags } = metadata as any
  return (
    <div className="group relative transition-all">
      <Link href={`/blog/${id}`} className="peer block">
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
                {formatDate(publishedAt)}
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
              className={`'bg-white text-black' rounded border px-2 py-0.5 font-mono text-xs`}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
