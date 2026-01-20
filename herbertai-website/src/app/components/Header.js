import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="text-2xl font-semibold text-gray-900 hover:text-gray-700 transition">
          Herbert AI
        </Link>
        <nav className="flex gap-8">
          <Link className="text-gray-600 hover:text-gray-900 transition font-medium" href="/">Home</Link>
          <Link className="text-gray-600 hover:text-gray-900 transition font-medium" href="/demo">Demo</Link>
          <Link className="text-gray-600 hover:text-gray-900 transition font-medium" href="/about">About</Link>
          <Link className="text-gray-600 hover:text-gray-900 transition font-medium" href="/faq">FAQ</Link>
          <Link className="text-gray-600 hover:text-gray-900 transition font-medium" href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}