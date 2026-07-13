"use client";

import { useEffect, useState } from "react";

export type TocItem = {
  id: string;
  label: string;
  sub?: boolean;
};

export function TableOfContents({
  title,
  icon,
  items,
}: {
  title: string;
  icon?: React.ReactNode;
  items: TocItem[];
}) {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const headings = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const onScroll = () => {
      let current = "";
      for (const h of headings) {
        if (h.getBoundingClientRect().top <= 120) {
          current = h.id;
        }
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [items]);

  return (
    <nav className="toc-wrap" aria-label="Table of contents">
      <div className="toc-head flex items-center gap-1.5">
        {icon}
        <span>{title}</span>
      </div>
      <div>
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`toc-link ${item.sub ? "toc-link-sub" : ""} ${
              active === item.id ? "toc-link-active" : ""
            }`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
