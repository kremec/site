import { Metadata } from 'next/types'
import PortfolioMdx from './portfolio.mdx'

export const metadata: Metadata = {
  title: 'Portfolio',
}

export default function Portfolio() {
  return (
    <article className="prose">
      <PortfolioMdx />
    </article>
  )
}
