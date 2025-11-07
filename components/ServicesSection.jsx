import React from "react";

const ServicesSection = () => {
  return (
    <section className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between flex-wrap  items-center">
          {/* Left Content */}
          <div className="space-y-8 w-full lg:w-2/3">
            <p className="text-3xl lg:text-4xl font-light leading-relaxed">
              At the heart of GDI is a strategy to deliver to wider stakeholders
              beyond shareholder return, to include global objectives around
              sustainability and social mobility for all. We believe it is our
              duty to offer a responsible approach to agricultural, construction
              and hydrological engineering services, which manifests itself in
              all our policies, processes and procedures.
            </p>

            <button className="border border-white px-8 py-3 text-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
              Who we are
            </button>
          </div>

          {/* Right Stats */}
          <div className=" space-y-12 ">
            {/* Stat 1 */}
            <div>
              <p className="text-gray-400 text-lg mb-2">
                Countries served across West Africa
              </p>
              <p className="text-7xl lg:text-8xl font-bold text-red-500">25+</p>
            </div>

            {/* Stat 2 */}
            <div>
              <p className="text-gray-400 text-lg mb-2">
                Years combined experience
              </p>
              <p className="text-7xl lg:text-8xl font-bold text-red-500">150</p>
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
                thought & inclusive of all regardless of orientation, delivering
                the most reliable and dynamic services in West Africa.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-red-500">
                Our Reach
              </h3>
              <p className="text-gray-300 leading-relaxed">
                We operate as an eclectic network of GDI Owned companies and
                affiliates working across government, multinationals and PPP in
                over 25 countries.
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
  );
};

export default ServicesSection;
