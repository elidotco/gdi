"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      title: "Safety First & Foremost",
      subtitle:
        "Continuous process improvement in agricultural, construction and hydrological support services",
      cta: "Our Services",
      bgColor: "from-slate-700 to-slate-900",
    },
    {
      title: "Environmental Responsibility",
      subtitle:
        "Protecting natural environments through sustainable practices across West Africa",
      cta: "Learn More",
      bgColor: "from-green-700 to-green-900",
    },
    {
      title: "Operating Cost Efficiency",
      subtitle:
        "Minimizing downtime with proven computer-aided management systems",
      cta: "Discover How",
      bgColor: "from-blue-700 to-blue-900",
    },
    {
      title: "Maximum Productivity",
      subtitle:
        "Unrivalled maintenance programmes for operational excellence across 25+ countries",
      cta: "Get Started",
      bgColor: "from-amber-700 to-amber-900",
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="relative w-full h-screen bg-gray-900">
      {/* Navigation Header */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-white shadow-md">
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-yellow-400 rounded flex items-center justify-center font-bold text-xl">
                GM
              </div>
              <div>
                <div className="font-bold text-xl text-gray-900">GDMI MACS</div>
                <div className="text-xs text-gray-600">
                  Your partner in West Africa
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <ul className="hidden md:flex items-center space-x-8 text-sm font-medium">
              <li>
                <a
                  href="#home"
                  className="text-gray-900 hover:text-yellow-600 transition"
                >
                  Home
                </a>
              </li>
              <li className="relative group">
                <a
                  href="#about"
                  className="text-gray-700 hover:text-yellow-600 transition flex items-center"
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
                  className="text-gray-700 hover:text-yellow-600 transition"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-700 hover:text-yellow-600 transition"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#media"
                  className="text-gray-700 hover:text-yellow-600 transition"
                >
                  Media
                </a>
              </li>
              <li>
                <a
                  href="#csr"
                  className="text-gray-700 hover:text-yellow-600 transition"
                >
                  CSR
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  className="text-gray-700 hover:text-yellow-600 transition"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-yellow-600 transition"
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

      {/* Carousel Container */}
      <div className="relative w-full h-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background with Overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${slide.bgColor}`}
            >
              {/* Pattern Overlay */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center justify-center px-6">
              <div className="max-w-4xl text-center">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light">
                  {slide.subtitle}
                </p>
                <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-4 rounded transition-all transform hover:scale-105 shadow-lg">
                  {slide.cta}
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-40 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-40 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all ${
                index === currentSlide
                  ? "w-12 h-3 bg-yellow-400"
                  : "w-3 h-3 bg-white/50 hover:bg-white/70"
              } rounded-full`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-40 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
      <section className="bg-gray-900 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <p className="text-3xl lg:text-4xl font-light leading-relaxed">
                At the heart of GDMI MACS is a strategy to deliver to wider
                stakeholders beyond shareholder return, to include global
                objectives around sustainability and social mobility for all. We
                believe it is our duty to offer a responsible approach to
                agricultural, construction and hydrological engineering
                services, which manifests itself in all our policies, processes
                and procedures.
              </p>

              <button className="border border-white px-8 py-3 text-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
                Who we are
              </button>
            </div>

            {/* Right Stats */}
            <div className="space-y-12">
              {/* Stat 1 */}
              <div>
                <p className="text-gray-400 text-lg mb-2">
                  Countries served across West Africa
                </p>
                <p className="text-7xl lg:text-8xl font-bold text-red-500">
                  25+
                </p>
              </div>

              {/* Stat 2 */}
              <div>
                <p className="text-gray-400 text-lg mb-2">
                  Years combined experience
                </p>
                <p className="text-7xl lg:text-8xl font-bold text-red-500">
                  150
                </p>
              </div>
            </div>
          </div>

          {/* Additional Info Section */}
          <div className="mt-20 pt-12 border-t border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-red-500">
                  Our Mission
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  To empower a different type of workforce that is diverse in
                  thought & inclusive of all regardless of orientation,
                  delivering the most reliable and dynamic services in West
                  Africa.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-red-500">
                  Our Reach
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We operate as an eclectic network of GDI Owned companies and
                  affiliates working across government, multinationals and PPP
                  in over 25 countries.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-red-500">
                  Our Commitment
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Connected by a common purpose to act responsibly and
                  sustainably, delivering positive social impact on the
                  communities in which we operate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
