"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { Linkedin, Menu, Moon, Search, Sun, X } from "lucide-react";
import { navItems, hiddenNavItems } from "@/lib/site-data";

const searchIndex = [
  { title: "Home",         href: "/",            body: "graduate research assistant smart grid lab energy management systems microgrid Ejikeme Amako" },
  { title: "Research",    href: "/research",     body: "research overview interests ongoing projects software tools deep reinforcement learning power systems" },
  { title: "Publications",href: "/publications", body: "conference papers journal papers poster presentations ieee tpec ecce naps" },
  { title: "Industry Experience",    href: "/Industry Experience",     body: "university teaching experience digital systems power systems training web design" },
  { title: "Blog/Gallery", href: "/gallery",     body: "blog posts insights thoughts research methodologies photography conferences academic events research lab campus life" },
  { title: "Contact",     href: "/contact",      body: "email address smart grid lab clement hall cookeville tennessee tech ieee" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className="sticky top-0 z-40 w-full"
        style={{
          background: "var(--mm-masthead-bg)",
          backdropFilter: "saturate(180%) blur(16px)",
          WebkitBackdropFilter: "saturate(180%) blur(16px)",
          borderBottom: "1px solid var(--mm-border)",
        }}
      >
        <div className="mx-auto flex h-[72px] max-w-[1320px] items-center gap-6 px-5 lg:px-10">

          {/* Logo */}
          <Link
            href="/"
            className="mr-auto whitespace-nowrap leading-none"
          >
            <span
              className="text-[2.25rem] font-bold tracking-tight"
              style={{ color: "var(--mm-heading)" }}
            >
              Ejikeme Amako
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-item ${isActive(pathname, item.href) ? "nav-item-active" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Icon controls */}
          <div className="flex items-center gap-1">
            <IconBtn aria-label="Search" onClick={() => setSearchOpen((s) => !s)}>
              <Search className="h-[1.125rem] w-[1.125rem]" strokeWidth={2} />
            </IconBtn>
            <Link
              href="https://www.linkedin.com/in/eaamako62"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-md transition-colors hover:bg-[var(--mm-table-stripe)] hover:text-[var(--mm-link)]"
              style={{ color: "var(--mm-text)" }}
            >
              <Linkedin className="h-[1.125rem] w-[1.125rem]" strokeWidth={2} />
            </Link>
            <ThemeToggle />
            <IconBtn
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((m) => !m)}
              className="lg:hidden"
            >
              {menuOpen
                ? <X    className="h-5 w-5" />
                : <Menu className="h-5 w-5" />}
            </IconBtn>
          </div>
        </div>

        {/* Mobile / hidden-items dropdown */}
        {menuOpen && (
          <div
            className="border-t lg:absolute lg:right-10 lg:top-[72px] lg:w-52 lg:rounded-b-md lg:border lg:shadow-lg"
            style={{ background: "var(--mm-surface)", borderColor: "var(--mm-border)" }}
          >
            <nav className="mx-auto flex max-w-[1320px] flex-col px-5 py-3 lg:px-3">
              <div className="lg:hidden">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block py-2.5 text-[0.9375rem] ${
                      isActive(pathname, item.href) ? "nav-item-active" : "nav-item"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              {hiddenNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block py-2.5 text-[0.9375rem] ${
                    isActive(pathname, item.href) ? "nav-item-active" : "nav-item"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
    </>
  );
}

/* ── Small helpers ──────────────────────────────── */

function IconBtn({
  children,
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { className?: string }) {
  return (
    <button
      type="button"
      className={`grid h-10 w-10 place-items-center rounded-md transition-colors
        hover:bg-[var(--mm-table-stripe)] hover:text-[var(--mm-link)] ${className}`}
      style={{ color: "var(--mm-text)" }}
      {...props}
    >
      {children}
    </button>
  );
}

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = resolvedTheme === "dark";

  return (
    <IconBtn
      aria-label="Toggle light/dark theme"
      title="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {mounted && isDark
        ? <Sun  className="h-[1.125rem] w-[1.125rem]" strokeWidth={2} />
        : <Moon className="h-[1.125rem] w-[1.125rem]" strokeWidth={2} />}
    </IconBtn>
  );
}

function SearchOverlay({ onClose }: { onClose: () => void }) {
  const [q, setQ]       = useState("");
  const inputRef        = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const term    = q.trim().toLowerCase();
  const results = term.length === 0
    ? []
    : searchIndex.filter(
        (r) => r.title.toLowerCase().includes(term) || r.body.toLowerCase().includes(term),
      );

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto"
      style={{ background: "var(--mm-bg)" }}
    >
      <div className="mx-auto max-w-[1320px] px-5 py-10 lg:px-10">
        <div className="mb-6 flex justify-end">
          <IconBtn aria-label="Close search" onClick={onClose}>
            <X className="h-6 w-6" />
          </IconBtn>
        </div>

        <input
          ref={inputRef}
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search…"
          className="w-full bg-transparent pb-3 text-3xl font-light outline-none
                     placeholder:opacity-30 md:text-5xl"
          style={{
            color: "var(--mm-text-strong)",
            borderBottom: "2px solid var(--mm-border-strong)",
          }}
        />

        <div className="mt-8 space-y-5">
          {term.length > 0 && results.length === 0 && (
            <p style={{ color: "var(--mm-muted)" }}>No results found for &ldquo;{term}&rdquo;.</p>
          )}
          {results.map((r) => (
            <div key={r.href}>
              <Link href={r.href} onClick={onClose} className="mm-link text-xl font-bold">
                {r.title}
              </Link>
              <p className="mt-0.5 text-sm" style={{ color: "var(--mm-muted)" }}>{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

