import { Metadata } from 'next/types'
import BlogMdx from './blog.mdx'

export const metadata: Metadata = {
  title: 'Blog',
}

export default function Home() {
  return (
    <article className="prose">
      <BlogMdx />
    </article>
  )
}
