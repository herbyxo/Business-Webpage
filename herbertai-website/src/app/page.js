export default function Home() {
  return (
    <div className="text-center p-10">
      <h1 className="text-5xl font-bold mb-4">Missed Customers? Turn them into Money</h1>
      <p className="text-lg mb-6">HerbertAI answers calls, books appointments, and never misses a client.</p>
      <a 
        href="/demo"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        See it in Action
      </a>
    </div>
  )
}
