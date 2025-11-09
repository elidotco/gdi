import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-primary shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 ">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="">
            <Image
              src="/6.png"
              alt="logo"
              width={250}
              height={350}
              className=" object-contain "
            />
          </div>

          {/* Navigation Links */}
          <ul className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <li>
              <a href="#home" className=" hover:text-yellow-600 transition">
                Home
              </a>
            </li>
            <li className="relative group">
              <a
                href="#about"
                className="text-gray-100 hover:text-yellow-600 transition flex items-center"
              >
                About Us
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-gray-100 hover:text-yellow-600 transition"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-gray-100 hover:text-yellow-600 transition"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#media"
                className="text-gray-100 hover:text-yellow-600 transition"
              >
                Media
              </a>
            </li>
            <li>
              <a
                href="#csr"
                className="text-gray-100 hover:text-yellow-600 transition"
              >
                CSR
              </a>
            </li>
            <li>
              <a
                href="#careers"
                className="text-gray-100 hover:text-yellow-600 transition"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-100 hover:text-yellow-600 transition"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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
      </nav>
    </header>
  );
};

export default Header;
