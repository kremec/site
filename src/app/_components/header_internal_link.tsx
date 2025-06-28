import Link from 'next/link'

export default function HeaderInternalLink({
  href,
  label,
}: {
  href: string
  label: string
}) {
  return (
    <Link href={href} className="group transition duration-300">
      {label}
      <span className="mx-auto block h-[1.5px] max-w-0 bg-black transition-all duration-300 group-hover:max-w-full"></span>
    </Link>
  )
}
