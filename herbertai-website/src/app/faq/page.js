export default function FAQ() {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-semibold mb-6 text-gray-900">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 font-light">
            Everything you need to know about Herbert AI
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          
          {/* Question 1 */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Does it sound robotic?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              No. Herbert AI uses advanced natural language processing to sound natural and conversational. 
              Most customers can't tell they're speaking with an AI. The voice is professional, friendly, 
              and adapts to the conversation naturally.
            </p>
          </div>

          {/* Question 2 */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Can it understand different accents?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Yes. Herbert AI is trained on diverse speech patterns and accents from around the world, 
              including Australian accents. It can understand and respond to various accents, dialects, 
              and speaking styles effectively.
            </p>
          </div>

          {/* Question 3 */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              What if the AI can't answer a question?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              If Herbert AI encounters a question it can't answer, it will politely take a message with 
              the customer's details and let them know you'll get back to them. You can also configure 
              it to transfer the call directly to you or your team.
            </p>
          </div>

          {/* Question 4 */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              How is it customised to my business?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We work with you to understand your business - your services, pricing, FAQs, booking process, 
              and any specific information customers typically ask about. Herbert AI is then trained on 
              this information to answer questions accurately and professionally.
            </p>
          </div>

          {/* Question 5 */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              What information does it capture from calls?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Herbert AI can capture any information you need, including customer names, phone numbers, 
              email addresses, appointment preferences, and specific questions or requests. All of this 
              is automatically recorded in your system (Google Calendar, spreadsheets, or dashboard).
            </p>
          </div>

          {/* Question 6 */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              How does appointment booking work?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Herbert AI connects directly to your Google Calendar. When a customer requests an appointment, 
              it checks your real-time availability, offers suitable time slots, and books the appointment 
              automatically. You and the customer both receive confirmation via SMS.
            </p>
          </div>

          {/* Question 7 */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Is it available 24/7?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Yes. Herbert AI answers calls round the clock, including weekends, after hours, and holidays. 
              You'll never miss a potential customer, even when you're unavailable.
            </p>
          </div>

          {/* Question 8 */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              How long does setup take?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Initial setup typically takes 1-2 weeks. This includes a consultation to understand your 
              business needs, training the AI on your information, integrating with your calendar and 
              phone system, and testing to ensure everything works perfectly.
            </p>
          </div>

          {/* Question 9 */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Can I update the AI's information later?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Absolutely. As your business evolves - new services, updated pricing, changed hours - we can 
              update Herbert AI's knowledge base to reflect these changes. Regular updates are included 
              in your service.
            </p>
          </div>

          {/* Question 10 */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              What happens to missed calls currently?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Without Herbert AI, missed calls often mean lost customers. They might call a competitor 
              instead of leaving a voicemail. Herbert AI ensures every call is answered professionally, 
              converting those missed opportunities into booked appointments and captured leads.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-gray-50 rounded-2xl p-12 border border-gray-200">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">
            Still Have Questions?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We're here to help. Get in touch and we'll answer any questions you have about Herbert AI.
          </p>
          <a 
            href="/contact"
            className="inline-block px-8 py-3 bg-black text-white rounded-full font-medium text-lg hover:bg-gray-800 transition"
          >
            Contact Us
          </a>
        </div>

      </div>
    </div>
  )
}