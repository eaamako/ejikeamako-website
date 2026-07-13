import { Link as LinkIcon } from "lucide-react";

export function H2({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <h2 id={id} className="group">
      {children}
      <a href={`#${id}`} className="header-anchor inline-block align-middle" aria-label="Permalink">
        <LinkIcon className="inline h-[0.7em] w-[0.7em]" />
      </a>
    </h2>
  );
}

export function H3({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <h3 id={id} className="group">
      {children}
      <a href={`#${id}`} className="header-anchor inline-block align-middle" aria-label="Permalink">
        <LinkIcon className="inline h-[0.7em] w-[0.7em]" />
      </a>
    </h3>
  );
}
