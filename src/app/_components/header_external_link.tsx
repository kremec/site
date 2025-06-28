import Link from 'next/link'

export default function HeaderExternalLink({
  href,
  label,
}: {
  href: string
  label: string
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative max-w-24 -skew-y-5 overflow-hidden bg-black px-1 text-white transition duration-500 ease-out hover:bg-white hover:text-black"
    >
      <h3 className="inline-block skew-y-5 p-[0.1rem]">{label}</h3>
    </Link>
  )
}
