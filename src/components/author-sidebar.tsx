"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { PROFILE_IMG, sidebarSocials } from "@/lib/site-data";
import { SocialIcon } from "@/components/icons";

export function AuthorSidebar() {
  return (
    <div className="text-center lg:text-left">

      {/* ── Headshot ── */}
      <Link
        href="/"
        title="Ejikeme Amako"
        className="author-avatar mx-auto mb-5 block w-32 lg:mx-0 lg:w-full lg:max-w-[13rem]"
      >
        <Image
          src={PROFILE_IMG}
          alt="Ejikeme Amako"
          width={208}
          height={208}
          priority
          className="rounded-[var(--radius)] border-[3px] border-[var(--mm-border-strong)]"
          style={{
            boxShadow: "var(--mm-shadow-lg)",
            width: "100%",
            height: "auto",
          }}
        />
      </Link>

      {/* ── Name ── */}
      <p
        className="text-[1.125rem] font-bold leading-tight tracking-tight"
        style={{ color: "var(--mm-heading)" }}
      >
        Ejikeme Amako
      </p>

      {/* ── Credentials ── */}
      <p
        className="mt-1.5 text-[0.8125rem] font-semibold uppercase tracking-widest"
        style={{ color: "var(--mm-link)" }}
      >
        Member, IEEE
      </p>
      <div
        className="mt-1 text-[0.875rem] leading-snug"
        style={{ color: "var(--mm-muted)" }}
      >
        Ph.D. Researcher<br />
        Tennessee Tech, USA
      </div>

      {/* ── Divider ── */}
      <div
        className="my-4 border-t"
        style={{ borderColor: "var(--mm-border)" }}
      />

      {/* ── Location ── */}
      <div
        className="mb-3 flex items-center justify-center gap-1.5 text-[0.8125rem] lg:justify-start"
        style={{ color: "var(--mm-muted)" }}
      >
        <MapPin className="h-3.5 w-3.5 shrink-0" />
        <span>Cookeville, TN, USA</span>
      </div>

      {/* ── Social links ── */}
      <ul className="space-y-0.5">
        {sidebarSocials.map((s) => (
          <li key={s.label}>
            <a
              href={s.href}
              target="_blank"
              rel="nofollow noopener noreferrer me"
              className="sidebar-social-link justify-center lg:justify-start"
            >
              <SocialIcon name={s.icon} className="h-[1rem] w-[1rem] shrink-0 opacity-70" />
              <span>{s.label}</span>
            </a>
          </li>
        ))}
      </ul>

    </div>
  );
}
