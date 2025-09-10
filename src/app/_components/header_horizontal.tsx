import Link from 'next/link'
import { SITE_TITLE } from '../constants/names'
import {
  ANDROID_LINK,
  EMAIL_LINK,
  GITHUB_LINK,
  LINKEDIN_LINK,
  YOUTUBE_LINK,
} from '../constants/links'
import HeaderInternalLink from './header_internal_link'
import HeaderExternalLink from './header_external_link'

export default function HorizontalHeader({
  keyword = '',
}: {
  keyword?: string
}) {
  return (
    <nav>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col items-start">
          <Link href="/">
            <h1 className="min-w-max text-2xl font-bold">{SITE_TITLE}</h1>
          </Link>
          <h2 className="text-center italic">{keyword}</h2>
        </div>
        <div className="flex w-full flex-wrap justify-end text-right">
          <div className="flex w-full justify-end gap-x-4">
            <HeaderInternalLink href="/portfolio" label="Portfolio" />
          </div>
          <div className="flex w-full justify-end gap-x-4">
            <HeaderInternalLink href="/blog" label="Blog" />
          </div>
          <div className="flex w-full justify-end gap-x-4">
            <HeaderInternalLink href="/notes" label="Notes" />
          </div>
        </div>
      </div>
      <div className="py-3"></div>
      <div className="xs:max-w-screen xs:flex xs:flex-row xs:flex-wrap xs:justify-evenly grid grid-cols-3 gap-y-2">
        <HeaderExternalLink href={GITHUB_LINK} label="GitHub" />
        <HeaderExternalLink href={ANDROID_LINK} label="Android" />
        <HeaderExternalLink href={YOUTUBE_LINK} label="YouTube" />
        <HeaderExternalLink href={LINKEDIN_LINK} label="LinkedIn" />
        <HeaderExternalLink href={EMAIL_LINK} label="Email" />
      </div>
    </nav>
  )
}
