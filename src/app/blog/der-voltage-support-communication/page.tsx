import type { Metadata } from "next";
import { Network } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { TableOfContents, type TocItem } from "@/components/toc";
import { H2, H3 } from "@/components/prose";

export const metadata: Metadata = { 
  title: "DER Voltage Support Meets Digital Grids | Ejikeme Amako" 
};

const toc: TocItem[] = [
  { id: "electrical-and-digital", label: "The Grid Is Becoming Both Electrical and Digital" },
  { id: "smarter-inverters", label: "Smarter Inverters for Smarter Voltage Control" },
  { id: "intelligence-needs-communication", label: "Intelligence Needs Communication" },
  { id: "power-communication-together", label: "Bringing Power Systems and Communication Networks Together" },
  { id: "milliseconds-matter", label: "When Milliseconds Matter" },
  { id: "next-generation-adns", label: "Building the Next Generation of Active Distribution Networks" },
  { id: "publications", label: "Publications" },
];

export default function BlogPost() {
  return (
    <PageShell
      title="DER Voltage Support Meets Digital Grids: Smart Inverter Control and Communication‑Aware BESS Scheduling in Modern Active Distribution Networks"
      toc={<TableOfContents title="Contents" icon={<Network className="h-3.5 w-3.5" />} items={toc} />}>
      <p className="text-sm text-[var(--mm-text-light)] mb-6">
        By Ejikeme A. Amako • July, 2026 • 7 min read
      </p>

      <div className="prose prose-lg max-w-none">
        <blockquote className="italic text-lg border-l-4 border-[var(--mm-link)] pl-4 my-6">
          "The electric grid of the future won't simply be cleaner—it will be more connected, more intelligent, 
          and increasingly dependent on both electrical and digital infrastructure."
        </blockquote>

        <p>      
          Picture a neighborhood where centralized solar arrays, rooftop panels, battery storage systems, electric vehicles, and 
          smart inverters are all working in harmony. It's a sunny afternoon with high solar irradiance, and those PV systems are cranking 
          out more electricity than people are actually using. Instead of that excess energy going to waste, 
          batteries soak it up for later, while smart inverters autonomously adjust voltages to keep everything running safely. 
          Meanwhile, behind the scenes, communication networks are buzzing with activity—constantly shuttling 
          measurements and control commands between these distributed energy resources (DERs) and the utility's 
          Distribution System Operators (DSOs).       
        </p>

        <p>
          This is what modern <strong>Active Distribution Networks (ADNs)</strong> look like.
        </p>

        <p>
          But here's the catch: bringing this vision to life takes more than just bolting renewable tech onto 
          the grid. Effective grid management requires an integrated approach. Every battery needs to know exactly when to charge or discharge. Every inverter must react 
          intelligently to voltage changes. And every control decision needs to zip through a communication 
          network fast enough to actually matter. 
        </p>

        <p>
          During grid contingencies, such as neighborhood islanding or PV fault conditions, a network plagued by high latency and poor reliability 
          becomes a dangerous bottleneck. If the network is congested, even the smartest inverters and batteries can't receive critical 
          commands in time to prevent voltage collapse or other instabilities. 
          Furthermore, coordinating multiple DERs across different communities requires a robust infrastructure capable of 
          handling heavy data traffic without dropping packets or introducing excessive delays. For instance, during periods of 
          peak solar generation, smart inverters are working hard to regulate voltage at the Point of Common Coupling (PCC). 
          Simultaneously, the communication network must seamlessly manage the surge in data traffic as all these devices 
          report their status and exchange commands with the DSO.
        </p>

        <p>
          This research digs into these two critical puzzle pieces. The first publication examines how 
          <strong> IEEE 1547-2018 smart inverter functions</strong> help keep voltages in check across distribution 
          networks. The second study takes things further by developing an <strong>integrated power–communication 
          co-simulation framework</strong>. This framework reveals exactly what happens when real-world communication 
          hurdles—like network congestion and transmission delays—start affecting coordinated battery scheduling between 
          downstream communities and upstream utility operators.
        </p>

        <p>
          Here's the core takeaway from both studies: <strong>tomorrow's distribution grids don't just need smart power 
          devices—they need smart communication networks connecting them all together.</strong>
        </p>

        <H2 id="electrical-and-digital">The Grid Is Becoming Both Electrical and Digital</H2>
        <p>
          For over a century, electric power systems were mostly physical infrastructure. Electricity flowed in one direction: from massive, 
          centralized power plants, across transmission and distribution lines, 
          and finally to customers with fairly predictable demand. Straightforward enough.
        </p>
        <p>
          Today's distribution systems? Completely different story.
        </p>
        <p>
          Now, we have thousands of community and rooftop solar installations pumping power into the grid throughout the day, 
          creating constantly shifting power flows and unpredictable voltage swings. Add batteries, electric vehicles, and 
          responsive loads continuously connecting and disconnecting, and you've got an environment infinitely more dynamic 
          than anything the legacy grid was designed to handle.
        </p>

        <p>
          Managing this complexity requires two complementary capabilities working hand in hand.
        </p>

        <p>
          First, DERs must actively support the local electrical network through intelligent, 
          autonomous control—think smart inverters making split-second decisions to stabilize voltage on the fly.
        </p>

        <p>
          Second, utilities need the ability to coordinate thousands of these distributed devices. 
          That requires robust, reliable communication networks capable of delivering real-time 
          telemetry and supervisory commands without dropping the ball.
        </p>

        <p>
          Without both pieces functioning together seamlessly, the promise of the smart grid remains just that—a promise.
        </p>

        <H2 id="smarter-inverters">Smarter Inverters for Smarter Voltage Control</H2>
        <p>
          Building a more intelligent grid starts right at the inverter level.
        </p>

        <p>
          Modern smart inverters do way more than just convert DC power from solar panels into AC power for the 
          grid. Under <strong>IEEE 1547-2018</strong> standard, they're expected to actively pitch in with voltage 
          regulation through standardized grid-support functions.
        </p>

        <p>
          In my 2026 IEEE Power and Energy Conference paper, I put three key voltage support modes 
          through their paces using a distribution feeder model, evaluating how each one performs under high solar irradiance variability conditions 
          and inverter operating limits:
        </p>

        <ul>
          <li>
            <strong>Volt–VAr (VV) control:</strong> Injects or absorbs reactive power to keep voltage in check.
          </li>
          <li>
            <strong>Volt–Watt (VW) control:</strong> Temporarily dials back active power when voltage gets dangerously high.
          </li>
          <li>
            <strong>Combined Volt–VAr/Volt–Watt (VV/VW) control:</strong> Coordinates both approaches for superior 
            overall performance.
          </li>
        </ul>

        <p>
          Rather than testing these functions in isolation, the study examined how they perform together while 
          respecting the inverter's PQ capability curve across a range of solar irradiance levels.
        </p>

        <p>
          The results were clear: coordinated VV/VW control delivered much more effective voltage regulation than either 
          mode flying solo. It minimized voltage deviations while strictly adhering to the inverter's physical operating limits.
        </p>

        <div className="my-8">
          <img 
            src="/images/Smart_inverter_functions_2.jpg" 
            alt="Smart Inverter Functions and Curve"
            className="w-full rounded-lg"
          />
          <p className="text-sm text-[var(--mm-text-light)] italic mb-0">
            <strong>Figure:</strong> Smart Inverter Volt–VAr, Volt–Watt, and combined Volt–VAr/Volt–Watt functions and 
            Inverter control capability.
          </p>
        </div>

        <H2 id="intelligence-needs-communication">Intelligence Needs Communication</H2>
        <p>
          While smart inverters can make local decisions almost instantly, larger distribution systems need 
          coordination that goes way beyond what a single device can handle on its own.
        </p>

        <p>
          A Distribution System Operator (DSO) might need to coordinate multiple battery systems spread across 
          several communities—monitoring their state of charge, collecting telemetry data, and sending out new 
          operating commands as network conditions shift. and managing continencies in real time. 
          This is where communication networks become just as critical as the electrical devices themselves.
        </p>

        <p>
          This raises an important question that a lot of optimization studies tend to gloss over:
        </p>

        <p className="text-lg font-semibold text-[var(--mm-heading)] pl-6 border-l-4 border-[var(--mm-link)]">
          What happens when the communication network itself gets congested?
        </p>

        <p>
          Many optimization studies assume communication is instantaneous and perfectly reliable. 
          In fact, most research focuses exclusively on the power side of active distribution networks, 
          optimizing that domain while completely ignoring the digital infrastructure. 
          But in the real world, these systems are deeply intertwined. That is exactly why we need a proper co-simulation approach 
          that optimizes all functional layers of a smart grid simultaneously. 
          In reality, telemetry and control signals have to travel through wireless RF mesh networks, 
          Ethernet cables, fiber-optic backhauls, routers, switches, and various communication protocols—all of 
          which introduce latency and the occasional packet retransmission.
        </p>

        <p>
          Ignoring these effects can lead to wildly optimistic conclusions about how well the grid will actually perform.
        </p>

        <H2 id="power-communication-together">Bringing Power Systems and Communication Networks Together</H2>
        <p>
          To tackle this challenge head-on, my second study developed an integrated <strong>power–communication 
          co-simulation framework</strong>. This framework models both the electrical distribution system and its supporting 
          communication infrastructure simultaneously, connecting them to a supervisory and monitoring DSO to capture every layer of the smart grid.
        </p>
        <p>
          Instead of assuming perfect communications, the framework couples a power solver, a communication network simulator, 
          a DSO model, and a co-simulation broker to synchronize power-flow calculations with packet-level network behavior. 
          This lets electrical events and communication events influence each other in real time—just like they do in actual grid operations.
        </p>

        <p>
          Within this framework, optimized Battery Energy Storage System (BESS) schedules are 
          transmitted using a practical, utility-standard DNP3-over-TCP/IP messaging approach across a 
          hybrid communication network made up of RF mesh, Ethernet, and fiber links. 
          The communication model captures all the messy realities: latency, congestion, retransmissions, and throughput 
          limits—while maintaining synchronized interactions between the DSO and multiple communities' DERs.
        </p>
        <div className="my-8">
          <img 
            src="/images/DER_Support_main.jpg" 
            alt="Integrated power–communication co-simulation architecture"
            className="w-full rounded-lg"
          />
          <p className="text-sm text-[var(--mm-text-light)] italic mb-0">
            <strong>Figure:</strong> Integrated power–communication co-simulation architecture.
          </p>
        </div>

        <H2 id="milliseconds-matter">When Milliseconds Matter</H2>
        <p>
          One of the most eye-opening findings from this study? Communication performance directly impacts power 
          system performance. Like, measurably and significantly.
        </p>

        <p>
          Under baseline operating conditions, supervisory commands experienced an average end-to-end latency of 
          about <strong>175 milliseconds</strong>, which was quick enough to enable timely battery dispatch and 
          coordinated operation. No problem there.
        </p>

        <p>
          But when we simulated a heavily shared RF mesh communication environment—the kind you would see in a real utility network 
          with lots of competing traffic—latency jumped to approximately <strong>248 ms</strong>, and channel 
          utilization shot up to nearly <strong>98%</strong>. Even though quality-of-service mechanisms ensured that critical 
          BESS messages got through reliably, the delayed telemetry and dispatch commands meant that corrective actions 
          during contingency events were dangerously postponed.
        </p>
        <p>
          This hammers home an important reality: an optimization algorithm might produce brilliant scheduling 
          decisions, but those decisions only matter if they actually reach the field devices in time to make 
          a difference.
        </p>

        <p>
          Communication networks aren't passive infrastructure anymore—they've become an active component of grid 
          reliability.
        </p>

        <H2 id="next-generation-adns">Building the Next Generation of Active Distribution Networks</H2>
        <p>
          When you look at these two publications together, they represent consecutive steps toward the same goal.
        </p>

        <p>
          The first one demonstrates how intelligent smart inverter functions improve voltage support at the device 
          level—getting individual inverters to do their part.
        </p>

        <p>
          The second expands that perspective to show how reliable communication enables coordinated decision-making 
          across entire distribution networks—getting all those smart devices working together as a team.
        </p>
        <p>
          For <strong>electric utilities</strong>, this research makes it abundantly clear why future grid modernization can't 
          just focus on electrical equipment. You have to prioritize the communication infrastructure when planning 
          DER integration. Furthermore, a proper co-simulation framework is absolutely essential for evaluating 
          how these overlapping domains interact under realistic, messy operating conditions.
        </p>

        <p>
          For <strong>researchers</strong>, it highlights the immense value of combining power system simulation, communication 
          network modeling, and standardized interoperability into unified cyber-physical frameworks. 
          We have to evaluate real-world behaviors—not just idealized, frictionless scenarios.
        </p>

        <p>
          For the <strong>future smart grid</strong>, the message is crystal clear: renewable energy technologies 
          alone won't cut it. Smart inverters, battery storage, communication networks, cyber-security systems and advanced control algorithms 
          need to operate as an integrated ecosystem. Only then can Active Distribution Networks deliver the reliability, 
          resilience, and flexibility we need for a cleaner, more connected energy future.
        </p>

        <p>
          As distribution systems continue their digital transformation, the intelligence of tomorrow's grid will be 
          defined not just by how electricity flows—but by how information flows alongside it.
        </p>

        <hr className="my-8" />
        
        <H3 id="publications">Publications</H3>
        <div className="space-y-4">
          <div className="p-4 bg-[var(--mm-card-bg)] rounded-lg border border-[var(--mm-border)]">
            <p className="font-semibold text-[var(--mm-heading)] mb-2">
              <a 
                href="https://doi.org/10.1109/TPEC67884.2026.11513038"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--mm-link)] hover:underline"
              >
                Evaluating the OpenDSS Combined Volt–VAr Volt–Watt Smart Inverter Function
              </a>
            </p>
            <p className="text-sm text-[var(--mm-text)] mb-2">
              E. A. Amako, A. Arzani and S. M. Mahajan, "Evaluating the OpenDSS Combined Volt-VAr Volt-Watt 
              Smart Inverter Function," <em>2026 IEEE Texas Power and Energy Conference (TPEC)</em>, 
              College Station, TX, USA, 2026, pp. 1-6,              
              <a 
                href="https://doi.org/10.1109/TPEC67884.2026.11513038"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--mm-link)] hover:underline ml-1"
              >
                https://doi.org/10.1109/TPEC67884.2026.11513038.
              </a>
            </p>
          </div>
          
          <div className="p-4 bg-[var(--mm-card-bg)] rounded-lg border border-[var(--mm-border)]">
            <p className="font-semibold text-[var(--mm-heading)] mb-2">
              Integrated Power–Communication Framework for BESS Scheduling in Multi-Community Active Distribution Networks
            </p>
            <p className="text-sm text-[var(--mm-text)] mb-2">
              <em>IEEE Transactions on Industry Applications</em>
            </p>
            <p className="text-xs text-[var(--mm-text-light)] mb-0">
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 rounded text-xs font-medium">
                Under Review
              </span>
            </p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
