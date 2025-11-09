"use client";

import React, { useState } from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (email) {
      console.log("Newsletter signup:", email);
      setEmail("");
    }
  };

  return (
    <footer className="bg-secondary ">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <div
                  className="w-12 h-12 rounded flex items-center justify-center"
                  style={{ background: "#C41E3A" }}
                >
                  <span className="text-white font-bold text-xl">GM</span>
                </div>
                <div>
                  <h3
                    className="text-2xl font-bold"
                    style={{ color: "#0C2340" }}
                  >
                    GDMI MACS
                  </h3>
                  <p className="text-sm text-">A GDI Company</p>
                </div>
              </div>
              <p className="text-white leading-relaxed mb-4">
                Leading provider of hydrological engineering, agricultural
                support, construction services, and logistics across West
                Africa.
              </p>
              <p className="text-sm text- italic">
                Your partner in sustainable development across 25+ countries.
              </p>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 text- flex items-center justify-center transition-all hover:text-white"
                style={{ "--hover-bg": "#C41E3A" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#C41E3A")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "#f3f4f6")
                }
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 text- flex items-center justify-center transition-all hover:text-white"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#C41E3A")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "#f3f4f6")
                }
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 text- flex items-center justify-center transition-all hover:text-white"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#C41E3A")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "#f3f4f6")
                }
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 text- flex items-center justify-center transition-all hover:text-white"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#C41E3A")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "#f3f4f6")
                }
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-lg mb-4" style={{ color: "#0C2340" }}>
              COMPANY
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-white transition-colors"
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#C41E3A")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#374151")
                  }
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="text-white transition-colors"
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#C41E3A")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#374151")
                  }
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="#partners"
                  className="text-white transition-colors"
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#C41E3A")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#374151")
                  }
                >
                  Partners
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  className="text-white transition-colors"
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#C41E3A")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#374151")
                  }
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#csr"
                  className="text-white transition-colors"
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#C41E3A")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#374151")
                  }
                >
                  CSR
                </a>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-bold text-lg mb-4" style={{ color: "#0C2340" }}>
              SERVICES
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#hydrological"
                  className="text-white transition-colors"
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#1E4D5C")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#374151")
                  }
                >
                  Hydrological Engineering
                </a>
              </li>
              <li>
                <a
                  href="#agricultural"
                  className="text-white transition-colors"
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#4A9B9B")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#374151")
                  }
                >
                  Agricultural Support
                </a>
              </li>
              <li>
                <a
                  href="#construction"
                  className="text-white transition-colors"
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#C41E3A")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#374151")
                  }
                >
                  Construction Services
                </a>
              </li>
              <li>
                <a
                  href="#logistics"
                  className="text-white transition-colors"
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#C41E3A")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#374151")
                  }
                >
                  General Logistics
                </a>
              </li>
              <li>
                <a
                  href="#equipment"
                  className="text-white transition-colors"
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#C41E3A")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#374151")
                  }
                >
                  Plant & Equipment
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4" style={{ color: "#0C2340" }}>
              CONTACT
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin
                  className="w-5 h-5 flex-shrink-0 mt-1"
                  style={{ color: "#C41E3A" }}
                />
                <div>
                  <p className="text-white font-medium">Ghana Office</p>
                  <p className="text-sm text-">Accra, Greater Accra</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Phone
                  className="w-5 h-5 flex-shrink-0 mt-1"
                  style={{ color: "#C41E3A" }}
                />
                <div>
                  <p className="text-white">+233 243 334 444</p>
                  <p className="text-white">+233 244 334 000</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Phone
                  className="w-5 h-5 flex-shrink-0 mt-1"
                  style={{ color: "#C41E3A" }}
                />
                <div>
                  <p className="text-white font-medium">Liberia</p>
                  <p className="text-white">+231 777 3333</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail
                  className="w-5 h-5 flex-shrink-0 mt-1"
                  style={{ color: "#C41E3A" }}
                />
                <div>
                  <a
                    href="mailto:info@gdmimacs.com"
                    className="text-white transition-colors"
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#C41E3A")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#374151")
                    }
                  >
                    info@gdmimacs.com
                  </a>
                  <br />
                  <a
                    href="mailto:support@gdmimacs.com"
                    className="text-white transition-colors"
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#C41E3A")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#374151")
                    }
                  >
                    support@gdmimacs.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-200 pt-12 mb-12">
          <div className="max-w-2xl">
            <h3
              className="text-2xl font-bold mb-3"
              style={{ color: "#0C2340" }}
            >
              Sign up for our newsletter
            </h3>
            <p className="text-white mb-6 leading-relaxed">
              Stay informed about our latest projects, sustainable practices,
              and opportunities across West Africa. We share insights on
              hydrological engineering, agricultural innovations, and
              infrastructure development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address*"
                className="flex-1 px-4 py-3 border border-gray-300 rounded focus:outline-none"
                style={{ borderColor: email ? "#C41E3A" : "#d1d5db" }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#C41E3A";
                  e.currentTarget.style.boxShadow =
                    "0 0 0 3px rgba(196, 30, 58, 0.1)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "#d1d5db";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
              <button
                onClick={handleSubmit}
                className="px-8 py-3 text-white font-semibold rounded transition-colors"
                style={{ background: "#4A9B9B" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#3A7C7C")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "#4A9B9B")
                }
              >
                SIGN UP
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-">
            <p>
              Copyright © {new Date().getFullYear()} GDMI MACS. All rights
              reserved.
            </p>
          </div>
          <div className="flex space-x-6 text-sm">
            <a
              href="#privacy"
              className="text- transition-colors"
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C41E3A")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7280")}
            >
              Privacy Policy
            </a>
            <span className="text-gray-100">|</span>
            <a
              href="#terms"
              className="text- transition-colors"
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C41E3A")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7280")}
            >
              Terms of Service
            </a>
            <span className="text-gray-100">|</span>
            <a
              href="#sitemap"
              className="text- transition-colors"
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C41E3A")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7280")}
            >
              Site Map
            </a>
          </div>
          white
        </div>
      </div>
    </footer>
  );
};

export default Footer;
