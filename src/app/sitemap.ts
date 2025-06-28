import { getBlogPosts } from './(pages)/blog/_lib/utils'

export const baseUrl = 'https://portfolio-blog-starter.vercel.app'

export default async function sitemap() {
  const posts = getBlogPosts()
  const blogs = await Promise.all(
    posts.map(async (post) => {
      const metadata = await post.metadata
      return {
        url: `${baseUrl}/blog/${post.id}`,
        lastModified: metadata.publishedAt,
      }
    }),
  )

  const routes = ['', '/blog'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}
