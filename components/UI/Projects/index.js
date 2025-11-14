"use client";
import React, { useState } from "react";
import { MapPin, Calendar, Award, ChevronRight, Filter } from "lucide-react";
import { projects, categories } from "./constant";

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div style={{ background: "#000", color: "#fff", minHeight: "100vh" }}>
      {/* Page Header */}
      <section
        style={{
          padding: "80px 24px 60px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div style={{ maxWidth: "800px" }}>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: "400",
              marginBottom: "24px",
              lineHeight: "1.1",
            }}
          >
            Our Projects
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              color: "#a0a0a0",
              lineHeight: "1.6",
            }}
          >
            Delivering infrastructure excellence across West Africa. Explore our
            portfolio of completed and ongoing projects spanning hydrological
            engineering, agricultural support, construction, and logistics.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section
        style={{
          padding: "0 24px 40px",
          maxWidth: "1200px",
          margin: "0 auto",
          borderBottom: "1px solid #2a2a2a",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <Filter size={20} style={{ color: "#a0a0a0" }} />
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              style={{
                background:
                  activeFilter === category.id ? "#C41E3A" : "#1a1a1a",
                color: activeFilter === category.id ? "#fff" : "#a0a0a0",
                border:
                  activeFilter === category.id ? "none" : "1px solid #2a2a2a",
                padding: "10px 20px",
                borderRadius: "50px",
                cursor: "pointer",
                fontSize: "0.95rem",
                fontWeight: "500",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                if (activeFilter !== category.id) {
                  e.currentTarget.style.borderColor = "#4A9B9B";
                  e.currentTarget.style.color = "#fff";
                }
              }}
              onMouseLeave={(e) => {
                if (activeFilter !== category.id) {
                  e.currentTarget.style.borderColor = "#2a2a2a";
                  e.currentTarget.style.color = "#a0a0a0";
                }
              }}
            >
              {category.name}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section
        style={{
          padding: "60px 24px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
            gap: "32px",
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              style={{
                background: "#0a0a0a",
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid #2a2a2a",
                transition: "all 0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = project.image;
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#2a2a2a";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Project Image Placeholder */}
              <div
                style={{
                  height: "220px",
                  background: `linear-gradient(135deg, ${project.image} 0%, #0a0a0a 100%)`,
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "24px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    background:
                      project.status === "Completed" ? "#4A9B9B" : "#C41E3A",
                    color: project.status === "Completed" ? "#000" : "#fff",
                    padding: "6px 16px",
                    borderRadius: "50px",
                    fontSize: "0.85rem",
                    fontWeight: "600",
                  }}
                >
                  {project.status}
                </div>
              </div>

              {/* Project Content */}
              <div style={{ padding: "24px" }}>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    marginBottom: "12px",
                    fontWeight: "500",
                  }}
                >
                  {project.title}
                </h3>

                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    marginBottom: "16px",
                    fontSize: "0.9rem",
                    color: "#a0a0a0",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <MapPin size={16} />
                    {project.location}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <Calendar size={16} />
                    {project.year}
                  </div>
                </div>

                <p
                  style={{
                    color: "#d0d0d0",
                    lineHeight: "1.6",
                    marginBottom: "20px",
                    fontSize: "0.95rem",
                  }}
                >
                  {project.description}
                </p>

                {/* Stats */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "16px",
                    padding: "16px 0",
                    borderTop: "1px solid #2a2a2a",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        color: "#a0a0a0",
                        marginBottom: "4px",
                      }}
                    >
                      Scale
                    </div>
                    <div
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: "600",
                        color: project.image,
                      }}
                    >
                      {project.stats.scale}
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        color: "#a0a0a0",
                        marginBottom: "4px",
                      }}
                    >
                      Duration
                    </div>
                    <div
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: "600",
                        color: project.image,
                      }}
                    >
                      {project.stats.duration}
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        color: "#a0a0a0",
                        marginBottom: "4px",
                      }}
                    >
                      Team
                    </div>
                    <div
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: "600",
                        color: project.image,
                      }}
                    >
                      {project.stats.team}
                    </div>
                  </div>
                </div>

                {/* Learn More Link */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    color: project.image,
                    fontSize: "0.95rem",
                    fontWeight: "500",
                    marginTop: "16px",
                  }}
                >
                  Learn More
                  <ChevronRight size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: "80px 24px",
              color: "#a0a0a0",
            }}
          >
            <p style={{ fontSize: "1.25rem" }}>
              No projects found in this category.
            </p>
          </div>
        )}
      </section>

      {/* Stats Section */}

      {/* CTA Section */}
      <section
        style={{
          padding: "100px 24px",
          textAlign: "center",
          background: "linear-gradient(135deg, #C41E3A 0%, #9B1830 100%)",
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
            Have a Project in Mind?
          </h2>
          <p
            style={{
              fontSize: "1.25rem",
              color: "#fff",
              marginBottom: "40px",
              opacity: 0.9,
            }}
          >
            Lets discuss how we can bring your infrastructure vision to life
            across West Africa.
          </p>
          <button
            style={{
              background: "#fff",
              color: "#C41E3A",
              border: "none",
              padding: "16px 48px",
              fontSize: "1rem",
              borderRadius: "50px",
              cursor: "pointer",
              fontWeight: "600",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Start a Conversation
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
