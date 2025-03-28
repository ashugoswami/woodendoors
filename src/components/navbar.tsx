"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, X } from "lucide-react";
// import { Phone, ShoppingCart, Search } from "lucide-react";

const navItems = [
  { name: "HOME", href: "/", active: true },
  {
    name: "ABOUT",
    href: "/about",
    dropdown: false,
  },
  {
    name: "DOORS",
    href: "/doors",
    dropdown: true,
    dropdownItems: [
      { name: "Plastic", href: "/products/plastic" },
      { name: "Wooden", href: "/products/wooden" },
      { name: "Portfolio", href: "/products/portfolio" },
    ],
  },
  { name: "BLOG", href: "/blog" },
  { name: "DOOR FRAMES", href: "/doorframes" },
  { name: "HOME FURNISHING", href: "/homefurnishing" },
  { name: "CONTACT US", href: "/contacts" },
];

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMouseEnter = (name: string) => {
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-gray-900 hover:text-gold transition-colors duration-300">
                [Aditya]
              </span>
            </Link>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item, i) => (
              <div
                key={item.name}
                className="relative animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  className={`text-sm font-bold hover:text-gold transition-colors duration-300 ${
                    item.active ? "text-gold" : "text-gray-700"
                  }`}
                >
                  {item.name}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg z-50 animate-fade-in">
                    <div className="py-2">
                      {item.dropdownItems?.map((dropdownItem, j) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gold transition-colors duration-300 animate-slide-in-right"
                          style={{ animationDelay: `${j * 0.1}s` }}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Info and Icons */}
          {/* <div
            className="hidden md:flex items-center space-x-4 animate-fade-in"
            style={{ animationDelay: "0.7s" }}
          >
            <div className="flex items-center">
              <div className="bg-gold rounded-full p-2 mr-2 animate-pulse-slow">
                <Phone className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  0 (800) 255-52-38
                </p>
                <p className="text-xs text-gray-500">24/7 - FREE - CALL</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 text-gray-500 hover:text-gold transition-colors duration-300">
                <ShoppingCart className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-500 hover:text-gold transition-colors duration-300">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div> */}

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-gray-500 hover:text-gold transition-colors duration-300"
              onClick={toggleMobileMenu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-[#2a1c16] text-white shadow-xl z-50 flex flex-col">
            {/* Close button */}
            <div className="flex justify-end p-4">
              <button
                onClick={toggleMobileMenu}
                className="text-white hover:text-gold transition-colors duration-300"
                aria-label="Close mobile menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Navigation items */}
            <nav className="flex-1 overflow-y-auto">
              <ul className="px-4">
                {navItems.map((item) => (
                  <li
                    key={item.name}
                    className="border-b border-[#3c2a21] last:border-b-0"
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center justify-between py-4 ${
                        item.active
                          ? "bg-gold text-white"
                          : "text-white hover:bg-[#3c2a21]"
                      }`}
                      onClick={toggleMobileMenu}
                    >
                      <span className="font-medium">{item.name}</span>
                      {item.dropdown ? (
                        <ChevronRight className="h-5 w-5" />
                      ) : null}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Cart at bottom */}
            {/* <div className="p-4 border-t border-[#3c2a21] flex items-center">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#2a1c16] font-medium mr-2">
                0
              </div>
              <ShoppingCart className="h-5 w-5 text-gold" />
            </div> */}
          </div>
        </div>
      )}
    </header>
  );
}
