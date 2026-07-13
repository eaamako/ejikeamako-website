import { PageShell } from "@/components/page-shell";
import { VisitorsMap } from "@/components/visitors-map";
import { researchInterests } from "@/lib/site-data";
import Link from "next/link";

export default function Home() {
  return (
    <PageShell reserveRight={false}>
      {/* Hero */}
      <div className="hero-section">
        <p className="hero-role">Ph.D. Researcher · Electrical Engineering</p>
        <h1 className="hero-name">Ejikeme Amako</h1>
        <p className="hero-intro">
          Graduate Research Assistant at the{" "}
          <strong>Smart Grid Lab, Tennessee Tech University</strong>, Tennessee Tech University, where I work on integrating distributed energy resources, optimizing multi‑community active distribution networks, and developing power‑communication co‑simulation frameworks for modern cyber‑physical grids.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="hero-badge hero-badge-primary">Tennessee Tech University</span>
          <span className="hero-badge">Smart Grid Lab</span>
          <span className="hero-badge">Ph.D. in Electrical Engineering</span>
          <span className="hero-badge">Member, IEEE</span>
        </div>
      </div>

      {/* About */}
      <h2 className="mm-prose" style={{ fontSize: "1.75rem", fontWeight: 700, color: "var(--mm-heading)", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: "2px solid var(--mm-border-strong)", letterSpacing: "-0.02em" }}>
        About
      </h2>
      <div className="mm-prose">
        <p>
            I am a Ph.D. researcher in Electrical Engineering at Tennessee Tech University, 
            specializing in power systems modeling, smart grid technologies, and grid modernization. 
            My work focuses on distributed energy resource integration, multi‑community active distribution network optimization, 
            and power‑communication co‑simulation for cyber‑physical power systems. 
            I also have experience with real‑time Hardware‑in‑the‑Loop testing, inverter‑based resource control, 
            and Python/MATLAB‑based quasi‑static DER scheduling to enhance resilience and operational efficiency in modern grids. 
            Prior to joining Tennessee Tech, 
            I gained both industry and academic experience in power systems, and I currently maintain a CGPA of 3.88/4.00.
        </p>
        <div className="notice-warn">
          <strong>Open to Opportunities and Collaborations:</strong> I am actively looking for full-time
          positions in power systems, R&D, energy management, utilities, and related areas from Fall 2026. Feel free to{" "}
          <Link href="/contact" className="mm-link">reach out</Link>.
        </div>
      </div>

      {/* Research Interests */}
      <h2 className="mm-prose" style={{ fontSize: "1.75rem", fontWeight: 700, color: "var(--mm-heading)", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: "2px solid var(--mm-border-strong)", letterSpacing: "-0.02em" }}>
        Research Interests
      </h2>
      <div className="flex flex-wrap gap-2 mb-10">
        {researchInterests.map((interest) => (
          <span key={interest} className="hero-badge">{interest}</span>
        ))}
      </div>

      {/* CTA buttons */}
      <div className="flex flex-wrap gap-3 mt-2 mb-8">
        <Link href="/research" className="mm-btn mm-btn-outline">View Research</Link>
        <Link href="/publications" className="mm-btn mm-btn-outline">Publications</Link>
        <Link href="/industry-experience" className="mm-btn mm-btn-outline">Experience</Link>
        <Link href="/gallery" className="mm-btn mm-btn-outline">Blog/Gallery</Link>
        <Link href="/contact" className="mm-btn mm-btn-primary">Contact Me</Link>
      </div>

      {/* Honors, Awards & Scholarships */}
      <h2
        className="mm-prose"
        id="honors-awards--scholarships"
        style={{
          fontSize: "1.75rem",
          fontWeight: 700,
          color: "var(--mm-heading)",
          marginBottom: "1rem",
          paddingBottom: "0.5rem",
          borderBottom: "2px solid var(--mm-border-strong)",
          letterSpacing: "-0.02em",
        }}
      >
        Honors, Awards &amp; Scholarships
      </h2>

      <div className="mm-prose">
        <p>
          <strong>IEEE Senior Member</strong> <em>(<em>In Progress</em>)</em>
          <br />
          Elevated to IEEE Senior Member status in recognition of sustained technical
          contributions, professional maturity, and peer‑validated impact. This grade is
          held by only about 10% of IEEE’s global membership and requires a decade of
          professional experience and strong endorsements from existing Senior Members.
        </p>

        <p>
          <strong>NSF Grant + CESR Travel Grant — TPEC 2025–2026</strong>
          <br />
          Awarded a National Science Foundation (NSF) travel grant, along with CESR
          support, to present research at the Texas Power and Energy Conference (TPEC)
          in College Station, Texas.
        </p>

        <p>
          <strong>CESR Travel Grant — NAPS 2023–2024</strong>
          <br />
          Received travel funding from the Center for Energy Systems Research (CESR) to
          attend and present at the IEEE North American Power Symposium (NAPS) 2023 in Asheville, North Carolina, and 2024 in
          El Paso, Texas.
        </p>

        <p>
          <strong>CESR Travel Grant — IEEE Electric Vehicle Charging Infrastructure - Utility and Customer Implementation 2023</strong>
          <br />
            Supported by CESR to attend the 2023 IEEE Electric Vehicle Charging Infrastructure 
            Implementation session in Nashville, contributing to discussions on utility–consumer 
            collaboration for reliable, accessible EV charging.
        </p>

        <p>
          <strong>Graduate Assistantship Award</strong>
          <br />
          Fully funded Ph.D. assistantship from Tennessee Tech University, supporting
          research in power systems, co‑simulation, and smart grid technologies.
        </p>

        <p>
          <strong>University Merit Scholarship — EEE Dept., ABU</strong>
          <br />
          Earned a competitive merit scholarship for outstanding academic performance during
          undergraduate study.
        </p>
      </div>

      {/* Visitors Map */}
      <h2 className="mm-prose" style={{ fontSize: "1.75rem", fontWeight: 700, color: "var(--mm-heading)", marginTop: "2.5rem", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: "2px solid var(--mm-border-strong)", letterSpacing: "-0.02em" }}>
        Visitors Map
      </h2>
      <VisitorsMap />
    </PageShell>
  );
}
