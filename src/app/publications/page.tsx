import type { Metadata } from "next";
import { BookText } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { TableOfContents, type TocItem } from "@/components/toc";
import { H2 } from "@/components/prose";

export const metadata: Metadata = { title: "Publications | Ejikeme Amako" };

const toc: TocItem[] = [
  { id: "journal-papers", label: "Journal Papers" },
  { id: "conference-papers", label: "Conference Papers" },
  { id: "poster-presentations", label: "Poster Presentations" },
];
// Journal Papers
const journal: React.ReactNode[] = [
  <>Amako, E. A., Arzani, A., &amp; Mahajan, S. M. (2026). DSO‑Coordinated Adaptive Droop Scheduling for Smart Inverter Functions in Active Distribution Networks Using Real‑Time Co‑Simulation. <em>IEEE Transactions on Smart Grid</em> (submitted).</>,
  <>Amako, E. A., Arzani, A., &amp; Mahajan, S. M. (2026). Integrated Power–Communication Framework for BESS Scheduling in Multi‑Community Active Distribution Networks. <em>IEEE Transactions on Industry Applications</em> (submitted).</>,
  <>Amako, E. A., Arzani, A., &amp; Mahajan, S. M. (2025). Heuristic‑Based Scheduling of BESS for Multi‑Community Large‑Scale Active Distribution Network. <em>Electricity</em>, <em>6</em>(3), 36.</>,
  <>Obi, P. I., Oputa, O., &amp; Amako, E. A. (2022). Optimal Load Scheduling of Power Plants in a Grid Considering the Plant’s Capacity and Line Losses. <em>Arid Zone Journal of Engineering, Technology and Environment</em>, <em>18</em>(4), 669–682.</>,
  <>Obi, P. I., Amako, E. A., &amp; Ezeonye, C. S. (2022). High Impedance Fault Arc Analysis on 11 kV Distribution Networks. <em>Nigerian Journal of Technological Development</em>, Online ISSN: 2437‑2110, 143–149.</>,
  <>Chukwulobe, O. O., Obi, P. I., Amako, E. A., &amp; Ezeonye, C. S. (2022). Improved Under‑Voltage Load Shedding Scheme in Power System Network for South Eastern Nigeria. <em>NIPES‑Journal of Science and Technology Research</em>, <em>4</em>(1), 212–223.</>,
  <>Obi, P. I., Ezeonye, C. S., &amp; Amako, E. A. (2021). Applications of Various Types of Circuit Breakers in Electrical Power Systems: A Review. <em>Arid Zone Journal of Engineering, Technology &amp; Environment (AZOJETE)</em>, <em>17</em>(4), 481–494.</>,
  <>Irokwe, N. V., &amp; Amako, E. A. (2021). Electrical Load Flow Analysis for Improved Power Supply to Opolo Community in Bayelsa State Using ETAP. <em>IOSR Journal of Economic Research (IOSR‑JEF)</em>, <em>4</em>(2), 9–14.</>,
  <>Obi, P. I., Amako, E. A., &amp; Ezeonye, C. S. (2021). Effect of Circuit Breaker Arc on Faulted Inductive and Capacitive Circuit on Transmission Line. <em>Nigerian Research Journal of Engineering and Environmental Sciences</em>, <em>6</em>(1), 176–187.</>,
  <>Obi, P. I., Ezeonye, C. S., &amp; Amako, E. A. (2021). Appropriate Energy Mix to Facilitate Rural Industrial Development and Economic Growth in Nigeria. <em>Proceedings of International Conference on Research and Innovations in Engineering</em>, University of Uyo, Nigeria, <em>3</em>(1), 13–28.</>,
  <>Obi, P. I., Amako, E. A., &amp; Ezeonye, C. S. (2021). Investigating the Characteristics of Corona Effect on AC Transmission Line with Variation of Line Parameters. <em>Bayero University Journal of Engineering Technology (BJET)</em>, <em>16</em>(3), 1–8.</>,
  <>Amako, E. A., Nwaizugbe, J. K. C., Onwuma, C., &amp; Obiukwu, C. S. (2021). Load Demand Analysis for Improved Electrical Service Design. <em>American Journal of Engineering Research (AJER)</em>, <em>10</em>(11), 139–150.</>,
  <>Ugwoke, N. C., Obi, P. I., &amp; Amako, E. A. (2021). Rotor Angle Analysis of Multi‑Machine Transient for Better Performance. <em>Umudike Journal of Engineering and Technology (UJET)</em>, <em>7</em>(1), 7–14.</>,
  <>Obi, P. I., Amako, E. A., &amp; Emeghara, M. C. (2021). Science, Technology and Innovation Engineering in Developing Economy – Comparative Study of the Effects of Science, Technology and Innovation Engineering in the MINT Countries as Case Study. <em>International Journal of Innovative Engineering, Technology and Science</em>, <em>4</em>(1), 1–14.</>,
  <>Obi, P. I., Amako, E. A., &amp; Emeghara, M. C. (2021). Dynamic Modelling of Load Demand for Efficient Power Dispatch in Umuahia Metropolis. <em>International Journal of Innovative Engineering, Technology and Science</em>, <em>3</em>(1), 1–13.</>,
];

