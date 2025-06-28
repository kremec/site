export type BlogPostData = {
  id: string
  title: string
  description?: string
  publishedAt: Date
  image: string
}

export async function getBlogPostMetadata(id: string): Promise<BlogPostData> {
  const file = await import('@/app/(pages)/blog/(posts)/' + id + '.mdx')

  if (file?.metadata) {
    return {
      id,
      ...file.metadata,
    }
  } else {
    throw new Error(
      `Unable to find metadata for: '@/app/(pages)/blog/(posts)/' + ${id}`,
    )
  }
}
