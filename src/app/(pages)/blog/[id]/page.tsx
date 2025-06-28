import { notFound } from 'next/navigation'
import { formatDate, getBlogPosts } from '../utils'
import { baseUrl } from '@/app/sitemap'

export async function generateStaticParams() {
  let posts = getBlogPosts()

  return posts.map((post) => ({
    id: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  let post = getBlogPosts().find((post) => post.slug === id)

  if (!post) {
    return {}
  }

  let { title, publishedAt: publishedTime, description, image } = post.metadata
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
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
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
        headline: post.metadata.title,
        datePublished: post.metadata.publishedAt,
        dateModified: post.metadata.publishedAt,
        description: post.metadata.description,
        image: post.metadata.image,
        url: `${baseUrl}/blog/${post.slug}`,
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
  let post = getBlogPosts().find((post) => post.slug === id)

  if (!post) {
    notFound()
  }

  return (
    <section>
      <h1 className="title text-2xl font-semibold tracking-tighter">
        {post.metadata.title}
      </h1>
      <div className="mt-2 mb-8 flex items-center justify-between text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.metadata.publishedAt)}
        </p>
      </div>
      <article className="prose">{post.content}</article>
    </section>
  )
}
