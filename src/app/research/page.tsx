import type { Metadata } from "next";
import { FlaskConical, Code2, Cpu, Radio, Zap, Network, BarChart2, Settings2 } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { TableOfContents, type TocItem } from "@/components/toc";
import { H2, H3 } from "@/components/prose";

export const metadata: Metadata = { title: "Research | Ejikeme Amako" };

const toc: TocItem[] = [
  { id: "research-overview", label: "Overview" },
  { id: "What I Do", label: "What I Do" },
  { id: "p1", label: "DSO‑Centric Power–Communication Co‑Simulation for DER Scheduling and IEEE 1547 Evaluation", sub: true },
  { id: "p2", label: "Real‑Time CHIL Simulation for Grid‑Forming/Grid‑Following Inverter Control and IEEE 1547 Compliance", sub: true },
  { id: "p3", label: "Multi‑Community BESS Scheduling, PV Hosting Capacity, and Distribution Network Optimization", sub: true },
  { id: "p4", label: "Deep Learning–Based Fault Detection and Powertrain Diagnostics in Cyber‑Physical Energy Systems", sub: true },
  { id: "research-interests", label: "Research Interests" },
  { id: "energy--power-systems", label: "Energy & Power Systems", sub: true },
  { id: "control--simulation", label: "Control & Simulation", sub: true },
  { id: "Co-simulation in power system", label: "Co-Simulation in Power Systems", sub: true },
  { id: "software--tools", label: "Software & Tools" }, 
];

const energyPower: [string, string][] = [
  ["Renewable Energy Integration", "Solar PV, Battery Energy Storage Systems (BESS), wind energy integration into smart grids"], 
  ["PV Hosting Capacity Analysis", "Distribution network hosting capacity studies"],
  ["Peak Shaving Strategies", "Demand response, BESS scheduling and load management"],
  ["Power System Operation & Planning", "Economic load dispatch, optimal power flow"],
  ["Power Electronics Converters/Inverters", "Dual Active Bridge converters for EV charging"],
  ["Energy Management Systems (EMS)", "Developing optimal dispatch strategies for community microgrids"],
];

const controlSim: [string, string][] = [
  ["Controller Hardware-in-the-Loop (CHIL) Simulation", "Real-time hardware-in-the-loop testing using Typhoon HIL"], 
  ["Smart Inverter Control", "Voltage and Frequency regulation control, grid-forming and grid-following inverters"],
  ["DER Studies", "Quasi-static and dynamic studies of DERs in active distribution networks"],
  ["AI & Machine Learning in Power Systems", "Data-driven forecasting and optimization techniques for smart grid applications"],
];
const aiml: [string, string][] = [
  [
    "Multi‑Domain Power–Communication Co‑Simulation",
    "DSO‑centric co‑simulation integrating OpenDSS‑PM QSTS power flow, OMNeT++/INET communication, and Typhoon HIL inverter models for IEEE 1547‑2018 and communication‑aware DER scheduling."
  ],
  [
    "Cyber‑Physical Validation & Real‑Time CHIL",
    "Cross‑platform workflows combining OpenDSS, Typhoon HIL, and Python/MATLAB optimization for BESS scheduling, EV hosting capacity validation, and inverter control testing in active distribution networks."
  ]
];



const tools: { category: string; items: string; color: string; icon: React.ReactNode }[] = [
  {
    category: "Simulation & Modeling",
    items: "OpenDSS, PSCAD, ETAP, PowerWorld, PLECS, Ansys Electromagnetics, GridLab-D, HELICS",
    color: "#1a3a5c",
    icon: <BarChart2 size={36} />,
  },
  {
    category: "HIL & Real-Time Simulation",
    items: "Typhoon HIL, RTDS — transferable simulation workflows, test design & validation",
    color: "#2d5a3a",
    icon: <Settings2 size={36} />,
  },
  {
    category: "Inverter & DER Controls",
    items: "Grid-following & forming control, Volt-VAR/Volt-Watt/droop control, IEEE 1547, PV/BESS/EV integration",
    color: "#5c3a1a",
    icon: <Zap size={36} />,
  },
  {
    category: "Programming & Optimization",
    items: "Python (NumPy, Pandas, Matplotlib, CVXPY, Pyomo, PyTorch), MATLAB, C++, OMNET++",
    color: "#3a1a5c",
    icon: <Code2 size={36} />,
  },
  {
    category: "Comm. Protocols & SCADA",
    items: "IEC 61850, Modbus/TCP, DNP3; SCADA monitoring & control (HV substations)",
    color: "#4f6a2d",
    icon: <Radio size={36} />,
  },
  {
    category: "Power Studies & Standards",
    items: "Hosting capacity, load flow, short-circuit, protection coordination, transient stability, power quality; IEEE 1547, NEC, AutoCAD, EMS/DERMS/ADMS",
    color: "#0f4c75",
    icon: <Network size={36} />,
  },
];

function InterestList({ items }: { items: [string, string][] }) {
  return (
    <ul>
      {items.map(([term, desc]) => (
        <li key={term}>
          <strong>{term}</strong> &mdash; {desc}
        </li>
      ))}
    </ul>
  );
}

