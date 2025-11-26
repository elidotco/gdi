"use client";

import React from "react";
import {
  Shield,
  Leaf,
  TrendingUp,
  Zap,
  MapPin,
  Users,
  Globe,
} from "lucide-react";
import { countries, stats, values } from "./constant";
import MaskText from "@/components/Common/MaskText";

const About = () => {
  return (
    <div style={{ background: "#000", color: "#fff", minHeight: "100vh" }}>
      {/* Mission Section */}
      <section
        style={{
          background: "#0a0a0a",
          padding: "80px 24px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* <h2
            style={{
              fontSize: "2.5rem",
              marginBottom: "32px",
              fontWeight: "400",
            }}
          >
            Our Mission
          </h2> */}
          <MaskText phrases={["Our Mission"]} tag={"h1"} />
          <p
            style={{
              fontSize: "1.25rem",
              lineHeight: "1.8",
              color: "#d0d0d0",
              maxWidth: "900px",
            }}
          >
            At the heart of GDI MACS is a strategy to deliver to wider
            stakeholders beyond shareholder return, to include global objectives
            around sustainability and social mobility for all. We believe it is
            our duty to offer a responsible approach to agricultural,
            construction and hydrological engineering services, which manifests
            itself in all our policies, processes and procedures.
          </p>
        </div>
      </section>

      {/* Values Grid */}
      <section
        style={{
          padding: "80px 24px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "48px",
            fontWeight: "400",
            textAlign: "center",
          }}
        >
          Our Values
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                style={{
                  background: "#1a1a1a",
                  padding: "32px",
                  borderRadius: "16px",
                  border: "1px solid #2a2a2a",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = value.color;
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#2a2a2a";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    background: value.color,
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                  }}
                >
                  <Icon size={28} />
                </div>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    marginBottom: "12px",
                    fontWeight: "500",
                  }}
                >
                  {value.title}
                </h3>
                <p
                  style={{
                    color: "#a0a0a0",
                    lineHeight: "1.6",
                    fontSize: "0.95rem",
                  }}
                >
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Stats Section - Bright Background */}
      <section
        style={{
          background: "#4A9B9B",
          padding: "80px 24px",
          margin: "80px 0",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "48px",
            textAlign: "center",
          }}
        >
          {stats.map((stat, index) => (
            <div key={index}>
              <div
                style={{
                  fontSize: "clamp(3rem, 6vw, 4.5rem)",
                  fontWeight: "700",
                  color: "#000",
                  marginBottom: "8px",
                }}
              >
                {stat.number}
              </div>
              <div
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  color: "#0C2340",
                  marginBottom: "4px",
                }}
              >
                {stat.label}
              </div>
              <div
                style={{
                  fontSize: "0.95rem",
                  color: "#1a1a1a",
                }}
              >
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section
        style={{
          padding: "80px 24px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              marginBottom: "16px",
              fontWeight: "400",
            }}
          >
            Our Team
          </h2>
          <p
            style={{
              fontSize: "1.125rem",
              color: "#C41E3A",
              fontWeight: "500",
            }}
          >
            Experience Meets Local Expertise
          </p>
        </div>

        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: "1.8",
              color: "#d0d0d0",
              marginBottom: "24px",
            }}
          >
            The team at GDI MACS offers a rare combination of international
            experience supported by on-the-ground local knowledge across 25
            countries in West Africa. We offer opportunities to expats at one
            end of the spectrum to local internships at the other.
          </p>
          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: "1.8",
              color: "#d0d0d0",
              marginBottom: "24px",
            }}
          >
            With a combined experience of 150 years across our network, we are
            the go-to operator in hydrological engineering, agriculture, and
            construction support services.
          </p>
          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: "1.8",
              color: "#d0d0d0",
            }}
          >
            We are connected by a common purpose to act responsibly and
            sustainably to protect the environment, with a strong commitment to
            deliver a positive social impact on the communities in which we
            operate.
          </p>
        </div>
      </section>

      {/* Approach Section - 2 Column */}
      <section
        style={{
          padding: "80px 24px",
          background: "#0a0a0a",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "32px",
          }}
        >
          <div
            style={{
              background: "#1a1a1a",
              padding: "48px",
              borderRadius: "16px",
              border: "1px solid #2a2a2a",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                background: "#C41E3A",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "24px",
              }}
            >
              <Users size={24} />
            </div>
            <h3
              style={{
                fontSize: "1.75rem",
                marginBottom: "16px",
                fontWeight: "500",
              }}
            >
              Our Philosophy
            </h3>
            <p
              style={{
                color: "#a0a0a0",
                lineHeight: "1.7",
                fontSize: "1.05rem",
              }}
            >
              We empower a different type of workforce that is diverse in
              thought & inclusive of all regardless of orientation. It is
              through this lens that we have and continue to deliver the most
              reliable, dedicated and dynamic services.
            </p>
          </div>

          <div
            style={{
              background: "#1a1a1a",
              padding: "48px",
              borderRadius: "16px",
              border: "1px solid #2a2a2a",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                background: "#1E4D5C",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "24px",
              }}
            >
              <Globe size={24} />
            </div>
            <h3
              style={{
                fontSize: "1.75rem",
                marginBottom: "16px",
                fontWeight: "500",
              }}
            >
              Our Network
            </h3>
            <p
              style={{
                color: "#a0a0a0",
                lineHeight: "1.7",
                fontSize: "1.05rem",
              }}
            >
              We operate as an eclectic network of GDI Owned companies and
              affiliates in over 25 countries, working across government,
              multinationals and PPP to deliver comprehensive solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section
        style={{
          padding: "80px 24px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "48px",
            fontWeight: "400",
            textAlign: "center",
          }}
        >
          Where We Operate
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "16px",
          }}
        >
          {countries.map((country, index) => (
            <div
              key={index}
              style={{
                background: country.headquarters ? "#C41E3A" : "#1a1a1a",
                padding: "24px",
                borderRadius: "12px",
                border: country.headquarters ? "none" : "1px solid #2a2a2a",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                if (!country.headquarters) {
                  e.currentTarget.style.borderColor = "#4A9B9B";
                }
              }}
              onMouseLeave={(e) => {
                if (!country.headquarters) {
                  e.currentTarget.style.borderColor = "#2a2a2a";
                }
              }}
            >
              <MapPin
                size={20}
                style={{ color: country.headquarters ? "#fff" : "#4A9B9B" }}
              />
              <div>
                <div
                  style={{
                    fontWeight: "500",
                    fontSize: "1.05rem",
                  }}
                >
                  {country.name}
                </div>
                {country.headquarters && (
                  <div
                    style={{
                      fontSize: "0.8rem",
                      opacity: 0.9,
                    }}
                  >
                    Headquarters
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          padding: "100px 24px",
          textAlign: "center",
          background: "linear-gradient(135deg, #0C2340 0%, #1E4D5C 100%)",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              marginBottom: "24px",
              fontWeight: "400",
            }}
          >
            Ready to Work With Us?
          </h2>
          <p
            style={{
              fontSize: "1.25rem",
              color: "#d0d0d0",
              marginBottom: "40px",
            }}
          >
            Partner with West Africa&apos;s leading infrastructure and services
            provider.
          </p>
          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              style={{
                background: "#C41E3A",
                color: "#fff",
                border: "none",
                padding: "16px 48px",
                fontSize: "1rem",
                borderRadius: "50px",
                cursor: "pointer",
                fontWeight: "500",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#9B1830")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#C41E3A")
              }
            >
              Get Started
            </button>
            <button
              style={{
                background: "transparent",
                color: "#fff",
                border: "2px solid #fff",
                padding: "14px 48px",
                fontSize: "1rem",
                borderRadius: "50px",
                cursor: "pointer",
                fontWeight: "500",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#fff";
                e.currentTarget.style.color = "#0C2340";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#fff";
              }}
            >
              View Projects
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
