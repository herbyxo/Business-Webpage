import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white py-20 md:py-32">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-5xl md:text-7xl font-semibold mb-6 text-gray-900 tracking-tight">
            Missed Customers?<br />Turn Them Into Money
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-600 font-light">
            Herbert AI answers calls, books appointments, answers FAQs, and never misses a client - 24/7.
          </p>
          <Link 
            href="/demo"
            className="inline-block px-8 py-3 bg-black text-white rounded-full font-medium text-lg hover:bg-gray-800 transition"
          >
            See It In Action
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16 text-gray-900">
            What Herbert AI Does
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Answer Calls</h3>
              <p className="text-gray-600 leading-relaxed">
                Never miss a customer call again. Herbert AI answers professionally, 24/7.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Book Appointments</h3>
              <p className="text-gray-600 leading-relaxed">
                Automatically check availability and schedule appointments directly into your businesses calendar.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Answer FAQs</h3>
              <p className="text-gray-600 leading-relaxed">
                Trained on your business info to answer common customer questions instantly.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <div className="text-4xl mb-4">✉️</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Take Messages</h3>
              <p className="text-gray-600 leading-relaxed">
                Capture customer details and messages when you're unavailable.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200">
            <div className="text-4xl mb-4">🔄</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Transfer Calls</h3>
            <p className="text-gray-600 leading-relaxed">
              Seamlessly transfer calls to you or your team when needed.
            </p>
          </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Custom Training</h3>
              <p className="text-gray-600 leading-relaxed">
                Tailored to your business with your information, pricing, and processes.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20 md:py-32">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-gray-900">
            Ready to Stop Missing Customers?
          </h2>
          <p className="text-xl mb-10 text-gray-600 font-light max-w-2xl mx-auto">
            See how Herbert AI can transform your business communications.
          </p>
          <Link 
            href="/contact"
            className="inline-block px-8 py-3 bg-black text-white rounded-full font-medium text-lg hover:bg-gray-800 transition"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  )
}