export default function Pricing() {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-semibold mb-6 text-gray-900">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Choose individual services or save with our complete package.
          </p>
        </div>

        {/* Package vs Individual Toggle Info */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-12 text-center border border-gray-200">
          <p className="text-gray-700">
            <span className="font-semibold">Save $294/month</span> by choosing the Complete Package instead of individual services
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid lg:grid-cols-4 gap-6 mb-16">
          
          {/* Individual Service 1 */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <div className="text-3xl mb-3">🌐</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Website</h3>
            <p className="text-gray-600 text-sm mb-4">Professional site + hosting</p>
            
            <div className="mb-4">
              <p className="text-gray-700 mb-1">
                <span className="text-2xl font-semibold text-gray-900">$300</span>
                <span className="text-sm"> setup</span>
              </p>
              <p className="text-gray-700">
                <span className="text-2xl font-semibold text-gray-900">$197</span>
                <span className="text-sm">/month</span>
              </p>
            </div>

            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li>✓ Custom design</li>
              <li>✓ Mobile-optimized</li>
              <li>✓ Hosting included</li>
              <li>✓ Ongoing maintenance</li>
            </ul>

            <a 
              href="/contact"
              className="block w-full text-center px-4 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition"
            >
              Get Started
            </a>
          </div>

          {/* Individual Service 2 */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <div className="text-3xl mb-3">🤖</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Voice</h3>
            <p className="text-gray-600 text-sm mb-4">24/7 call answering</p>
            
            <div className="mb-4">
              <p className="text-gray-700 mb-1">
                <span className="text-2xl font-semibold text-gray-900">$297</span>
                <span className="text-sm">/month</span>
              </p>
            </div>

            <ul className="space-y-2 text-sm text-gray-600 mb-6 mt-8">
              <li>✓ 24/7 answering</li>
              <li>✓ Appointment booking</li>
              <li>✓ FAQ handling</li>
              <li>✓ Call transfer</li>
            </ul>

            <a 
              href="/contact"
              className="block w-full text-center px-4 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition"
            >
              Get Started
            </a>
          </div>

          {/* Individual Service 3 */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <div className="text-3xl mb-3">💬</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Chatbot</h3>
            <p className="text-gray-600 text-sm mb-4">Website chat widget</p>
            
            <div className="mb-4">
              <p className="text-gray-700 mb-1">
                <span className="text-2xl font-semibold text-gray-900">$197</span>
                <span className="text-sm">/month</span>
              </p>
            </div>

            <ul className="space-y-2 text-sm text-gray-600 mb-6 mt-8">
              <li>✓ Instant responses</li>
              <li>✓ Lead capture</li>
              <li>✓ Booking through chat</li>
              <li>✓ Custom training</li>
            </ul>

            <a 
              href="/contact"
              className="block w-full text-center px-4 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition"
            >
              Get Started
            </a>
          </div>

          {/* Package */}
          <div className="bg-black text-white rounded-2xl p-6 border-2 border-black relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              BEST VALUE
            </div>
            
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="text-xl font-semibold mb-2">Complete Package</h3>
            <p className="text-gray-300 text-sm mb-4">All 3 services included</p>
            
            <div className="mb-4">
              <p className="text-gray-300 line-through text-sm">$991/month</p>
              <p className="mb-1">
                <span className="text-3xl font-semibold">$697</span>
                <span className="text-sm">/month</span>
              </p>
              <p className="text-green-400 text-sm font-semibold">Save $294/month</p>
            </div>

            <ul className="space-y-2 text-sm text-gray-300 mb-6">
              <li>✓ Everything included</li>
              <li>✓ No setup fees</li>
              <li>✓ Priority support</li>
              <li>✓ Monthly updates</li>
            </ul>

            <a 
              href="/contact"
              className="block w-full text-center px-4 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-100 transition"
            >
              Get Started
            </a>
          </div>

        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-gray-900 text-center">
            Pricing FAQs
          </h2>
          
          <div className="space-y-4">
            
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Are there any contracts?</h3>
              <p className="text-gray-700">No. All services are month-to-month. Cancel anytime with 30 days notice.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">What's included in the website hosting?</h3>
              <p className="text-gray-700">Fast hosting, security updates, uptime monitoring, and content updates (up to 2 hours/month).</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">How long does setup take?</h3>
              <p className="text-gray-700">Website: 1-2 weeks. AI Voice & Chatbot: 3-5 days after website is live. Complete package: 2-3 weeks total.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Can I upgrade later?</h3>
              <p className="text-gray-700">Yes! Start with one service and add more anytime. Or upgrade to the package for instant savings.</p>
            </div>

          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 mb-8">
            Book a free call and we'll build a custom plan for your business.
          </p>
          <a 
            href="/contact"
            className="inline-block px-10 py-4 bg-black text-white rounded-full font-medium text-lg hover:bg-gray-800 transition"
          >
            Schedule Free Call
          </a>
        </div>

      </div>
    </div>
  )
}