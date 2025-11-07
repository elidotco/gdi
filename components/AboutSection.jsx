"use client";

import React, { useState, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Droplets,
  Wheat,
  Building2,
  Truck,
} from "lucide-react";

const ServicesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const services = [
    {
      title: "Hydrological Engineering",
      icon: Droplets,
      image: "linear-gradient(135deg, #2a5298 0%, #1e3c72 100%)",
      description:
        "River maintenance, coastal protection, and comprehensive water resource management",
    },
    {
      title: "Agricultural Support",
      icon: Wheat,
      image: "linear-gradient(135deg, #2d7a45 0%, #1e5631 100%)",
      description:
        "Complete agro-logistics solutions from farm setup to market distribution",
    },
    {
      title: "Construction Services",
      icon: Building2,
      image: "linear-gradient(135deg, #d4a574 0%, #a67c52 100%)",
      description:
        "Infrastructure development, road construction, and earth moving operations",
    },
    {
      title: "General Logistics",
      icon: Truck,
      image: "linear-gradient(135deg, #ff6b35 0%, #d45520 100%)",
      description:
        "Multi-modal transport solutions across 10+ West African countries",
    },
  ];

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cardWidth = container.offsetWidth / 3;
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;

    container.scrollBy({ left: scrollAmount, behavior: "smooth" });

    if (direction === "left") {
      setCurrentIndex(Math.max(0, currentIndex - 1));
    } else {
      setCurrentIndex(Math.min(services.length - 1, currentIndex + 1));
    }
  };

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-5xl lg:text-6xl font-bold">
            Delivering Excellence
          </h2>

          {/* Navigation Arrows */}
          <div className="flex gap-4">
            <button
              onClick={() => scroll("left")}
              disabled={currentIndex === 0}
              className="p-3 border border-gray-300 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="Previous services"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={currentIndex === services.length - 3}
              className="p-3 border border-gray-300 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="Next services"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Services Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-hidden scroll-smooth mb-12"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                {/* Image Card */}
                <div
                  className="relative h-96 mb-6 overflow-hidden group cursor-pointer"
                  style={{ background: service.image }}
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-40 transition-opacity duration-300" />

                  {/* Icon */}
                  <div className="absolute top-6 left-6 text-white">
                    <Icon className="w-16 h-16 opacity-80" />
                  </div>

                  {/* Hover Content */}
                  <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-lg">{service.description}</p>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                  {service.title}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Description Section */}
        <div className="max-w-4xl mb-8">
          <p className="text-2xl lg:text-3xl leading-relaxed text-gray-800">
            At the heart of GDMI MACS is a strategy to deliver to wider
            stakeholders beyond shareholder return. We combine technical
            expertise and local knowledge to power sustainable impact. Our teams
            develop deep understanding and partnerships of trust with our
            clients across agricultural, construction, hydrological and
            logistics services throughout West Africa.
          </p>
        </div>

        {/* CTA Button */}
        <button className="border-2 border-gray-900 px-8 py-4 text-lg font-medium hover:bg-gray-900 hover:text-white transition-all duration-300">
          What we do
        </button>
      </div>
    </section>
  );
};

export default ServicesCarousel;
