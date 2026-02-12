import Link from 'next/link'

export default function Services() {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-semibold mb-6 text-gray-900">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            Everything you need to capture more customers and grow your trades business.
          </p>
        </div>

        {/* Service 1: Website */}
        <div id="website" className="mb-20 scroll-mt-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-5xl mb-4">🌐</div>
              <h2 className="text-4xl font-semibold mb-4 text-gray-900">
                Professional Website
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                A fast, mobile-optimized website that showcases your services and converts visitors into customers.
              </p>
              
              <h3 className="font-semibold text-gray-900 mb-3">What's Included:</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-black mr-2">✓</span>
                  <span className="text-gray-700">Custom professional design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">✓</span>
                  <span className="text-gray-700">Mobile-optimized (most customers browse on phones)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">✓</span>
                  <span className="text-gray-700">Fast loading (under 2 seconds)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">✓</span>
                  <span className="text-gray-700">Contact forms for quote requests</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">✓</span>
                  <span className="text-gray-700">Before/after gallery (if applicable)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">✓</span>
                  <span className="text-gray-700">Hosting & ongoing maintenance</span>
                </li>
              </ul>

              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 mb-4">
                <p className="text-sm text-gray-600 mb-2">Pricing:</p>
                <p className="text-2xl font-semibold text-gray-900">$300 <span className="text-base font-normal text-gray-600">one-time setup</span></p>
                <p className="text-2xl font-semibold text-gray-900">$197<span className="text-base font-normal text-gray-600">/month hosting</span></p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="text-sm text-gray-700 mb-2">💡 Or get this included in our <Link href="/pricing" className="font-semibold text-blue-600 hover:underline">Complete Package for $697/month</Link></p>
                <p className="text-xs text-gray-600">(Save $294/month + no setup fees)</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-4">Why You Need This:</h4>
              <p className="text-gray-700 mb-4">
                80% of customers check your website before calling. If you don't have one (or have an outdated one), you're losing jobs before you even know about them.
              </p>
              <p className="text-gray-700">
                A professional website builds trust, showcases your work, and makes it easy for customers to contact you.
              </p>
            </div>
          </div>
        </div>

        {/* Service 2: Voice */}
        <div id="voice" className="mb-20 scroll-mt-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-4">Why You Need This:</h4>
              <p className="text-gray-700 mb-4">
                Studies show 80% of callers won't leave voicemail. That means every missed call is a lost customer who will call your competitor instead.
              </p>
              <p className="text-gray-700">
                An AI receptionist ensures you never miss another opportunity - day or night.
              </p>
            </div>

            <div className="order-1 md:order-2">
              <div className="text-5xl mb-4">🤖</div>
              <h2 className="text-4xl font-semibold mb-4 text-gray-900">
                AI Voice Receptionist
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Never miss a customer call again. Our AI answers 24/7, books appointments, and captures leads while you focus on the work.
              </p>
              
              <h3 className="font-semibold text-gray-900 mb-3">What It Does:</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-black mr-2">✓</span>
                  <span className="text-gray-700">Answers calls professionally 24/7</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">✓</span>
                  <span className="text-gray-700">Books appointments into Google Calendar</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">✓</span>
                  <span className="text-gray-700">Answers FAQs about your services/pricing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">✓</span>
                  <span className="text-gray-700">Captures customer details automatically</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">✓</span>
                  <span className="text-gray-700">Transfers urgent calls to you if needed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">✓</span>
                  <span className="text-gray-700">Sends SMS confirmations</span>
                </li>
              </ul>

              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 mb-4">
                <p className="text-sm text-gray-600 mb-2">Pricing:</p>
                <p className="text-2xl font-semibold text-gray-900">$297<span className="text-base font-normal text-gray-600">/month</span></p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="text-sm text-gray-700 mb-2">💡 Or get this included in our <Link href="/pricing" className="font-semibold text-blue-600 hover:underline">Complete Package for $697/month</Link></p>
                <p className="text-xs text-gray-600">(Save $294/month + includes website & chatbot)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Service 3: Chatbot */}
        <div id="chatbot" className="mb-20 scroll-mt-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-5xl mb-4">💬</div>
              <h2 className="text-4xl font-semibold mb-4 text-gray-900">
                AI Chatbot Widget
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Capture leads from your website 24/7. The chatbot answers questions and collects contact info automatically.
              </p>
              
              <h3 className="font-semibold text-gray-900 mb-3">What It Does:</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-black mr-2">✓</span>
                  <span className="text-gray-700">Lives on your website as a chat widget</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">✓</span>
                  <span className="text-gray-700">Answers visitor questions instantly</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">✓</span>
                  <span className="text-gray-700">Captures name, email, phone automatically</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">✓</span>
                  <span className="text-gray-700">Books appointments through chat</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">✓</span>
                  <span className="text-gray-700">Trained on your business info</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">✓</span>
                  <span className="text-gray-700">Works on mobile and desktop</span>
                </li>
              </ul>

              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 mb-4">
                <p className="text-sm text-gray-600 mb-2">Pricing:</p>
                <p className="text-2xl font-semibold text-gray-900">$197<span className="text-base font-normal text-gray-600">/month</span></p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="text-sm text-gray-700 mb-2">💡 Or get this included in our <Link href="/pricing" className="font-semibold text-blue-600 hover:underline">Complete Package for $697/month</Link></p>
                <p className="text-xs text-gray-600">(Save $294/month + includes website & AI voice)</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-4">Why You Need This:</h4>
              <p className="text-gray-700 mb-4">
                Most website visitors browse outside business hours. Without a chatbot, they leave without contacting you.
              </p>
              <p className="text-gray-700">
                A chatbot captures these leads automatically, even while you sleep.
              </p>
            </div>
          </div>
        </div>

        {/* Package CTA */}
        <div className="bg-black text-white rounded-3xl p-12 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Get All 3 Services for $697/month
            </h2>
            <p className="text-xl text-gray-300 mb-2">
              Complete digital solution. No setup fees.
            </p>
            <p className="text-gray-400">
              Save $294/month vs buying individually
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-3xl mb-2">🌐</div>
              <h3 className="font-semibold mb-1">Website</h3>
              <p className="text-sm text-gray-300">Build + hosting included</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-3xl mb-2">🤖</div>
              <h3 className="font-semibold mb-1">AI Voice</h3>
              <p className="text-sm text-gray-300">24/7 call answering</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-3xl mb-2">💬</div>
              <h3 className="font-semibold mb-1">AI Chatbot</h3>
              <p className="text-sm text-gray-300">Website chat widget</p>
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

        {/* Contact Section */}
        <div className="bg-gray-50 rounded-3xl p-12 border border-gray-200">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">
              Have Questions? Let's Talk
            </h2>
            <p className="text-gray-600 mb-8">
              Not sure which service is right for you? Book a free 15-minute call and we'll build a custom plan for your business.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div>
                <div className="text-3xl mb-2">📞</div>
                <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                <a href="tel:+61448111840" className="text-gray-600 hover:text-gray-900">
                  0448 111 840
                </a>
              </div>
              <div>
                <div className="text-3xl mb-2">✉️</div>
                <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                <a href="mailto:herbert_aisolutions@outlook.com" className="text-gray-600 hover:text-gray-900 text-sm">
                  herbert_aisolutions@outlook.com
                </a>
              </div>
              <div>
              <Link 
                href="https://calendly.com/herbert_aisolutions/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-black text-white rounded-full font-medium text-lg hover:bg-gray-800 transition"
                >
                Book Free Call
                </Link>
            </div>
            </div>

            <Link 
              href="/contact"
              className="inline-block px-10 py-4 bg-black text-white rounded-full font-medium text-lg hover:bg-gray-800 transition"
            >
              Contact Us Now
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}