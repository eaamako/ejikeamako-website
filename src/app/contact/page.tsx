"use client";

import { useState } from "react";
import { PageShell } from "@/components/page-shell";
import { H2 } from "@/components/prose";

const profiles = [
  { label: "Google Scholar", href: "https://scholar.google.com/citations?hl=en&user=OyN1lUYAAAAJ", icon: "scholar" },
  { label: "ResearchGate", href: "https://www.researchgate.net/profile/A-Amako", icon: "researchgate" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/eaamako62", icon: "linkedin" },
  { label: "GitHub", href: "https://github.com/eaamako", icon: "github" },
  { label: "Instagram", href: "https://www.instagram.com/alex_ejike/", icon: "instagram" },
  { label: "ORCID", href: "https://orcid.org/0009-0002-6733-5131", icon: "orcid" },
];

export default function ContactPage() {
  const [showResumeForm, setShowResumeForm] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    // Save form reference before async operation
    const form = e.currentTarget;

    const formData = {
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      honey: (form.elements.namedItem("honey") as HTMLInputElement).value,
    };

    try {
      const res = await fetch("/api/send-resume-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      console.log("Response status:", res.status);
      console.log("Response ok:", res.ok);

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const errorData = await res.json();
        console.error("Error response:", errorData);
        setStatus("error");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setStatus("error");
    }
  };

  return (
    <PageShell title="Contact">
      <p>
        I’m always glad to provide additional information or support. 
        Feel free to reach out by email, and I will respond as soon as I am able.
      </p>
      <hr />
      <div style={{ marginTop: "2rem" }}>
      <button
        onClick={() => setShowResumeForm(!showResumeForm)}
        className="mm-btn mm-btn-primary"
      >
        Get My CV / Resume / Research Portfolio
      </button>

      {showResumeForm && (
        <div
          style={{
            marginTop: "1.5rem",
            padding: "1.25rem",
            border: "1px solid var(--mm-border-strong)",
            borderRadius: "8px",
            background: "var(--mm-surface)",
          }}
        >
          <h3 style={{ marginBottom: "1rem", fontWeight: 700, color: "var(--mm-heading)" }}>
            Request My CV / Research Portfolio
          </h3>

          <form onSubmit={handleSubmit}>
            {/* Honeypot spam protection field - hidden from users */}
            <input
              type="text"
              name="honey"
              tabIndex={-1}
              autoComplete="off"
              style={{
                position: "absolute",
                left: "-9999px",
                width: "1px",
                height: "1px",
              }}
            />

            <div style={{ marginBottom: "1rem" }}>
              <label style={{ color: "var(--mm-text)" }}><strong>Your Email Address</strong></label>
              <input
                type="email"
                name="email"
                required
                placeholder="yourname@example.com"
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  marginTop: "0.25rem",
                  borderRadius: "6px",
                  border: "1px solid var(--mm-border)",
                  background: "var(--mm-bg)",
                  color: "var(--mm-text)",
                }}
              />
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label style={{ color: "var(--mm-text)" }}><strong>Subject</strong></label>
              <input
                type="text"
                name="subject"
                required
                placeholder="Request for full CV / portfolio"
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  marginTop: "0.25rem",
                  borderRadius: "6px",
                  border: "1px solid var(--mm-border)",
                  background: "var(--mm-bg)",
                  color: "var(--mm-text)",
                }}
              />
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label style={{ color: "var(--mm-text)" }}><strong>Message</strong></label>
              <textarea
                name="message"
                rows={5}
                placeholder="Write your message here..."
                required
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  marginTop: "0.25rem",
                  borderRadius: "6px",
                  border: "1px solid var(--mm-border)",
                  background: "var(--mm-bg)",
                  color: "var(--mm-text)",
                  fontFamily: "inherit",
                }}
              ></textarea>
            </div>

            <button
              type="submit"
              className="mm-btn mm-btn-primary"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send Request"}
            </button>

            {/* Status Messages */}
            {status === "sending" && (
              <p style={{ marginTop: "1rem", color: "var(--mm-text)", fontStyle: "italic" }}>
                Sending your request...
              </p>
            )}
            {status === "success" && (
              <div
                style={{
                  marginTop: "1rem",
                  padding: "0.75rem",
                  borderRadius: "6px",
                  background: "rgba(34, 197, 94, 0.1)",
                  border: "1px solid rgba(34, 197, 94, 0.3)",
                  color: "var(--mm-text)",
                }}
              >
                ✓ Your request has been sent successfully! I'll get back to you soon.
              </div>
            )}
            {status === "error" && (
              <div
                style={{
                  marginTop: "1rem",
                  padding: "0.75rem",
                  borderRadius: "6px",
                  background: "rgba(239, 68, 68, 0.1)",
                  border: "1px solid rgba(239, 68, 68, 0.3)",
                  color: "var(--mm-text)",
                }}
              >
                ✗ Something went wrong. Please try again or email me directly.
              </div>
            )}
          </form>
        </div>
      )}
      </div>

      <hr />
      <H2 id="contact-information">Contact Information</H2>
      <table>
        <tbody>
          <tr>
            <td className="whitespace-nowrap">
              <strong>Email (Personal)</strong>
            </td>
            <td>
              <a href="mailto:alex.amako@outlook.com">ejikeamako@yahoo.com</a>
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap">
              <strong>Email (TTU)</strong>
            </td>
            <td>
              <a href="mailto:eaamako42@tntech.edu">eaamako42@tntech.edu</a>
            </td>
          </tr>
        </tbody>
      </table>

      <hr />
      <H2 id="at-the-smart-grid-lab">At the Smart Grid Lab</H2>
      <p>You can find me at:</p>
      <p>
        <strong>Smart Grid Lab, Center for Energy Systems Research (CESR)</strong><br />
        Clement Hall, Room 103<br />
        Tennessee Technological University<br />
        Cookeville, TN 38505, USA
      </p>
      <p>
        Please send an email if you’d like to schedule a meeting or discuss research.
      </p>

      <hr />
      <H2 id="at-the-university">At the University</H2>
      <p>
        <strong>Department of Electrical and Computer Engineering</strong><br />
        Tennessee Technological University<br />
        1 William L. Jones Drive<br />
        Cookeville, TN 38505, USA
      </p>


      <hr />
      <H2 id="online-profiles">Online Profiles</H2>
      <ul>
        {profiles.map((p) => (
          <li key={p.label}>
            <a href={p.href} target="_blank" rel="noopener noreferrer">
              {p.label}
            </a>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
