export type BlogPostData = {
  id: string
  title: string
  description?: string
  publishedAt: Date
  image: string
}

export async function getBlogPostMetadata(id: string): Promise<BlogPostData> {
  try {
    const file = await import('@/app/(pages)/blog/(posts)/' + id)

    if (file?.metadata) {
      return {
        id,
        ...file.metadata,
      }
    } else {
      throw new Error(`Unable to find metadata for ${id}.mdx`)
    }
  } catch (error) {
    throw new Error(`Unable to find metadata for ${id}.mdx: ${error}`)
  }
}
