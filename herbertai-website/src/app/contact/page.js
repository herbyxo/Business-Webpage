export default function Contact() {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl font-semibold mb-6 text-gray-900 text-center">
          Get In Touch
        </h1>
        <p className="text-xl text-gray-600 text-center mb-12 font-light">
          Ready to stop missing customers? Let's talk about how Herbert AI can help your business.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">Send a Message</h2>
            <form 
              action="https://api.web3forms.com/submit" 
              method="POST"
              className="space-y-4"
            >
              
              <input type="hidden" name="access_key" value="f3618e04-e007-4ee9-a80d-f96e3cc8d481" />

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="0400 000 000"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="Tell us about your business needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 mb-6">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900">Contact Info</h2>
              <div className="space-y-4">
                
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">Email</h3>
                  <a href="mailto:herbert_aisolutions@outlook.com" className="text-gray-600 hover:text-gray-900 transition">
                    herbert_aisolutions@outlook.com
                  </a>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">Phone</h3>
                  <a href="tel:+61448111840" className="text-gray-600 hover:text-gray-900 transition">
                    0448 111 840
                  </a>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">Instagram</h3>
                  <a 
                    href="https://instagram.com/herbert_aisolutions" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition"
                  >
                    @herbert_aisolutions
                  </a>
                </div>

              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">Business Hours</h3>
              <p className="text-gray-600">Monday - Friday</p>
              <p className="text-gray-600">9am - 5pm ACST</p>
              <p className="text-sm text-gray-500 mt-3">We'll respond within 24 hours</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}