export default function Header() {
    return (
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">HerbertAI</h1>
        <nav>
          <a className="px-3 hover:underline" href="/">Home</a>
          <a className="px-3 hover:underline" href="/demo">Demo</a>
          <a className="px-3 hover:underline" href="/about">About</a>
          <a className="px-3 hover:underline" href="/faq">FAQ</a>
          <a className="px-3 hover:underline" href="/contact">Contact</a>
        </nav>
      </header>
    )
  }
  