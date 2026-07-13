"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { recentNews } from "@/lib/site-data";

const INITIAL = 5;

export function RecentNews() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? recentNews : recentNews.slice(0, INITIAL);

  return (
    <div>
      <table className="news-table">
        <tbody>
          {visible.map((item, i) => (
            <tr key={`${item.date}-${i}`}>
              <td className="news-date">{item.date}</td>
              <td dangerouslySetInnerHTML={{ __html: item.html }} />
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-6 flex justify-start">
        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          className="mm-btn mm-btn-outline inline-flex items-center gap-2"
        >
          {expanded ? (
            <><ChevronUp className="h-4 w-4" /> Show less</>
          ) : (
            <><ChevronDown className="h-4 w-4" /> See more news</>
          )}
        </button>
      </div>
    </div>
  );
}