// Conference Papers
const conference: React.ReactNode[] = [
  <>Amako, E. A., Arzani, A., &amp; Mahajan, S. M. (2026). Evaluating the OpenDSS Combined Volt‑VAr Volt‑Watt Smart Inverter Function. <em>IEEE Texas Power and Energy Conference (TPEC)</em>, College Station, TX, USA, pp. 1–6. doi: 10.1109/TPEC67884.2026.11513038.</>,
  <>Amako, E. A., Arzani, A., &amp; Mahajan, S. M. (2025). BESS Scheduling for Two Communities of an Active Distribution Network. <em>IEEE Texas Power and Energy Conference (TPEC)</em>, College Station, TX, USA, pp. 1–6.</>,
  <>Amako, E. A., Arzani, A., &amp; Mahajan, S. M. (2024). Optimal Sizing of PV Systems in a Utility Distribution Feeder Using OpenDSS. <em>56th North American Power Symposium (NAPS)</em>, IEEE, 2024.</>,
  <>Emeghara, C. M., Mahajan, S. M., Arzani, A., &amp; Amako, E. A. (2023). Evaluating Grid Support Features of Voltage Source Inverter: An Analysis of Direct Power Control. <em>North American Power Symposium (NAPS)</em>, Asheville, NC, USA, pp. 1–5. doi: 10.1109/NAPS58826.2023.10318633.</>,
  <>Amako, E. A., &amp; Onwuzuruike, J. A. (2022). Fault Analysis of South Eastern Nigerian Power System Network. <em>IEEE Nigeria 4th International Conference on Disruptive Technologies for Sustainable Development (NIGERCON)</em>, Lagos, Nigeria, pp. 1–5. doi: 10.1109/NIGERCON54645.2022.9803099.</>,
  <>Amako, E. A., &amp; Onah, A. J. (2020). Transient Stability Analysis for Enhanced Power System Protection. <em>2nd NIEEE Nsukka Chapter Conference on Sustainable Infrastructure Development in Developing Nations</em>, pp. 171–178.</>,
  <>Amako, E. A., Obi, P. I., &amp; Onah, A. J. (2019). Generator Transient Stability Analysis for Improved Power System Protection. <em>2nd International Engineering Conference (IECON)</em>, pp. 439–451.</>,
];


