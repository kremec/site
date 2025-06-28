import type { MDXComponents } from 'mdx/types'
import { BlogPosts } from './app/_components/posts'
import ProjectList from './app/_components/ProjectList'
import Link from 'next/link'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="relative mt-0 mb-6 text-4xl font-extrabold">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="relative mt-8 mb-4 text-3xl font-bold">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="relative mt-6 mb-3 text-2xl font-semibold">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="relative mt-6 mb-3 text-xl font-semibold">{children}</h4>
    ),
    h5: ({ children }) => (
      <h5 className="relative mt-6 mb-3 text-lg font-semibold">{children}</h5>
    ),
    h6: ({ children }) => (
      <h6 className="relative mt-6 mb-3 text-base font-semibold">{children}</h6>
    ),

    // Custom paragraph that doesn't inherit prose margins
    p: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,

    // Custom horizontal rule
    hr: () => <hr className="my-8 border-t border-gray-300" />,

    // Custom links
    a: ({ href, children }) => (
      <a
        href={href}
        className="font-medium text-blue-600 underline hover:text-blue-800"
      >
        {children}
      </a>
    ),

    // Override other elements as needed
    ul: ({ children }) => (
      <ul className="mb-4 list-inside list-disc space-y-2">{children}</ul>
    ),

    ol: ({ children }) => (
      <ol className="mb-4 list-inside list-decimal space-y-2">{children}</ol>
    ),

    li: ({ children }) => <li className="leading-relaxed">{children}</li>,

    code: ({ children }) => (
      <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">
        {children}
      </code>
    ),

    pre: ({ children }) => (
      <pre className="my-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-gray-100">
        {children}
      </pre>
    ),

    blockquote: ({ children }) => (
      <blockquote className="my-4 border-l-4 border-gray-300 pl-4 italic">
        {children}
      </blockquote>
    ),
    BlogPosts,
    Link,
    ProjectList,
    ...components,
  }
}
