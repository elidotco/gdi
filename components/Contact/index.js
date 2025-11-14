"use client";
import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { offices, services, countries } from "./constant";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    country: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        country: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div style={{ background: "#000", color: "#fff", minHeight: "100vh" }}>
      {/* Header Section */}
      <section
        style={{
          padding: "80px 24px 60px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
        >
          <h1
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: "400",
              marginBottom: "24px",
              lineHeight: "1.1",
            }}
          >
            Get In Touch
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              color: "#a0a0a0",
              lineHeight: "1.6",
            }}
          >
            Ready to start your next project? Contact our team to discuss how we
            can help deliver your infrastructure goals across West Africa.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section
        style={{
          padding: "40px 24px 80px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "48px",
          }}
        >
          {/* Contact Form */}
          <div
            style={{
              gridColumn: "span 2",
              background: "#0a0a0a",
              padding: "48px",
              borderRadius: "16px",
              border: "1px solid #2a2a2a",
            }}
          >
            <h2
              style={{
                fontSize: "2rem",
                marginBottom: "8px",
                fontWeight: "500",
              }}
            >
              Send Us a Message
            </h2>
            <p
              style={{
                color: "#a0a0a0",
                marginBottom: "32px",
                fontSize: "1rem",
              }}
            >
              Fill out the form below and we&apos;ll get back to you within 24
              hours.
            </p>

            {submitted ? (
              <div
                style={{
                  background: "#4A9B9B",
                  color: "#000",
                  padding: "32px",
                  borderRadius: "12px",
                  textAlign: "center",
                  minHeight: "400px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "16px",
                }}
              >
                <CheckCircle size={64} />
                <h3 style={{ fontSize: "1.75rem", fontWeight: "600" }}>
                  Message Sent Successfully!
                </h3>
                <p style={{ fontSize: "1.125rem" }}>
                  Thank you for contacting us. We&apos;ll be in touch soon.
                </p>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "24px",
                  }}
                >
                  <div>
                    <label
                      style={{
                        display: "block",
                        marginBottom: "8px",
                        fontSize: "0.9rem",
                        color: "#a0a0a0",
                      }}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{
                        width: "100%",
                        padding: "14px",
                        background: "#1a1a1a",
                        border: "1px solid #2a2a2a",
                        borderRadius: "8px",
                        color: "#fff",
                        fontSize: "1rem",
                        outline: "none",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#C41E3A")}
                      onBlur={(e) => (e.target.style.borderColor = "#2a2a2a")}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        display: "block",
                        marginBottom: "8px",
                        fontSize: "0.9rem",
                        color: "#a0a0a0",
                      }}
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        width: "100%",
                        padding: "14px",
                        background: "#1a1a1a",
                        border: "1px solid #2a2a2a",
                        borderRadius: "8px",
                        color: "#fff",
                        fontSize: "1rem",
                        outline: "none",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#C41E3A")}
                      onBlur={(e) => (e.target.style.borderColor = "#2a2a2a")}
                    />
                  </div>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "24px",
                  }}
                >
                  <div>
                    <label
                      style={{
                        display: "block",
                        marginBottom: "8px",
                        fontSize: "0.9rem",
                        color: "#a0a0a0",
                      }}
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        padding: "14px",
                        background: "#1a1a1a",
                        border: "1px solid #2a2a2a",
                        borderRadius: "8px",
                        color: "#fff",
                        fontSize: "1rem",
                        outline: "none",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#C41E3A")}
                      onBlur={(e) => (e.target.style.borderColor = "#2a2a2a")}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        display: "block",
                        marginBottom: "8px",
                        fontSize: "0.9rem",
                        color: "#a0a0a0",
                      }}
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        padding: "14px",
                        background: "#1a1a1a",
                        border: "1px solid #2a2a2a",
                        borderRadius: "8px",
                        color: "#fff",
                        fontSize: "1rem",
                        outline: "none",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#C41E3A")}
                      onBlur={(e) => (e.target.style.borderColor = "#2a2a2a")}
                    />
                  </div>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "24px",
                  }}
                >
                  <div>
                    <label
                      style={{
                        display: "block",
                        marginBottom: "8px",
                        fontSize: "0.9rem",
                        color: "#a0a0a0",
                      }}
                    >
                      Service Interested In *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      style={{
                        width: "100%",
                        padding: "14px",
                        background: "#1a1a1a",
                        border: "1px solid #2a2a2a",
                        borderRadius: "8px",
                        color: "#fff",
                        fontSize: "1rem",
                        outline: "none",
                        cursor: "pointer",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#C41E3A")}
                      onBlur={(e) => (e.target.style.borderColor = "#2a2a2a")}
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      style={{
                        display: "block",
                        marginBottom: "8px",
                        fontSize: "0.9rem",
                        color: "#a0a0a0",
                      }}
                    >
                      Country *
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      style={{
                        width: "100%",
                        padding: "14px",
                        background: "#1a1a1a",
                        border: "1px solid #2a2a2a",
                        borderRadius: "8px",
                        color: "#fff",
                        fontSize: "1rem",
                        outline: "none",
                        cursor: "pointer",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#C41E3A")}
                      onBlur={(e) => (e.target.style.borderColor = "#2a2a2a")}
                    >
                      <option value="">Select a country</option>
                      {countries.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      fontSize: "0.9rem",
                      color: "#a0a0a0",
                    }}
                  >
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    style={{
                      width: "100%",
                      padding: "14px",
                      background: "#1a1a1a",
                      border: "1px solid #2a2a2a",
                      borderRadius: "8px",
                      color: "#fff",
                      fontSize: "1rem",
                      outline: "none",
                      resize: "vertical",
                      fontFamily: "inherit",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#C41E3A")}
                    onBlur={(e) => (e.target.style.borderColor = "#2a2a2a")}
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  style={{
                    background: "#C41E3A",
                    color: "#fff",
                    border: "none",
                    padding: "16px 32px",
                    borderRadius: "8px",
                    fontSize: "1rem",
                    fontWeight: "600",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    transition: "all 0.3s",
                    width: "100%",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#9B1830")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "#C41E3A")
                  }
                >
                  <Send size={20} />
                  Send Message
                </button>
              </div>
            )}
          </div>

          {/* Contact Information Sidebar */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
            {/* Office Cards */}
            {offices.map((office, index) => (
              <div
                key={index}
                style={{
                  background: "#0a0a0a",
                  padding: "32px",
                  borderRadius: "16px",
                  border: "1px solid #2a2a2a",
                }}
              >
                <div style={{ marginBottom: "20px" }}>
                  <h3
                    style={{
                      fontSize: "1.5rem",
                      marginBottom: "4px",
                      fontWeight: "500",
                    }}
                  >
                    {office.country}
                  </h3>
                  {office.headquarters && (
                    <span
                      style={{
                        background: "#C41E3A",
                        color: "#fff",
                        padding: "4px 12px",
                        borderRadius: "50px",
                        fontSize: "0.75rem",
                        fontWeight: "600",
                        display: "inline-block",
                      }}
                    >
                      HEADQUARTERS
                    </span>
                  )}
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  <div style={{ display: "flex", gap: "12px" }}>
                    <MapPin
                      size={20}
                      style={{ color: "#4A9B9B", flexShrink: 0 }}
                    />
                    <div>
                      <div
                        style={{
                          fontSize: "0.85rem",
                          color: "#a0a0a0",
                          marginBottom: "4px",
                        }}
                      >
                        Address
                      </div>
                      <div style={{ fontSize: "0.95rem" }}>
                        {office.address}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "12px" }}>
                    <Phone
                      size={20}
                      style={{ color: "#4A9B9B", flexShrink: 0 }}
                    />
                    <div>
                      <div
                        style={{
                          fontSize: "0.85rem",
                          color: "#a0a0a0",
                          marginBottom: "4px",
                        }}
                      >
                        Phone
                      </div>
                      {office.phones.map((phone, i) => (
                        <a
                          key={i}
                          href={`tel:${phone.replace(/\s/g, "")}`}
                          style={{
                            fontSize: "0.95rem",
                            color: "#fff",
                            textDecoration: "none",
                            display: "block",
                          }}
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "12px" }}>
                    <Mail
                      size={20}
                      style={{ color: "#4A9B9B", flexShrink: 0 }}
                    />
                    <div>
                      <div
                        style={{
                          fontSize: "0.85rem",
                          color: "#a0a0a0",
                          marginBottom: "4px",
                        }}
                      >
                        Email
                      </div>
                      <a
                        href={`mailto:${office.email}`}
                        style={{
                          fontSize: "0.95rem",
                          color: "#fff",
                          textDecoration: "none",
                        }}
                      >
                        {office.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Business Hours */}
            <div
              style={{
                background: "#0a0a0a",
                padding: "32px",
                borderRadius: "16px",
                border: "1px solid #2a2a2a",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "20px",
                }}
              >
                <Clock size={20} style={{ color: "#4A9B9B" }} />
                <h3 style={{ fontSize: "1.25rem", fontWeight: "500" }}>
                  Business Hours
                </h3>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span style={{ color: "#a0a0a0" }}>Monday - Friday</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span style={{ color: "#a0a0a0" }}>Saturday</span>
                  <span>9:00 AM - 2:00 PM</span>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span style={{ color: "#a0a0a0" }}>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div
              style={{
                background: "linear-gradient(135deg, #1E4D5C 0%, #4A9B9B 100%)",
                padding: "32px",
                borderRadius: "16px",
              }}
            >
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "500",
                  marginBottom: "16px",
                }}
              >
                Need Equipment?
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  marginBottom: "20px",
                  opacity: 0.9,
                }}
              >
                Check our available plant and equipment for immediate
                deployment.
              </p>
              <button
                style={{
                  background: "#fff",
                  color: "#1E4D5C",
                  border: "none",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  fontSize: "0.95rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  width: "100%",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-2px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                View Equipment
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
