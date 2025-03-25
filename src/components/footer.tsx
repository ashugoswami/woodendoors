import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-gold">[windazo]</h3>
            <p className="text-gray-400 mb-4">
              Quality window blinds and shutters for your home. We provide the
              best products with professional installation.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-gold">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-gold">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-400 hover:text-gold"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/contacts"
                  className="text-gray-400 hover:text-gold"
                >
                  Contacts
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products/plastic"
                  className="text-gray-400 hover:text-gold"
                >
                  Plastic Blinds
                </Link>
              </li>
              <li>
                <Link
                  href="/products/wooden"
                  className="text-gray-400 hover:text-gold"
                >
                  Wooden Shutters
                </Link>
              </li>
              <li>
                <Link
                  href="/products/portfolio"
                  className="text-gray-400 hover:text-gold"
                >
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold">Contact Us</h4>
            <p className="text-gray-400 mb-2">123 Window Street, Blind City</p>
            <p className="text-gray-400 mb-2">0 (800) 255-52-38</p>
            <p className="text-gray-400 mb-2">info@windazo.com</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Windazo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
