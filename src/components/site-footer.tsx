import Link from "next/link";
import { footerSocials } from "@/lib/site-data";
import { SocialIcon, brandColors } from "@/components/icons";

export function SiteFooter() {
  return (
    <footer id="footer" className="site-footer mt-20">
      <div className="mx-auto max-w-[1320px] px-5 py-8 lg:px-10">

        {/* Social row */}
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <li>
            <span
              className="text-[0.7rem] font-bold uppercase tracking-widest"
              style={{ color: "var(--mm-text-strong)" }}
            >
              Connect
            </span>
          </li>
          {footerSocials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="footer-link"
              >
                <span style={{ color: brandColors[s.icon] }}>
                  <SocialIcon name={s.icon} />
                </span>
                {s.label}
              </a>
            </li>
          ))}
          <li>
            <a href="/feed.xml" className="footer-link">
              <span style={{ color: brandColors.feed }}><SocialIcon name="feed" /></span>
              Feed
            </a>
          </li>
          <li>
            <a href="/sitemap" className="footer-link">
              <span style={{ color: brandColors.sitemap }}><SocialIcon name="sitemap" /></span>
              Sitemap
            </a>
          </li>
        </ul>

        {/* Copyright */}
        <p className="mt-4 text-[0.8125rem]" style={{ color: "var(--mm-muted)" }}>
          &copy; 2026{" "}
          <Link
            href="/"
            style={{ color: "var(--mm-muted)" }}
            className="transition-colors hover:text-[var(--mm-link)]"
          >
            Ejikeme Amako
          </Link>
          . All rights reserved.
        </p>

      </div>
    </footer>
  );
}