const posters: React.ReactNode[] = [
  <>Amako, E. A., Arzani, A., &amp; Mahajan, S. M. (2026). DSO-Coordinated Adaptive Droop Scheduling for Smart Inverter Functions in Active Distribution Networks Using Real-Time Co-Simulation [Journal Architecture Submitted]. In <em>IEEE Transcations on Smart Grid</em>.</>,
  <>Amako, E. A., Arzani, A., &amp; Mahajan, S. M. (2025). BESS Scheduling for Two Communities of an Active Distribution Network [Poster Presentation]. In <em>9th IEEE Texas Power and Energy Conference (TPEC)</em>.</>,
  <>Amako, E. A., Arzani, A., &amp; Mahajan, S. M. (2025). Integrated Power–Communication Framework for BESS Scheduling [Poster Presentation]. In <em>Tennessee Renewable Energy &amp; Economic Development Council (TREEDC) Conference</em>.</>,
  <>Amako, E. A., Arzani, A., &amp; Mahajan, S. M. (2024). Optimal Sizing of PV Plants in a Utility Distribution Feeder [Poster Presentation]. In <em>Tennessee Renewable Energy &amp; Economic Development Council (TREEDC) Conference</em>.</>,
  <>Amako, E. A., Emeghara, C., &amp; Mahajan, S. M. (2023). BESS Microgrid Integration For Improved System Reliability: Sub-Transient Fault Control [Poster Presentation]. In <em>Research and Creative Inquiry Day-2023. Tennessee Tech University</em>.</>,
  <>Amako, E. A., &amp; Talbert, D. A. (2023). A Deep Learning Approach for Invasive Faults Detection and Severity Prediction in Electric Vehicles [Poster Presentation]. In <em>Research and Creative Inquiry Day-2023. Tennessee Tech University</em>.</>,
];

function Bibliography({ items }: { items: React.ReactNode[] }) {
  return (
    <ol className="space-y-3">
      {items.map((it, i) => (
        <li key={i}>{it}</li>
      ))}
    </ol>
  );
}

export default function PublicationsPage() {
  return (
    <PageShell
      hideSidebar
      toc={<TableOfContents title="By Type" icon={<BookText className="h-3.5 w-3.5" />} items={toc} />}
    >
      {/* Hero banner — background image with title + note overlaid */}
      <div
        style={{
          backgroundImage: "url('/images/publication-banner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          borderRadius: "0.75rem",
          marginBottom: "1.5rem",
          position: "relative",
          overflow: "hidden",
          minHeight: "320px",
        }}
      >
        {/* Dark overlay so text is legible over any image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.52)",
          }}
        />

        {/* Content on top of the image */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            padding: "6rem 5.25rem",
          }}
        >
          <h1
            className="page-title"
            style={{ color: "#fff", marginBottom: "0.75rem", marginTop: 0 }}
          >
            Publications
          </h1>
          <p style={{ margin: 0, fontSize: "0.9rem", color: "rgba(255,255,255,0.9)" }}>
            <strong style={{ color: "#fff" }}>Note:</strong> Also see my full publication profiles on{" "}
            <a href="https://scholar.google.com/citations?hl=en&user=OyN1lUYAAAAJ" target="_blank" rel="noopener noreferrer" style={{ color: "#FFB86C" }}>
              Google Scholar
            </a>
            ,{" "}
            <a href="https://www.researchgate.net/profile/A-Amako" target="_blank" rel="noopener noreferrer" style={{ color: "#FFB86C" }}>
              ResearchGate
            </a>
            , and{" "}
            <a href="https://orcid.org/0009-0002-6733-5131" target="_blank" rel="noopener noreferrer" style={{ color: "#FFB86C" }}>
              ORCID
            </a>
            .
          </p>
        </div>
      </div>

      <hr/>
      <H2 id="journal-papers"><span style={{ color: "#c9741a" }}>Journal Papers</span></H2>
      <Bibliography items={journal} />

      <hr/>
      <H2 id="conference-papers"><span style={{ color: "#c9741a" }}>Conference Papers</span></H2>
      <Bibliography items={conference} />

      <hr/>
      <H2 id="poster-presentations"><span style={{ color: "#c9741a" }}>Poster Presentations</span></H2>
      <Bibliography items={posters} />

      <p className="mt-6">
        <em>Last updated: June 15, 2026</em>
      </p>
    </PageShell>
  );
}
