import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Camera } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { TableOfContents, type TocItem } from "@/components/toc";
import { H2 } from "@/components/prose";
import { ImageGrid, type GalleryImage } from "@/components/image-grid";

export const metadata: Metadata = { title: "Blog/Gallery | Ejikeme Amako" };

const toc: TocItem[] = [
  { id: "blog", label: "Blog" },
  { id: "smarter-batteries-smarter-grids", label: "Smarter Batteries, Smarter Grids", sub: true },
  { id: "voltage-support-meets-digital-grids", label: "Voltage Support Meets Digital Grids", sub: true },
  { id: "phd-journey", label: "The Ph.D. Journey", sub: true },
  { id: "gallery", label: "Gallery" },
  { id: "conferences--academic-events", label: "Conferences & Academic Events", sub: true },
  { id: "research-lab", label: "Research Lab", sub: true },
  { id: "campus--life", label: "Campus & Life", sub: true },
  { id: "hobbies--volunteering", label: "Hobbies & Volunteering", sub: true },
];

// Define your images for each section
const conferenceImages: GalleryImage[] = [
  // Add your images here. Example:
  { src: "/images/gallery/NAPS1b.jpg", alt: "NAPS IEEE Conference 2025" },
  { src: "/images/gallery/NAPS1c.jpg", alt: "IEEE TPEC Conference 2025" },
  { src: "/images/gallery/Tpec 2026b.jpg", alt: "IEEE TPEC Conference 2026" },
];

const labImages: GalleryImage[] = [
  // Add your lab images here. Example:
  { src: "/images/gallery/research-lab-1.jpg", alt: "Smart Grid Lab protective relay control setup" },
  { src: "/images/gallery/research-lab-2.jpg", alt: "Smart Grid Lab setup" },
  { src: "/images/gallery/research-lab-3.jpg", alt: "Smart Grid Lab real-time Typhoon HIL setup CHIL" },
  { src: "/images/gallery/research-lab-4.jpg", alt: "Smart Grid Lab real-time Typhoon HIL setup PHIL" },
];

const campusImages: GalleryImage[] = [
  // Add your campus images here. Example:
  { src: "/images/gallery/Campus1a.jpg", alt: "Tennessee Tech campus" },
  { src: "/images/gallery/Campus1b.jpg", alt: "Tech Engineering Building" },
  { src: "/images/gallery/Campus1c.jpg", alt: "Tennessee Tech campus" },
];

const hobbiesImages: GalleryImage[] = [
  // Add your hobby images here. Example:
  // { src: "/images/gallery/hobbies/photography.jpg", alt: "Landscape photography" },
  { src: "/images/gallery/NAPS1.jpg", alt: "Asheville, NC" },
  { src: "/images/gallery/DRa.jpg", alt: "Asheville, NC" },
  { src: "/images/gallery/DRb.jpg", alt: "Asheville, NC" },
  { src: "/images/gallery/Hobbies1a.jpg", alt: "Asheville, NC" },
];

