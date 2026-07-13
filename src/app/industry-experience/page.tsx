"use client";

import { useState } from "react";
import Link from "next/link";
import { Presentation, Briefcase, Microscope, GraduationCap, Trophy, Award, Calendar, BadgeCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { TableOfContents, type TocItem } from "@/components/toc";
import { H2 } from "@/components/prose";

const toc: TocItem[] = [
  { id: "experience-highlights", label: "Experience Highlights" },
  { id: "contact", label: "Get in Touch" },
  { id: "education--awards", label: "Education & Awards" },
];

export default function TeachingPage() {
  const experienceHighlights = [
    {
      title: "Industry Experience",
      description: (
        <blockquote>
          Professional experience in high‑voltage utility operations, substation maintenance, 
          and refinery power systems. Worked across 33kV–330kV transmission environments and 
          petrochemical power plants, ensuring grid reliability, SCADA/DCS monitoring, protection 
          coordination, and safe operational practices in mission‑critical energy facilities.
        </blockquote>
      ),
      bgLight: "#f1f6ff",
      bgDark: "rgba(59, 130, 246, 0.1)",
      borderLight: "#c6d8f6",
      borderDark: "rgba(96, 165, 250, 0.3)",
      accentColor: "#3b82f6",
      images: [
        "/images/industry-experience.jpg",
        "/images/industry-experience-1.jpg",
        "/images/industry-experience-2.jpg",
      ],
      icon: Briefcase,
        skills: [ "ETAP",
        "HV Substation Operations",
        "SCADA & DCS Monitoring", "AUTOCAD",
        "Protection Relay Coordination", "PMU & Circuit Breakers",
        "Fault Analysis & Root-Cause Investigation",
        "Transformer & Switchgear Operations",
      ],
    },
    {
      title: "Research Experience",
      description: (
        <blockquote>
        Graduate research focused on multi-domain co-simulation, Hardware-in-the-Loop (HIL) testing, 
        smart inverter control, and communication-aware DER scheduling. My work integrates OpenDSS-PM, 
        Typhoon HIL EMT models, OMNeT++ packet-level networks, and Python/MATLAB optimization to 
        advance grid modernization and IEEE 1547-compliant inverter functions.
        </blockquote>
      ),
      bgLight: "#f5fbf3",
      bgDark: "rgba(34, 197, 94, 0.1)",
      borderLight: "#cfe7c8",
      borderDark: "rgba(74, 222, 128, 0.3)",
      accentColor: "#22c55e",
      images: [
        "/images/research-experience.jpg",
        "/images/research-experience-1.jpg",
        "/images/research-experience-2.jpg",
      ],
      icon: Microscope,
      skills: [
        "PSCAD", "Typhoon HIL", "OpenDSS-PM",
        "OMNeT++/INET",
        "Python",
        "MATLAB",
        "MILP Optimization",
        "Smart Inverter Control",
        "DER Planning & Scheduling",
        "Co-Simulation Frameworks"
      ],
      },
    {
      title: "Teaching Experience",
      description: (
        <blockquote>
          University-level teaching experience in Electrical and Electronic Engineering, focused on delivering 
          courses in Power System Analysis and Protection, Electronic Circuit Design, and Control Systems. 
          Emphasized practical understanding, analytical thinking, and the ability to connect theoretical 
          concepts to real-world power and control applications.
        </blockquote>
      ),
      bgLight: "#fff7ef",
      bgDark: "rgba(251, 146, 60, 0.1)",
      borderLight: "#f2d3b1",
      borderDark: "rgba(251, 146, 60, 0.3)",
      accentColor: "#f59e0b",
      images: [
        "/images/teaching-experience.jpg",
      ],
      icon: GraduationCap,
      skills: [
        "Power System Analysis",
        "Protection Coordination",
        "Electronic Circuit Design",
        "Control Systems",
        "Technical Instruction",
        "Student Mentorship",
      ],
    },
  ];

  // Track current image index for each card
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({
    0: 0,
    1: 0,
    2: 0,
  });

  const nextImage = (cardIndex: number, totalImages: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [cardIndex]: (prev[cardIndex] + 1) % totalImages,
    }));
  };

  const prevImage = (cardIndex: number, totalImages: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [cardIndex]: (prev[cardIndex] - 1 + totalImages) % totalImages,
    }));
  };

  return (
    <PageShell
      hideSidebar
      title="Experience"
      toc={<TableOfContents title="Contents" icon={<Presentation className="h-3.5 w-3.5" />} items={toc} />}
    >
    <blockquote>
      My experience spans <strong>industry</strong>, <strong>research</strong>, and <strong>teaching</strong>, 
      giving me a thoroughly grounded understanding of modern power systems and their real‑world operational 
      challenges. I have worked across high‑voltage utility operational and planning environments, advanced 
      academic research labs, and instructional settings—building a profile that blends hands‑on engineering 
      practice, rigorous scientific inquiry, and the ability to communicate complex technical concepts with 
      clarity. This combination shapes how I design solutions, collaborate across disciplines, and contribute 
      to the evolving landscape of grid modernization, DER integration, and intelligent power system control.
    </blockquote>

      {/* Experience Highlights Section */}
      <H2 id="experience-highlights">Highlights</H2>
      <section aria-label="Experience Highlights" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {experienceHighlights.map((item, index) => {
          const isEven = index % 2 === 0;
          const Icon = item.icon;
          return (
            <article
              key={item.title}
              className={`experience-card experience-card-${index}`}
              style={{
                border: "1px solid",
                borderRadius: "0.75rem",
                padding: "1.5rem",
                display: "flex",
                flexDirection: isEven ? "row" : "row-reverse",
                gap: "2rem",
                alignItems: "center",
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                transition: "all 0.3s ease",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.04)";
              }}
            >
              <div style={{ flex: "1 1 50%", display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div
                    style={{
                      padding: "0.5rem",
                      borderRadius: "0.5rem",
                      backgroundColor: "var(--mm-surface)",
                      border: "1px solid var(--mm-border)",
                      display: "inline-flex",
                    }}
                  >
                    <Icon size={24} style={{ color: item.accentColor }} strokeWidth={2} />
                  </div>
                  <h3 style={{ marginTop: 0, marginBottom: 0, fontSize: "1.35rem", lineHeight: 1.3, color: "var(--mm-heading)" }}>
                    {item.title}
                  </h3>
                </div>
                <div style={{ marginTop: 0, marginBottom: 0, color: "var(--mm-text)", fontSize: "1.05rem", lineHeight: 1.7 }}>
                  {item.description}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "0.5rem" }}>
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        padding: "0.25rem 0.65rem",
                        fontSize: "0.8rem",
                        fontWeight: 500,
                        borderRadius: "0.35rem",
                        backgroundColor: "var(--mm-surface)",
                        border: "1px solid var(--mm-border)",
                        color: "var(--mm-text)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div
                style={{
                  flex: "1 1 50%",
                  position: "relative",
                  minHeight: "20rem",
                  borderRadius: "0.65rem",
                  overflow: "hidden",
                }}
              >
                <img
                  src={item.images[currentImageIndex[index]]}
                  alt={`${item.title} - Image ${currentImageIndex[index] + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    minHeight: "20rem",
                    objectFit: "cover",
                    borderRadius: "0.65rem",
                    border: "1px solid var(--mm-border)",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.02)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                />
                
                {/* Navigation Buttons */}
                {item.images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage(index, item.images.length);
                      }}
                      style={{
                        position: "absolute",
                        left: "0.75rem",
                        top: "50%",
                        transform: "translateY(-50%)",
                        backgroundColor: "var(--mm-surface)",
                        border: "1px solid var(--mm-border)",
                        borderRadius: "50%",
                        width: "2.5rem",
                        height: "2.5rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                        transition: "all 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.15)";
                      }}
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={20} style={{ color: "var(--mm-text)" }} />
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage(index, item.images.length);
                      }}
                      style={{
                        position: "absolute",
                        right: "0.75rem",
                        top: "50%",
                        transform: "translateY(-50%)",
                        backgroundColor: "var(--mm-surface)",
                        border: "1px solid var(--mm-border)",
                        borderRadius: "50%",
                        width: "2.5rem",
                        height: "2.5rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                        transition: "all 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.15)";
                      }}
                      aria-label="Next image"
                    >
                      <ChevronRight size={20} style={{ color: "var(--mm-text)" }} />
                    </button>

                    {/* Image Indicators */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: "1rem",
                        left: "50%",
                        transform: "translateX(-50%)",
                        display: "flex",
                        gap: "0.5rem",
                        backgroundColor: "var(--mm-surface)",
                        padding: "0.35rem 0.65rem",
                        borderRadius: "1rem",
                        border: "1px solid var(--mm-border)",
                      }}
                    >
                      {item.images.map((_, imgIdx) => (
                        <button
                          key={imgIdx}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex((prev) => ({
                              ...prev,
                              [index]: imgIdx,
                            }));
                          }}
                          style={{
                            width: "0.5rem",
                            height: "0.5rem",
                            borderRadius: "50%",
                            border: "none",
                            backgroundColor: currentImageIndex[index] === imgIdx ? item.accentColor : "var(--mm-border)",
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                          }}
                          aria-label={`Go to image ${imgIdx + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </article>
          );
        })}
      </section>

      <style jsx>{`
        .experience-card-0 {
          background-color: #f1f6ff;
          border-color: #c6d8f6;
        }
        .experience-card-1 {
          background-color: #f5fbf3;
          border-color: #cfe7c8;
        }
        .experience-card-2 {
          background-color: #fff7ef;
          border-color: #f2d3b1;
        }
        
        :global(.dark) .experience-card-0 {
          background-color: rgba(59, 130, 246, 0.1);
          border-color: rgba(96, 165, 250, 0.3);
        }
        :global(.dark) .experience-card-1 {
          background-color: rgba(34, 197, 94, 0.1);
          border-color: rgba(74, 222, 128, 0.3);
        }
        :global(.dark) .experience-card-2 {
          background-color: rgba(251, 146, 60, 0.1);
          border-color: rgba(251, 146, 60, 0.3);
        }
        
        @media (max-width: 768px) {
          .experience-card {
            flex-direction: column !important;
            padding: 1.25rem !important;
          }
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>

      <hr />
      <H2 id="Contact">Get in Touch</H2>
      <p>
        I am currently working full‑time as a Research Assistant at the 
        <strong> Smart Grid Lab</strong>, Center for Energy Systems Research (CESR), 
        Tennessee Tech University — located in <strong>Clement Hall, Room 103</strong>.
      </p>
      <p>
        If you’d like to discuss my <strong>research / industry experience</strong>, explore my 
        <strong> publications</strong>, or <strong>request my full CV</strong>, feel free to reach out by{" "}
        <Link href="/contact" className="mm-link">
          email
        </Link>
        .
      </p>

      {/* ── Education & Awards ── Enhanced with icons ── */}
      <hr />
      <H2 id="education--awards">Education &amp; Awards</H2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2.5rem",
          marginTop: "1.5rem",
        }}
      >
        {/* Left column */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
            <GraduationCap size={16} style={{ color: "#e07b20" }} />
            <p style={{ fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 0, marginTop: 0 }}>
              Educational Background
            </p>
          </div>
          <hr style={{ border: "none", borderTop: "3px solid #e07b20", marginBottom: "1rem", marginTop: 0 }} />
          <ul style={{ paddingLeft: "1.25rem", margin: 0, listStyle: "none" }}>
            <li style={{ marginBottom: "0.75rem", display: "flex", gap: "0.5rem" }}>
              <BadgeCheck size={18} style={{ color: "#3b82f6", flexShrink: 0, marginTop: "0.15rem" }} />
              <div>
                <strong>Ph.D. in Electrical Engineering</strong> <em>(in progress)</em>
                <div style={{ fontSize: "0.875rem", color: "#6b7280", marginTop: "0.15rem" }}>
                  Tennessee Technological University, Cookeville, TN, USA
                </div>
              </div>
            </li>
            <li style={{ marginBottom: "0.75rem", display: "flex", gap: "0.5rem" }}>
              <BadgeCheck size={18} style={{ color: "#3b82f6", flexShrink: 0, marginTop: "0.15rem" }} />
              <div>
                <strong>M.Sc. in Electrical Engineering</strong>
                <div style={{ fontSize: "0.875rem", color: "#6b7280", marginTop: "0.15rem" }}>
                  Michael Okpara University of Agriculture, Umudike, AB, NIG.
                </div>
              </div>
            </li>
            <li style={{ display: "flex", gap: "0.5rem" }}>
              <BadgeCheck size={18} style={{ color: "#3b82f6", flexShrink: 0, marginTop: "0.15rem" }} />
              <div>
                <strong>B.Sc. in Electrical &amp; Electronic Engineering</strong>
                <div style={{ fontSize: "0.875rem", color: "#6b7280", marginTop: "0.15rem" }}>
                  Ahmadu Bello University, Zaria, NIG.
                </div>
              </div>
            </li>
          </ul>

          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem", marginTop: "1.75rem" }}>
            <Award size={16} style={{ color: "#e07b20" }} />
            <p style={{ fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 0, marginTop: 0 }}>
              Certifications
            </p>
          </div>
          <hr style={{ border: "none", borderTop: "3px solid #e07b20", marginBottom: "1rem", marginTop: 0 }} />
          <ul style={{ paddingLeft: "1.25rem", margin: 0, listStyle: "none" }}>
            <li style={{ marginBottom: "0.5rem", display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
              <span style={{ color: "#e07b20", fontSize: "1.2rem", lineHeight: 1, marginTop: "-0.1rem" }}>•</span>
              <span>Typhoon HIL — Real-Time Simulation &amp; CHIL Testing</span>
            </li>
            <li style={{ marginBottom: "0.5rem", display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
              <span style={{ color: "#e07b20", fontSize: "1.2rem", lineHeight: 1, marginTop: "-0.1rem" }}>•</span>
              <span>IEEE PES — Power &amp; Energy Society Member</span>
            </li>
            <li style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
              <span style={{ color: "#e07b20", fontSize: "1.2rem", lineHeight: 1, marginTop: "-0.1rem" }}>•</span>
              <span>Engineer-in-Training (EIT) — Tennessee Board of Licensure (<em>In Progress</em>)</span>
            </li>
          </ul>
        </div>

        {/* Right column */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
            <Trophy size={16} style={{ color: "#e07b20" }} />
            <p style={{ fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 0, marginTop: 0 }}>
              Awards &amp; Recognition
            </p>
          </div>
          <hr style={{ border: "none", borderTop: "3px solid #e07b20", marginBottom: "1rem", marginTop: 0 }} />
          <ul style={{ paddingLeft: "1.25rem", margin: 0, listStyle: "none" }}>
            <li style={{ marginBottom: "1rem" }}>
              <div style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                <Trophy size={18} style={{ color: "#f59e0b", flexShrink: 0, marginTop: "0.15rem" }} />
              <div>
                <strong>Best Paper Award — IEEE NIGERCON</strong>
                <p
                  style={{
                    margin: "0.25rem 0 0",
                    fontSize: "0.875rem",
                    color: "#6b7280",
                    lineHeight: 1.5,
                  }}
                >
                  Honored at the 4th IEEE Nigeria International Conference on Disruptive
                  Technologies for Sustainable Development for outstanding research on
                  <em> Fault Analysis of the South Eastern Nigerian Power System Network </em>.
                  The paper was recognized for its technical contribution to improving
                  protection and reliability in regional power systems.
                  <br />
                  <a
                    href="https://doi.org/10.1109/NIGERCON54645.2022.9803099"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--mm-accent)", fontWeight: 500 }}
                  >
                    View Publication →
                  </a>
                </p>
              </div>

              </div>
            </li>
            <li style={{ marginBottom: "1rem" }}>
              <div style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                <Award size={18} style={{ color: "#3b82f6", flexShrink: 0, marginTop: "0.15rem" }} />
                <div>
                  <strong>Graduate Research Assistantship — Tennessee Tech</strong>
                  <p style={{ margin: "0.25rem 0 0", fontSize: "0.875rem", color: "#6b7280", lineHeight: 1.5 }}>
                    Full research assistantship at the Center for Energy Systems Research (CESR), supporting research in smart grid systems and DER integration.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                <Award size={18} style={{ color: "#10b981", flexShrink: 0, marginTop: "0.15rem" }} />
                <div>
                  <strong>Dean&rsquo;s List — College of Engineering and Engineering Technology</strong>
                  <p style={{ margin: "0.25rem 0 0", fontSize: "0.875rem", color: "#6b7280", lineHeight: 1.5 }}>
                    Recognized for academic excellence during graduate studies.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </PageShell>
  );
}