export default function ResearchPage() {
  return (
    <PageShell
      hideSidebar
      title="Research"
      toc={<TableOfContents title="Contents" icon={<FlaskConical className="h-3.5 w-3.5" />} items={toc} />}
    >
    <H2 id="research-overview">Overview</H2>

    <p>
      My research lies at the intersection of <strong>power systems</strong>, <strong>control</strong>,{" "}
      <strong>DERs</strong>, and <strong>intelligent algorithms</strong> for modern
      cyber‑physical grids. I work at the{" "}
      <a href="https://www.tntech.edu/cesr/" target="_blank" rel="noopener noreferrer">
        Smart Grid Lab
      </a>{" "}
      within the Center for Energy Systems Research (CESR) at Tennessee Technological University, where
      I develop models, control strategies, and co‑simulation frameworks for next‑generation
      active distribution networks.
    </p>
    <p>
      My work focuses on building intelligent, resilient, and communication‑aware energy management
      solutions for active distribution networks with high penetration of renewable energy and
      distributed energy storage. This includes developing multi‑domain power–communication
      co‑simulation platforms that combine the <strong>OpenDSS quasi‑static time‑series simulator</strong> for
      distribution system modeling and the <strong>OMNeT++/INET communication network emulator</strong> for
      packet‑level communication analysis. I also work extensively with <strong>Typhoon HIL</strong> for real‑time
      hardware‑in‑the‑loop (CHIL) simulations testing and advanced inverter control aligned with
      IEEE&nbsp;1547‑2018 requirements.
    </p>

    <p>
      I conduct my research at the <strong>HILLTOP</strong> (Hardware‑in‑the‑Loop Laboratory Testbed and
      Open Platform), which supports real‑time CHIL experiments using Typhoon&nbsp;HIL&nbsp;606 devices, along with DSS.
      The testbed enables realistic evaluation of power electronic converters, DER systems,
      and communication protocols such as Utility&nbsp;DNP3 and Modbus&nbsp;TCP/IP and IEC&nbsp;61850, allowing end‑to‑end
      validation of cyber‑physical grid control strategies.
    </p>
    <p>
      <strong>Location:</strong> Smart Grid Lab, CESR — Clement Hall, Room&nbsp;103, Cookeville, TN
      38505
    </p>


      <H2 id="What I Do">What I Do</H2>

      {/* Project cards — image on top, content below (like Orestify layout) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1.5rem",
          marginTop: "1.25rem",
          marginBottom: "1.5rem",
        }}
      >
        {/* Card 1 */}
        <div
          id="p1"
          className="transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl cursor-pointer"
          style={{
            borderRadius: "0.75rem",
            overflow: "hidden",
            boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
            border: "1px solid #e5e7eb",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              backgroundImage: "linear-gradient(135deg, rgba(26,58,92,0.75) 0%, rgba(45,106,79,0.75) 100%), url('/images/project1.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "180px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: "0.75rem",
              letterSpacing: "0.05em",
              fontWeight: 600,
              gap: "0.35rem",
              padding: "0 0.5rem",
              textAlign: "center",
            }}
          >
            ⚡ DSO · 🔗 CO‑SIMULATION · 📡 IEEE 1547
          </div>

          <div style={{ padding: "1.1rem 1.25rem", flex: 1 }}>
            <p
              style={{
                fontWeight: 700,
                fontSize: "0.95rem",
                marginTop: 0,
                marginBottom: "0.5rem",
                lineHeight: 1.4,
              }}
            >
              DSO‑Centric Power–Communication Co‑Simulation for DER Scheduling and IEEE 1547 Evaluation
            </p>

            <p
              style={{
                margin: 0,
                fontSize: "0.85rem",
                color: "#6b7280",
                lineHeight: 1.6,
              }}
            >
              Coupled OpenDSS power flow, OMNeT++ packet-level communication, and Typhoon HIL inverter models under a DSO supervisory controller to evaluate DER scheduling and IEEE 1547‑2018 smart inverter functions in cyber‑physical distribution systems.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div
          id="p2"
          className="transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl cursor-pointer"
          style={{
            borderRadius: "0.75rem",
            overflow: "hidden",
            boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
            border: "1px solid #e5e7eb",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              backgroundImage: "linear-gradient(135deg, rgba(58,26,92,0.75) 0%, rgba(106,45,79,0.75) 100%), url('/images/project2.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "180px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: "0.75rem",
              letterSpacing: "0.05em",
              fontWeight: 600,
              gap: "0.35rem",
              padding: "0 0.5rem",
              textAlign: "center",
            }}
          >
            ⚙️ CHIL · 🔌 SMART INVERTERS · 🟦 TYPHOON HIL
          </div>

          <div style={{ padding: "1.1rem 1.25rem", flex: 1 }}>
            <p
              style={{
                fontWeight: 700,
                fontSize: "0.95rem",
                marginTop: 0,
                marginBottom: "0.5rem",
                lineHeight: 1.4,
              }}
            >
              Real‑Time CHIL Simulation for Grid‑Forming/Grid‑Following Inverter Control and IEEE 1547 Compliance
            </p>

            <p
              style={{
                margin: 0,
                fontSize: "0.85rem",
                color: "#6b7280",
                lineHeight: 1.6,
              }}
            >
              Built Typhoon HIL real‑time models for grid‑forming and grid‑following inverters, performing closed‑loop CHIL testing for Volt‑VAR/Volt‑Watt control and IEEE 1547‑2018 ride‑through compliance across islanding and fault scenarios.
            </p>
          </div>
        </div>


        {/* Card 3 */}
        <div
          id="p3"
          className="transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl cursor-pointer"
          style={{
            borderRadius: "0.75rem",
            overflow: "hidden",
            boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
            border: "1px solid #e5e7eb",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              backgroundImage: "linear-gradient(135deg, rgba(92,58,26,0.75) 0%, rgba(79,106,45,0.75) 100%), url('/images/project3.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "180px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: "0.75rem",
              letterSpacing: "0.05em",
              fontWeight: 600,
              gap: "0.35rem",
              padding: "0 0.5rem",
              textAlign: "center",
            }}
          >
            🔋 DERs · 📊 OPTIMIZATION · 🌐 ACTIVE DISTRIBUTION NETWORKS
          </div>

          <div style={{ padding: "1.1rem 1.25rem", flex: 1 }}>
            <p
              style={{
                fontWeight: 700,
                fontSize: "0.95rem",
                marginTop: 0,
                marginBottom: "0.5rem",
                lineHeight: 1.4,
              }}
            >
              Multi‑Community BESS Scheduling, PV Hosting Capacity, and Active Distribution Network Optimization
            </p>

            <p
              style={{
                margin: 0,
                fontSize: "0.85rem",
                color: "#6b7280",
                lineHeight: 1.6,
              }}
            >
              Integrated OpenDSS with MILP optimization to schedule BESS across multi‑community networks, cutting peak demand ~18% and boosting PV hosting capacity 28%. Validated results against Typhoon HIL hardware measurements.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div
          id="p4"
          className="transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl cursor-pointer"
          style={{
            borderRadius: "0.75rem",
            overflow: "hidden",
            boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
            border: "1px solid #e5e7eb",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              backgroundImage: "linear-gradient(135deg, rgba(58,12,163,0.75) 0%, rgba(114,9,183,0.75) 100%), url('/images/project4.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "180px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: "0.75rem",
              letterSpacing: "0.05em",
              fontWeight: 600,
              gap: "0.35rem",
              padding: "0 0.5rem",
              textAlign: "center",
            }}
          >
            🤖 AI · 🧠 DEEP LEARNING · ⚡ POWER SYSTEMS
          </div>

          <div style={{ padding: "1.1rem 1.25rem", flex: 1 }}>
            <p
              style={{
                fontWeight: 700,
                fontSize: "0.95rem",
                marginTop: 0,
                marginBottom: "0.5rem",
                lineHeight: 1.4,
              }}
            >
              Deep Learning–Based Fault Detection and Powertrain Diagnostics in Cyber‑Physical Energy Systems
            </p>
            <p
              style={{
                margin: 0,
                fontSize: "0.85rem",
                color: "#6b7280",
                lineHeight: 1.6,
              }}
            >
              Developed LSTM and CNN models to detect and classify faults in Typhoon HIL EV powertrain simulations, achieving &gt;98% accuracy. Enables real‑time predictive diagnostics for cyber‑physical energy systems.
            </p>
          </div>
        </div>

      </div>{/* end project-cards grid */}


      <H2 id="current-research-interests">Research Interests</H2>
      <H3 id="energy--power-systems">Power Systems &amp; Energy </H3>
      <InterestList items={energyPower} />
      <H3 id="control--simulation">Control &amp; Simulation</H3>
      <InterestList items={controlSim} />
      <H3 id="Co-simulation">Co-Simulation</H3>
      <InterestList items={aiml} />

      <H2 id="software--tools">Software &amp; Tools</H2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1.25rem",
          marginTop: "1.25rem",
          marginBottom: "1.5rem",
        }}
      >
        {tools.map(({ category, items, color, icon }) => (
          <div
            key={category}
            style={{
              borderRadius: "0.75rem",
              overflow: "hidden",
              boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
              border: "1px solid #e5e7eb",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Coloured icon header */}
            <div
              style={{
                background: color,
                height: "90px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
              }}
            >
              {icon}
            </div>
            {/* Text content */}
            <div style={{ padding: "0.9rem 1rem", flex: 1 }}>
              <p style={{ fontWeight: 700, fontSize: "0.9rem", margin: "0 0 0.35rem", color: color }}>
                {category}
              </p>
              <p style={{ margin: 0, fontSize: "0.8rem", color: "#6b7280", lineHeight: 1.6 }}>
                {items}
              </p>
            </div>
          </div>
        ))}
      </div>

    </PageShell>
  );
}
