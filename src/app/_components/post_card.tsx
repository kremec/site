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
  const { title, description, publishedAt } = metadata
  return (
    <div className="relative">
      <Link href={`/blog/${id}`} className="peer">
        <div className="relative overflow-hidden rounded-md border-2 border-black">
          <div className="bg-svg1 relative z-10 flex h-full w-full flex-col items-start bg-white p-3">
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
      <div className="bg-svg2 absolute top-2 left-2 -z-10 h-full w-full rounded-md transition-all duration-300 peer-hover:top-0 peer-hover:left-0" />
    </div>
  )
}
