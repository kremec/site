import { getBlogPosts } from './(pages)/blog/_lib/utils'

export const baseUrl = 'https://subbyte.net'

// Required for static export
export const dynamic = 'force-static'

export default async function sitemap() {
  const posts = getBlogPosts()
  const blogs = await Promise.all(
    posts.map(async (post) => {
      const metadata = await post.metadata
      return {
        url: `${baseUrl}/blog/${post.id}`,
        lastModified: metadata.publishedAt.toISOString().split('T')[0],
      }
    }),
  )

  const routes = ['', 'portfolio', '/blog'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}
