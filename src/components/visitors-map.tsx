import { Minus, Plus } from "lucide-react";

export function VisitorsMap() {
  return (
    <a
      href="https://mapmyvisitors.com/web/1bz8shj"
      target="_blank"
      rel="noopener noreferrer"
      className="relative block overflow-hidden rounded-sm"
      style={{ background: "linear-gradient(180deg,#4f93c2 0%,#3f80b3 100%)" }}
      aria-label="Visitor map"
    >
      <div className="relative h-[300px] w-full sm:h-[340px]">
        <img
          src="/images/worldmap.png"
          alt="World visitor map"
          className="absolute inset-0 h-full w-full object-cover opacity-95"
        />

        {/* Stats overlay */}
        <div className="absolute left-0 right-0 top-3 text-center text-white drop-shadow">
          <div className="text-[0.95rem] font-semibold leading-tight">873Pageviews</div>
          <div className="text-[0.8rem] opacity-95">Over the last 2 months</div>
        </div>

        {/* Zoom controls */}
        <div className="absolute bottom-4 left-4 flex flex-col overflow-hidden rounded border border-black/20 bg-white shadow">
          <span className="grid h-7 w-7 place-items-center border-b border-black/10 text-gray-700">
            <Plus className="h-4 w-4" />
          </span>
          <span className="grid h-7 w-7 place-items-center text-gray-700">
            <Minus className="h-4 w-4" />
          </span>
        </div>
      </div>
    </a>
  );
}
