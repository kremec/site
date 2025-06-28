import fs from 'fs'
import path from 'path'
import { getBlogPostMetadata } from './post_metadata'
import dynamic from 'next/dynamic'

function getMDXData(dir: fs.PathLike) {
  const mdxFiles = fs
    .readdirSync(dir)
    .filter((file) => path.extname(file) === '.mdx')

  return mdxFiles.map((file) => {
    const id = file.replace('.mdx', '')
    const metadata = getBlogPostMetadata(id)
    const content = dynamic(
      () => import(`@/app/(pages)/blog/(posts)/${id}.mdx`),
    )

    return {
      id,
      metadata,
      content,
    }
  })
}

export function getBlogPosts() {
  return getMDXData(
    path.join(process.cwd(), 'src', 'app', '(pages)', 'blog', '(posts)'),
  )
}

export function formatDate(date: Date) {
  const fullDate = date.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
  return fullDate
}
