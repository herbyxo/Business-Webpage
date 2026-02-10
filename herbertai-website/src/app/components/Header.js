import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/logo.png" 
            alt="Herbert AI" 
            width={32} 
            height={32}
            className="rounded"
          />
          <span className="text-2xl font-semibold text-gray-900 hover:text-gray-700 transition">
            Herbert AI
          </span>
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