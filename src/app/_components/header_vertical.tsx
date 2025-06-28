import Link from 'next/link'
import React from 'react'
import { SITE_TITLE } from '../constants/names'
import {
  ANDROID_LINK,
  EMAIL_LINK,
  GITHUB_LINK,
  LINKEDIN_LINK,
  YOUTUBE_LINK,
} from '../constants/links'

// Internal link component
function HeaderInternalLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="hover:underline">
      {label}
    </Link>
  )
}

// External link component
function HeaderExternalLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
    >
      {label}
    </a>
  )
}

export default function VerticalHeader({ keyword = '' }: { keyword?: string }) {
  return (
    <nav className="flex flex-col items-start gap-y-2">
      <Link href="/">
        <h1 className="text-2xl font-bold">{SITE_TITLE}</h1>
      </Link>
      <h2 className="text-center italic">{keyword}</h2>
      <div className="py-1"></div>
      <HeaderInternalLink href="/portfolio" label="Portfolio" />
      <HeaderInternalLink href="/blog" label="Blog" />
      <div className="py-2"></div>
      <HeaderExternalLink href={GITHUB_LINK} label="GitHub" />
      <HeaderExternalLink href={ANDROID_LINK} label="Android" />
      <HeaderExternalLink href={YOUTUBE_LINK} label="YouTube" />
      <HeaderExternalLink href={LINKEDIN_LINK} label="LinkedIn" />
      <HeaderExternalLink href={EMAIL_LINK} label="Email" />
    </nav>
  )
}
