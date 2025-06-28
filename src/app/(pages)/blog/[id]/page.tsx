import { notFound } from 'next/navigation'
import { formatDate, getBlogPosts } from '../_lib/utils'
import { baseUrl } from '@/app/sitemap'
import { Metadata } from 'next/types'
import { getBlogPostMetadata } from '../_lib/post_metadata'
import { get } from 'http'

export async function generateStaticParams() {
  let posts = getBlogPosts()
  return posts.map((post) => ({ id: post.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const metadata = await getBlogPostMetadata(id)

  if (!metadata) {
    throw new Error(`Unable to find metadata for ${id}.mdx`)
  }
  const { title, publishedAt, description, image } = metadata

  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: formatDate(publishedAt),
      url: `${baseUrl}/blog/${id}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    other: {
      'application/ld+json': JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: title,
        datePublished: publishedAt,
        dateModified: publishedAt,
        description: description,
        image: image,
        url: `${baseUrl}/blog/${id}`,
        author: {
          '@type': 'Person',
          name: 'subbyte',
        },
      }),
    },
  }
}

export default async function Blog({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const metadata = await getBlogPostMetadata(id)
  let post = getBlogPosts().find((post) => post.id === id)

  if (!post) {
    notFound()
  }

  return (
    <section>
      <h1 className="title text-2xl font-semibold tracking-tighter">
        {metadata.title}
      </h1>
      <div className="mt-2 mb-8 flex items-center justify-between text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(metadata.publishedAt)}
        </p>
      </div>
      <article className="prose">
        <post.content />
      </article>
    </section>
  )
}
