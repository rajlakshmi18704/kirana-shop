import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-10">
      <div className="container mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Shop Info */}
        <div>
          <h3 className="text-xl font-semibold">Kirana Shop</h3>
          <p className="text-gray-300 mt-2">
            Your one-stop shop for daily essentials, groceries, and more.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#" className="text-gray-300 hover:text-blue-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-blue-400">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-blue-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-blue-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <p className="text-gray-300 mt-2">📍 123 Market Street, Your City</p>
          <p className="text-gray-300">📞 +91 98765 43210</p>
          <p className="text-gray-300">✉️ kirana@example.com</p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center bg-gray-900 py-4">
        <p className="text-gray-400">© 2025 Kirana Shop. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
