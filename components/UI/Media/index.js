import React, { useState } from "react";
import {
  Play,
  Download,
  Calendar,
  Eye,
  FileText,
  Image,
  Video,
  ChevronRight,
  Award,
} from "lucide-react";

const MediaPage = () => {
  const [activeTab, setActiveTab] = useState("news");

  const newsArticles = [
    {
      id: 1,
      title: "GDI MACS Completes Major Coastal Protection Project in Ghana",
      date: "October 15, 2024",
      category: "Project Completion",
      excerpt:
        "Successfully delivered 15km coastal protection infrastructure, safeguarding communities and marine ecosystems along the Volta River delta.",
      image: "#1E4D5C",
      views: "2.3K",
    },
    {
      id: 2,
      title: "Expanding Agricultural Mechanization Across West Africa",
      date: "September 28, 2024",
      category: "Agricultural Impact",
      excerpt:
        "New initiative brings modern farming equipment and training to over 1,000 small-scale farmers in Ghana, Togo, and Benin.",
      image: "#4A9B9B",
      views: "1.8K",
    },
    {
      id: 3,
      title: "GDI MACS Wins West African Infrastructure Excellence Award",
      date: "August 12, 2024",
      category: "Awards",
      excerpt:
        "Recognized for outstanding contribution to sustainable infrastructure development and environmental protection across the region.",
      image: "#C41E3A",
      views: "3.1K",
    },
    {
      id: 4,
      title: "Strategic Partnership with Leading Equipment Manufacturers",
      date: "July 5, 2024",
      category: "Partnerships",
      excerpt:
        "Announcing collaborations with global partners to enhance service delivery and expand equipment availability across our network.",
      image: "#0C2340",
      views: "1.5K",
    },
  ];

  const pressReleases = [
    {
      id: 1,
      title: "Q3 2024 Operations Report",
      date: "October 1, 2024",
      type: "PDF",
      size: "2.4 MB",
    },
    {
      id: 2,
      title: "New Office Opening in Sierra Leone",
      date: "September 15, 2024",
      type: "PDF",
      size: "1.8 MB",
    },
    {
      id: 3,
      title: "Sustainability Report 2024",
      date: "August 20, 2024",
      type: "PDF",
      size: "5.2 MB",
    },
    {
      id: 4,
      title: "Annual Review 2023/2024",
      date: "June 30, 2024",
      type: "PDF",
      size: "8.7 MB",
    },
  ];

  const videos = [
    {
      id: 1,
      title: "Volta River Coastal Protection - Project Overview",
      duration: "5:32",
      date: "October 2024",
      views: "8.2K",
      thumbnail: "#1E4D5C",
    },
    {
      id: 2,
      title: "Agricultural Mechanization Impact Stories",
      duration: "7:15",
      date: "September 2024",
      views: "5.9K",
      thumbnail: "#4A9B9B",
    },
    {
      id: 3,
      title: "Behind the Scenes: Construction Excellence",
      duration: "4:48",
      date: "August 2024",
      views: "6.4K",
      thumbnail: "#C41E3A",
    },
    {
      id: 4,
      title: "GDI MACS: 150 Years of Combined Experience",
      duration: "3:20",
      date: "July 2024",
      views: "12.1K",
      thumbnail: "#0C2340",
    },
  ];

  const gallery = [
    {
      id: 1,
      title: "Coastal Protection Works",
      location: "Ghana",
      color: "#1E4D5C",
    },
    {
      id: 2,
      title: "Agricultural Equipment",
      location: "Togo",
      color: "#4A9B9B",
    },
    {
      id: 3,
      title: "Highway Construction",
      location: "Liberia",
      color: "#C41E3A",
    },
    {
      id: 4,
      title: "Port Development",
      location: "Sierra Leone",
      color: "#0C2340",
    },
    { id: 5, title: "Irrigation Systems", location: "Mali", color: "#4A9B9B" },
    { id: 6, title: "River Dredging", location: "Ghana", color: "#1E4D5C" },
    { id: 7, title: "Equipment Fleet", location: "Regional", color: "#C41E3A" },
    {
      id: 8,
      title: "Training Programs",
      location: "Multi-country",
      color: "#0C2340",
    },
  ];

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
        <div style={{ maxWidth: "800px" }}>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: "400",
              marginBottom: "24px",
              lineHeight: "1.1",
            }}
          >
            Media Center
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              color: "#a0a0a0",
              lineHeight: "1.6",
            }}
          >
            Stay updated with the latest news, press releases, project
            highlights, and media resources from GDI MACS across West Africa.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section
        style={{
          borderBottom: "1px solid #2a2a2a",
          padding: "0 24px",
          position: "sticky",
          top: "0",
          background: "#000",
          zIndex: 10,
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            gap: "0",
            overflowX: "auto",
          }}
        >
          {[
            { id: "news", label: "Latest News", icon: FileText },
            { id: "press", label: "Press Releases", icon: Download },
            { id: "videos", label: "Videos", icon: Video },
            { id: "gallery", label: "Photo Gallery", icon: Image },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  background: "transparent",
                  border: "none",
                  color: activeTab === tab.id ? "#fff" : "#a0a0a0",
                  padding: "20px 32px",
                  fontSize: "1rem",
                  fontWeight: "500",
                  cursor: "pointer",
                  borderBottom:
                    activeTab === tab.id
                      ? "2px solid #C41E3A"
                      : "2px solid transparent",
                  transition: "all 0.3s",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== tab.id)
                    e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== tab.id)
                    e.currentTarget.style.color = "#a0a0a0";
                }}
              >
                <Icon size={18} />
                {tab.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Content Section */}
      <section
        style={{
          padding: "60px 24px 80px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Latest News Tab */}
        {activeTab === "news" && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "32px",
            }}
          >
            {newsArticles.map((article) => (
              <div
                key={article.id}
                style={{
                  background: "#0a0a0a",
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "1px solid #2a2a2a",
                  transition: "all 0.3s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = article.image;
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#2a2a2a";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    height: "200px",
                    background: `linear-gradient(135deg, ${article.image} 0%, #0a0a0a 100%)`,
                    display: "flex",
                    alignItems: "flex-end",
                    padding: "20px",
                  }}
                >
                  <span
                    style={{
                      background: "rgba(0,0,0,0.7)",
                      backdropFilter: "blur(10px)",
                      padding: "6px 12px",
                      borderRadius: "6px",
                      fontSize: "0.85rem",
                      fontWeight: "500",
                    }}
                  >
                    {article.category}
                  </span>
                </div>

                <div style={{ padding: "24px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      marginBottom: "12px",
                      fontSize: "0.85rem",
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
                      <Calendar size={14} />
                      {article.date}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <Eye size={14} />
                      {article.views}
                    </div>
                  </div>

                  <h3
                    style={{
                      fontSize: "1.25rem",
                      marginBottom: "12px",
                      fontWeight: "500",
                      lineHeight: "1.4",
                    }}
                  >
                    {article.title}
                  </h3>

                  <p
                    style={{
                      color: "#d0d0d0",
                      lineHeight: "1.6",
                      marginBottom: "16px",
                      fontSize: "0.95rem",
                    }}
                  >
                    {article.excerpt}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      color: article.image,
                      fontSize: "0.95rem",
                      fontWeight: "500",
                    }}
                  >
                    Read More
                    <ChevronRight size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Press Releases Tab */}
        {activeTab === "press" && (
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {pressReleases.map((release) => (
                <div
                  key={release.id}
                  style={{
                    background: "#0a0a0a",
                    padding: "24px",
                    borderRadius: "12px",
                    border: "1px solid #2a2a2a",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "16px",
                    transition: "all 0.3s",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#C41E3A";
                    e.currentTarget.style.background = "#1a1a1a";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#2a2a2a";
                    e.currentTarget.style.background = "#0a0a0a";
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                    }}
                  >
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "#C41E3A",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <FileText size={24} />
                    </div>
                    <div>
                      <h3
                        style={{
                          fontSize: "1.125rem",
                          fontWeight: "500",
                          marginBottom: "4px",
                        }}
                      >
                        {release.title}
                      </h3>
                      <div
                        style={{
                          fontSize: "0.85rem",
                          color: "#a0a0a0",
                          display: "flex",
                          gap: "12px",
                        }}
                      >
                        <span>{release.date}</span>
                        <span>•</span>
                        <span>{release.size}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    style={{
                      background: "transparent",
                      border: "1px solid #2a2a2a",
                      color: "#fff",
                      padding: "10px 20px",
                      borderRadius: "8px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "0.9rem",
                      fontWeight: "500",
                      transition: "all 0.3s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#C41E3A";
                      e.currentTarget.style.borderColor = "#C41E3A";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.borderColor = "#2a2a2a";
                    }}
                  >
                    <Download size={16} />
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Videos Tab */}
        {activeTab === "videos" && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "32px",
            }}
          >
            {videos.map((video) => (
              <div
                key={video.id}
                style={{
                  background: "#0a0a0a",
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "1px solid #2a2a2a",
                  transition: "all 0.3s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = video.thumbnail;
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#2a2a2a";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    height: "200px",
                    background: `linear-gradient(135deg, ${video.thumbnail} 0%, #0a0a0a 100%)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      width: "64px",
                      height: "64px",
                      background: "rgba(255,255,255,0.9)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.1)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  >
                    <Play
                      size={28}
                      style={{ color: "#000", marginLeft: "4px" }}
                    />
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: "12px",
                      right: "12px",
                      background: "rgba(0,0,0,0.8)",
                      padding: "4px 10px",
                      borderRadius: "6px",
                      fontSize: "0.85rem",
                      fontWeight: "500",
                    }}
                  >
                    {video.duration}
                  </div>
                </div>

                <div style={{ padding: "20px" }}>
                  <h3
                    style={{
                      fontSize: "1.125rem",
                      marginBottom: "12px",
                      fontWeight: "500",
                      lineHeight: "1.4",
                    }}
                  >
                    {video.title}
                  </h3>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "0.85rem",
                      color: "#a0a0a0",
                    }}
                  >
                    <span>{video.date}</span>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <Eye size={14} />
                      {video.views}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Photo Gallery Tab */}
        {activeTab === "gallery" && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {gallery.map((photo) => (
              <div
                key={photo.id}
                style={{
                  height: "280px",
                  background: `linear-gradient(135deg, ${photo.color} 0%, #0a0a0a 100%)`,
                  borderRadius: "12px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "24px",
                  cursor: "pointer",
                  border: "1px solid #2a2a2a",
                  transition: "all 0.3s",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.02)";
                  e.currentTarget.style.borderColor = photo.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.borderColor = "#2a2a2a";
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    width: "40px",
                    height: "40px",
                    background: "rgba(255,255,255,0.9)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image size={20} style={{ color: "#000" }} alt="source" />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      marginBottom: "4px",
                      fontWeight: "500",
                    }}
                  >
                    {photo.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "#d0d0d0",
                    }}
                  >
                    {photo.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section
        style={{
          padding: "80px 24px",
          background: "#0a0a0a",
          borderTop: "1px solid #2a2a2a",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <Award size={48} style={{ color: "#C41E3A", marginBottom: "24px" }} />
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "16px",
              fontWeight: "400",
            }}
          >
            Media Inquiries
          </h2>
          <p
            style={{
              fontSize: "1.125rem",
              color: "#a0a0a0",
              marginBottom: "32px",
              lineHeight: "1.6",
            }}
          >
            For press inquiries, interview requests, or additional media
            resources, please contact our communications team.
          </p>
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
            onMouseEnter={(e) => (e.currentTarget.style.background = "#9B1830")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#C41E3A")}
          >
            Contact Media Team
          </button>
        </div>
      </section>
    </div>
  );
};

export default MediaPage;
