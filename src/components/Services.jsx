export default function Services() {
    return (
      <section className="py-20 px-4 bg-white" id="services">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">What I Offer</h2>
          <p className="text-lg text-gray-600 mb-8">Simple services to get your business online fast:</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <li className="bg-gray-50 p-6 rounded-lg shadow-sm text-gray-700">One-page websites</li>
            <li className="bg-gray-50 p-6 rounded-lg shadow-sm text-gray-700">Landing pages for marketing</li>
            <li className="bg-gray-50 p-6 rounded-lg shadow-sm text-gray-700">Custom mobile-friendly designs</li>
            <li className="bg-gray-50 p-6 rounded-lg shadow-sm text-gray-700">Contact and booking forms</li>
          </ul>
        </div>
      </section>
    );
  }
  