export default function GalleryPage() {
  return (
    <PageShell
      title="Blog/Gallery"
      toc={<TableOfContents title="Contents" icon={<BookOpen className="h-3.5 w-3.5" />} items={toc} />}>
      <H2 id="blog">Blog</H2>
      <p>
        Welcome to my blog! A space where I share ideas, reflections, and lessons from my work in 
        modern power systems. Here, I write about topics such as grid modernization, energy efficiency, 
        optimization strategies, DER integration and planning, real‑world research workflows, academic 
        experiences, and the evolving landscape of intelligent energy systems. It’s a blend of technical 
        insight and personal perspective from my journey as an engineer and researcher.
      </p>
      {/* Blog Posts */}
      <div className="mt-8 space-y-6">
        {/* Blog Post 1 */}
        <article id="smarter-batteries-smarter-grids" className="group relative overflow-hidden rounded-lg border border-[var(--mm-border)] bg-gradient-to-br from-[var(--mm-card-bg)] to-transparent p-6 shadow-sm transition-all hover:shadow-lg hover:border-[var(--mm-link)]">
          <h3 className="mb-2 text-xl font-bold text-[var(--mm-heading)] group-hover:text-[var(--mm-link)] transition-colors">
            Smarter Batteries, Smarter Grids: Intelligent BESS Scheduling for Multi‑Community Active Distribution Networks
          </h3>
          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            <div className="flex-1">
              <p className="mb-3 text-sm text-[var(--mm-text-light)]">
                • 8 min read
              </p>
              <p className="text-[var(--mm-text)]">
                  In this post, I highlight the key insights from my research on intelligent BESS scheduling for multi‑community distribution networks. 
                  I summarize how heuristic optimization and parallel decision‑making can reduce peaks, 
                  cut losses, and enable smarter energy sharing across modern ADNs.
              </p>
              <Link 
                href="/blog/intelligent-bess-scheduling"
              >
                Read More →
              </Link>
            </div>
            <div className="flex-shrink-0 md:w-64">
              <div className="w-full rounded-md overflow-hidden border border-[var(--mm-border)]">
                <img
                  src="/images/Blog_1_cover.jpg"
                  alt="Smarter Batteries, Smarter Grids cover"
                  className="object-cover w-full"
                />
              </div>
            </div>
          </div>
        </article>

        {/* Blog Post 2 */}
        <article id="voltage-support-meets-digital-grids" className="group relative overflow-hidden rounded-lg border border-[var(--mm-border)] bg-gradient-to-br from-[var(--mm-card-bg)] to-transparent p-6 shadow-sm transition-all hover:shadow-lg hover:border-[var(--mm-link)]">
        <h3 className="mb-2 text-xl font-bold text-[var(--mm-heading)] group-hover:text-[var(--mm-link)] transition-colors">
          DER Voltage Support Meets Digital Grids: Smart Inverter Control and Communication‑Aware BESS Scheduling in Modern ADNs
        </h3>
          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            <div className="flex-1">

              <p className="mb-3 text-sm text-[var(--mm-text-light)]">
                • 10 min read
              </p>
              <p className="text-[var(--mm-text)]">
                From IEEE 1547‑2018 Volt‑VAr and Volt‑Watt smart inverter functions to packet‑level 
                communication modeling, this post highlights how voltage support and communication 
                performance jointly shape nodal voltage profiles and BESS scheduling in multi‑community 
                active distribution networks. 
                It offers a clearer view of how smarter inverters and smarter communication networks work 
                together to enable reliable peak shaving, coordinated DER operation, and resilient grid performance.
              </p>
              <Link 
                href="/blog/der-voltage-support-communication"
              >
                Read More →
              </Link>
            </div>
            <div className="flex-shrink-0 md:w-64">
              <div className="w-full rounded-md overflow-hidden border border-[var(--mm-border)]">
                <img
                  src="/images/DER_Support_cover.jpg"
                  alt="Co-simulation Architecture"
                  className="object-cover w-full"
                />
              </div>
            </div>
          </div>
        </article>

        {/* Blog Post 3 */} 
        <article id="phd-journey" className="group relative overflow-hidden rounded-lg border border-[var(--mm-border)] bg-gradient-to-br from-[var(--mm-card-bg)] to-transparent p-6 shadow-sm transition-all hover:shadow-lg hover:border-[var(--mm-link)]">
          <h3 className="mb-2 text-xl font-bold text-[var(--mm-heading)] group-hover:text-[var(--mm-link)] transition-colors">
            Navigating the Ph.D. Journey: Research, Teaching, Mental Health, and Beyond
          </h3>
          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            <div className="flex-1"> 
              <p className="mb-3 text-sm text-[var(--mm-text-light)]">
                Coming Soon • 6 min read
              </p>
              <p className="text-[var(--mm-text)]">
                Insights and reflections from my doctoral journey—balancing research, teaching responsibilities, 
                conference presentations, mental health, and personal growth. Practical tips for graduate students in engineering 
                and lessons learned along the way.
              </p>
            </div>
            <div className="flex-shrink-0 md:w-64">
              <div className="w-full rounded-md overflow-hidden border border-[var(--mm-border)]">
                <img
                  src="/images/PHD_Image.jpg"
                  alt="phd-journey"
                  className="object-cover w-full"
                />
              </div>
            </div>
          </div>
        </article>
      </div>
      <hr />
      <H2 id="gallery">Gallery</H2>
      <p>
        Photography has always been a way for me to capture the moments, places, and people
        that shape my journey. This gallery brings together snapshots from conferences,
        research activities, campus life, and personal experiences—small windows into the
        milestones and memories that have defined my academic and professional path. I'll
        continue adding new photos as my journey evolves.
      </p>

      <hr />
      <H2 id="conferences--academic-events">Conferences &amp; Academic Events</H2>
      <ImageGrid 
        images={conferenceImages} 
        caption="Conferences, presentations, and academic engagements." 
      />

      <hr />
      <H2 id="research-lab">Research Lab</H2>
      <ImageGrid 
        images={labImages} 
        caption="Research activities at the Smart Grid Lab, Tennessee Tech." 
      />

      <hr />
      <H2 id="campus--life">Campus &amp; Life</H2>
      <ImageGrid 
        images={campusImages} 
        caption="Life in Cookeville, TN and at Tennessee Tech University." 
      />

      <hr />
      <H2 id="hobbies--volunteering">Hobbies &amp; Volunteering</H2>
      <p>
        Outside of research and academic work, I enjoy activities that help me stay balanced
        and connected to my community. Whether it's capturing landscapes through photography,
        exploring new running trails, volunteering at local STEM outreach events, or mentoring
        younger students, these experiences keep me grounded and inspired.
      </p>
      <ImageGrid 
        images={hobbiesImages} 
        caption="Personal hobbies, community service, and moments beyond the lab." 
      />

      <hr />
      <p>
        <em>More photos coming soon. Check back regularly for updates.</em>
      </p>
    </PageShell>
  );
}
