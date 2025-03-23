export default function Navbar() {
    return (
      <nav className="sticky top-0 bg-white shadow z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">PhilipBein.dev</h1>
          <div className="space-x-4">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#services" className="hover:text-blue-600">Services</a>
            <a href="#portfolio" className="hover:text-blue-600">Portfolio</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </div>
        </div>
      </nav>
    );
  }