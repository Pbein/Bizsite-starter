export default function Hero() {
    return (
      <section className="min-h-screen flex flex-col justify-center items-center bg-white text-center px-4" id="home">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
          Need a Custom Website for Your Business?
        </h1>
        <p className="text-lg sm:text-xl mb-6 max-w-2xl text-gray-600">
          I help small businesses stand out online with clean, effective websites—custom-made just for your goals.
        </p>
        <a
          href="#contact"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Let’s Talk
        </a>
      </section>
    );
  }
  