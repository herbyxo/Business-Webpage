import Link from 'next/link'

export default function Home() {
  return (
    <div>
      
      {/* Hero Section */}
      <section className="bg-white py-20 md:py-32">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-5xl md:text-7xl font-semibold mb-6 text-gray-900 tracking-tight">
            Stop Losing Customers.<br />Start Growing Your Business.
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-600 font-light">
            We build digital systems that help trades businesses capture more leads, book more jobs, and never miss a customer.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              href="/contact"
              className="inline-block px-8 py-3 bg-black text-white rounded-full font-medium text-lg hover:bg-gray-800 transition"
            >
              Get Started
            </Link>
            <Link 
              href="/services"
              className="inline-block px-8 py-3 border-2 border-black text-black rounded-full font-medium text-lg hover:bg-gray-50 transition"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-semibold text-center mb-12 text-gray-900">
            Sound Familiar?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl mb-3">📞</div>
              <h3 className="font-semibold text-gray-900 mb-2">Missing Calls = Lost Money</h3>
              <p className="text-gray-600">Every missed call is a potential customer going to your competitor instead.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl mb-3">🌐</div>
              <h3 className="font-semibold text-gray-900 mb-2">No Website or Outdated Site</h3>
              <p className="text-gray-600">Customers judge your business by your online presence. A bad site costs you jobs.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl mb-3">⏰</div>
              <h3 className="font-semibold text-gray-900 mb-2">After-Hours Inquiries</h3>
              <p className="text-gray-600">Potential customers calling at 7pm get voicemail. They won't leave a message.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-semibold text-center mb-4 text-gray-900">
            How We Help
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            We build and manage the digital systems that capture more customers and save you time.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            
            {/* Service 1 */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Professional Website</h3>
              <p className="text-gray-600 mb-4">
                Fast, mobile-optimized site that converts visitors into customers.
              </p>
              <Link href="/services#website" className="text-black font-medium hover:underline">
                Learn more →
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">AI Voice Receptionist</h3>
              <p className="text-gray-600 mb-4">
                Answers calls 24/7, books appointments, never misses a customer.
              </p>
              <Link href="/services#voice" className="text-black font-medium hover:underline">
                Learn more →
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">AI Chatbot Widget</h3>
              <p className="text-gray-600 mb-4">
                Website chat that captures leads and answers questions instantly.
              </p>
              <Link href="/services#chatbot" className="text-black font-medium hover:underline">
                Learn more →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Package CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-black text-white rounded-3xl p-12">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-semibold mb-4">
                Get Everything for $697/month
              </h2>
              <p className="text-xl text-gray-300 mb-2">
                Complete digital solution. No setup fees.
              </p>
              <p className="text-lg text-gray-400">
                Website + AI Voice + AI Chatbot - all included
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10">
              
              {/* What's Included */}
              <div className="bg-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-4">What's Included:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-white mr-3">✓</span>
                    <span className="text-gray-200">Professional website build + hosting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-3">✓</span>
                    <span className="text-gray-200">24/7 AI voice receptionist</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-3">✓</span>
                    <span className="text-gray-200">AI chatbot on your website</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-3">✓</span>
                    <span className="text-gray-200">Google Calendar integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-3">✓</span>
                    <span className="text-gray-200">Ongoing updates & support</span>
                  </li>
                </ul>
              </div>

              {/* Value */}
              <div className="bg-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-4">The Value:</h3>
                <ul className="space-y-2 mb-4">
                  <li className="flex justify-between text-gray-300">
                    <span>Website (build + hosting)</span>
                    <span>$497</span>
                  </li>
                  <li className="flex justify-between text-gray-300">
                    <span>AI Voice Receptionist</span>
                    <span>$297</span>
                  </li>
                  <li className="flex justify-between text-gray-300">
                    <span>AI Chatbot Widget</span>
                    <span>$197</span>
                  </li>
                  <li className="flex justify-between text-white font-semibold text-lg border-t border-white/20 pt-2 mt-2">
                    <span>Total Value</span>
                    <span>$991/mo</span>
                  </li>
                </ul>
                <p className="text-green-400 font-semibold text-lg">
                  You Save: $294/month
                </p>
              </div>

            </div>

            <div className="flex gap-4 justify-center flex-wrap">
              <Link 
                href="/pricing"
                className="inline-block px-8 py-3 bg-white text-black rounded-full font-medium text-lg hover:bg-gray-100 transition"
              >
                View Pricing
              </Link>
              <Link 
                href="/contact"
                className="inline-block px-8 py-3 border-2 border-white text-white rounded-full font-medium text-lg hover:bg-white hover:text-black transition"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-4xl font-semibold mb-12 text-gray-900">
            Built for Trades Businesses
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            
            <div>
              <div className="text-5xl font-semibold text-gray-900 mb-2">24/7</div>
              <p className="text-gray-600">Never miss a call, even after hours</p>
            </div>

            <div>
              <div className="text-5xl font-semibold text-gray-900 mb-2">30%+</div>
              <p className="text-gray-600">Average increase in booked jobs</p>
            </div>

            <div>
              <div className="text-5xl font-semibold text-gray-900 mb-2">2 weeks</div>
              <p className="text-gray-600">From signup to fully live</p>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto text-center px-4 max-w-3xl">
          <h2 className="text-4xl font-semibold mb-6 text-gray-900">
            Ready to Stop Losing Customers?
          </h2>
          <p className="text-xl mb-10 text-gray-600">
            Book a free 15-minute call. We'll show you exactly how to capture more leads and grow your business.
          </p>
          <Link 
            href="/contact"
            className="inline-block px-10 py-4 bg-black text-white rounded-full font-medium text-lg hover:bg-gray-800 transition"
          >
            Get Started Today
          </Link>
        </div>
      </section>

    </div>
  )
}