import type { Metadata } from "next";
import { BookText } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { TableOfContents, type TocItem } from "@/components/toc";
import { H2, H3 } from "@/components/prose";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

export const metadata: Metadata = { 
  title: "Smarter Batteries, Smarter Grids: Intelligent BESS Scheduling | Ejikeme Amako" 
};

const toc: TocItem[] = [
  { id: "renewable-challenge", label: "The Renewable Energy Challenge" },
  { id: "two-communities-to-scale", label: "From Two Communities to Utility-Scale Networks" },
  { id: "two-stage-strategy", label: "A Two-Stage Intelligent Scheduling Strategy" },
  { id: "why-matters", label: "Why This Matters" },
  { id: "publications", label: "Publications" },
];

export default function BlogPost() {
  return (
    <PageShell
      title="Smarter Batteries, Smarter Grids: How Intelligent Battery Scheduling Is Transforming Modern Power Networks"
      toc={<TableOfContents title="Contents" icon={<BookText className="h-3.5 w-3.5" />} items={toc} />}>
      <p className="text-sm text-[var(--mm-text-light)] mb-6">
        By Ejikeme A. Amako • May, 2026 • 8 min read
      </p>

      <div className="prose prose-lg max-w-none">
        <blockquote className="italic text-lg border-l-4 border-[var(--mm-link)] pl-4 my-6">
          "The future electric grid won't simply generate cleaner energy—it will have to think smarter about when, where, and how that energy is used."
        </blockquote>
        <p>
        Picture this: it’s a hot summer afternoon, and thousands of solar panels across your neighborhood are
        producing more electricity than anyone can use. Fast forward a few hours—sudden cloud movement causes
        highly variable solar PV outputs, but air conditioners are still blasting, and electric vehicles are
        plugging in as people get home from work. Suddenly, the previously high solar power output becomes
        unpredictable while electricity demand shoots through the roof.
        </p>

        <p>
        This daily drama plays out across power grids everywhere. And here’s the thing: we’ve gotten pretty good
        at producing renewable energy. The real puzzle? Managing it intelligently.
        </p>

        <p>
        Battery Energy Storage Systems (BESS) have emerged as one of our best tools for balancing renewable
        generation with actual electricity demand. But here’s what surprised me during my research—having
        batteries isn’t enough. BESS can do much more: energy shifting, black-start capability, frequency
        leveling, and power quality improvement. Without smart scheduling, even massive storage systems can end
        up charging or discharging at the wrong moments, missing opportunities to reduce peak demand, stabilize
        the grid, and minimize large power deviations that cause voltage instability and power quality issues in
        distribution networks. These challenges are especially pronounced in Active Distribution Networks (ADNs),
        where multiple communities and distributed energy resources interact in complex ways.
        </p>

        <p>
        This realization sparked my recent research on intelligent battery scheduling for ADNs. The work evolved
        across two publications—starting with coordinating batteries between two neighboring communities and
        scaling up to a framework that can manage multiple utility-scale communities within large distribution
        networks.
        </p>

        <p>
        The key insight? Instead of treating each battery as a lone wolf doing its own thing, what if we got them
        working together as a team? High solar irradiance fluctuations that result in rapid changes in power
        output can strain the grid—but coordinated BESS scheduling can mitigate these effects. The result is a
        grid that reduces peak demand, keeps voltages stable, minimizes energy losses, and does all this fast
        enough to be practical for utility operations.
        </p>

        <H2 id="renewable-challenge">The Renewable Energy Challenge Isn't Solar—It's Timing</H2>
        <p>
        Renewable energy has fundamentally flipped how distribution systems work. Traditional power grids were
        built around a simple idea: big centralized power plants would crank up generation whenever people needed
        more electricity. Clean. Simple. Predictable.
        </p>

        <p>
        Today’s grids? Not so much. Now we have thousands of community and rooftop solar systems injecting power
        throughout the day, creating bidirectional power flows and voltage swings that conventional distribution
        systems were never designed to handle.
        </p>

        <p>
        When solar production suddenly spikes, voltages can climb beyond safe limits. Then a cloud rolls by, and
        PV output can crash within seconds, forcing the grid to scramble. Later that evening, as solar generation
        disappears but demand stays high, utilities face what we affectionately call the <strong>duck curve</strong>—a
        steep ramp in net demand that can stress the entire system.
        </p>

        <p>
        Batteries help smooth out these wild swings by storing surplus solar energy during the day and releasing
        it when demand peaks. But figuring out <strong>when</strong> each battery should charge, <strong>how much</strong> energy to store, and
        <strong>when</strong> to discharge during cloud-cover events becomes incredibly complex as more communities and
        distributed resources join the grid.
        </p>

        <H2 id="two-communities-to-scale">From Two Communities to Utility-Scale Networks</H2>
        <p>
        In my first study, presented at an <strong>IEEE Power and Energy Conference (TPEC)</strong>, I tackled a
        straightforward but important question:
        </p>

        <p className="text-lg font-semibold text-[var(--mm-heading)] pl-6 border-l-4 border-[var(--mm-link)]">
        Can neighboring communities coordinate their battery systems to mitigate voltage instability instead of
        each operating independently?
        </p>

        <p>
        To find out, I developed a two-stage scheduling framework for an IEEE Test Feeder ADN with two neighboring
        communities, each equipped with co-located PV-BESS systems. The approach combined a fast rule-based
        decision process with Particle Swarm Optimization (PSO) to optimize battery operations while respecting
        network limits.
        </p>

        <p>
        To speed things up, I leveraged parallel processing using a distribution system power solver, allowing
        multiple community scheduling problems to be solved simultaneously rather than sequentially.
        </p>

        <p>
        The results were encouraging—coordinated scheduling reduced peak demand, improved voltage stability,
        lowered system losses, and cut simulation time by more than <strong>96%</strong> through parallel processing.
        </p>

        <p>
        But those results naturally raised another question:
        </p>

        <p className="text-lg font-semibold text-[var(--mm-heading)] pl-3 border-l-4 border-[var(--mm-link)]">
        Would this approach still work for real utility-scale distribution systems with thousands of buses and
        multiple independent communities?
        </p>

        <p>
          That question became the foundation for the next publication. Building on the original framework, I
          expanded the methodology to coordinate four communities within the massive IEEE 8500-node ADN—a true
          utility-scale network. This version also incorporated IEEE 1547‑2018 smart inverter functions, including
          Volt–VAr, Volt–Watt, and combined Volt–VAr/Volt–Watt control, to provide additional voltage support
          alongside intelligent battery scheduling.
        </p>

        <p>
          Together, these two studies tell a story of progression: the first showed that coordinated battery 
          scheduling <em>works</em>, while the second proved it can <em>scale</em> to handle the complexity 
          of modern utility distribution systems.
        </p>

        <div className="my-8">
          <img 
            src="/images/PSOImage.jpg" 
            alt="Bio-inspired foundation of the implementation of PSO algorithm"
            className="w-full rounded-lg"
          />
          <p className="text-sm text-[var(--mm-text-light)] italic text-center mt-2">
            <strong>Figure:</strong> Bio-inspired foundation of the implementation of PSO algorithm.
          </p>
        </div>

          <div className="my-8">
          <img 
            src="/images/Blog_1_main_detail.jpg" 
            alt="How Intelligent Battery Scheduling is Transforming Modern Power Networks"
            className="w-full rounded-lg"
          />
          <p className="text-sm text-[var(--mm-text-light)] italic text-center mt-2">
            <strong>Figure:</strong> How Intelligent Battery Scheduling is Transforming Modern Power Networks.
          </p>
        </div>

        <H2 id="two-stage-strategy">A Two-Stage Intelligent Scheduling Strategy</H2>
        <p>
          At the heart of the framework is a simple philosophy: optimization should be both <strong>fast</strong> and <strong>intelligent</strong>.
        </p>

        <p>
          The first stage quickly determines whether each battery should charge, discharge, or remain idle using
          forecasts of community demand, available PV generation, and battery state of charge. This rule-based
          approach provides a solid starting point without burning computational resources on expensive optimization.
        </p>

        <div
          className="my-8 p-6 bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-lg border border-[var(--mm-border)]"
          style={{ fontFamily: '"Segoe Print", cursive' }}
        >
          <p className="text-sm text-[var(--mm-text-light)] italic mb-2">
            <strong>Stage 1 — Rule-Based BESS Scheduling</strong>: Here it compares each community's PV generation, load demand,
            and battery state of charge to determine whether the BESS should
            charge, discharge, or remain idle.
          </p>

          <div style={{ fontSize: '0.8em' }}>
            <BlockMath
              math={String.raw`
            P_{k}^{\mathrm{BESS},n} =
            \begin{cases}
            P_{A,\mathrm{BESS}},
            &
            \text{if } P_{k}^{\mathrm{PV}} > D_{k}^{\mathrm{load}}
            \ \&\ 
            \mathrm{SoC}_{\mathrm{BESS},n}<\mathrm{SoC}_{\max}
            \\[8pt]

            P_{B,\mathrm{BESS}},
            &
            \text{if } P_{k}^{\mathrm{PV}} \le D_{k}^{\mathrm{load}}
            \\[8pt]

            0,
            &
            \text{otherwise (BESS in idling mode)}
            \end{cases}
            `}
            />

            <BlockMath
              math={String.raw`
            \text{where, }
            P_{A,\mathrm{BESS}}
            =
            D_{k}^{\mathrm{load}}
            +
            P_{k}^{\mathrm{PV,sup}},
            \qquad
            P_{B,\mathrm{BESS}}
            =
            D_{k}^{\mathrm{load}}
            `}
              />
          </div>
        </div>
        

        <p>
          The second stage takes those initial decisions and refines them using <strong>Particle Swarm 
          Optimization (PSO)</strong>. If you're not familiar with PSO, think of how birds flock together—each 
          bird adjusts its flight based on its own experience and what the rest of the flock is doing. PSO 
          works similarly, searching for battery schedules that minimize fluctuations in community net demand 
          while satisfying voltage limits, battery constraints, power balance requirements, and network 
          current limits.
        </p>

        <p>
          Rather than optimizing each battery independently, the framework coordinates them so neighboring 
          communities work together to reduce stress on the distribution network.
        </p>
        <div
          className="my-8 p-6 bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-lg border border-[var(--mm-border)]"
          style={{ fontFamily: '"Segoe Print", cursive' }}
        >
          <p className="text-sm text-[var(--mm-text-light)] italic mb-2">
            <strong>Stage 2 — Community Scheduling Optimizer Model</strong> determines charging and discharging
            schedules for each community’s BESS. The optimizer minimizes the maximum deviation between the net
            demand and its daily average at each community’s PCC.
          </p>

          <div style={{ fontSize: '0.8em' }}>
            <BlockMath
            math={String.raw`
              \min_{P_k^{\mathrm{BESS}}} \; \Delta_k
            `}
          />
          <BlockMath
            math={String.raw`
              \Delta_k = 
              \max \left| 
                D_k^{\mathrm{net}} - D_{\mathrm{avg}}^{\mathrm{net}}
              \right|
              + g_{(x)}
            `}
          />
          <p className="text-sm text-[var(--mm-text-light)] italic mt-4 mb-2">
            <strong>Subject to:</strong>
          </p>
          <BlockMath
            math={String.raw`
              V_{\min} \le V_j^{\mathrm{node}} \le V_{\max},
              \quad \forall j \in \mathcal{N}_B
            `}
          />

          <BlockMath
            math={String.raw`
              \left| I_j^{\mathrm{line}} \right| \le I_{\max}^{\mathrm{line}},
              \quad \forall j \in \mathcal{N}_L
            `}
          />
          <BlockMath
            math={String.raw`
              -P_{\max}^{\mathrm{Chg}} 
              \le 
              P_k^{\mathrm{BESS}} 
              \le 
              P_{\max}^{\mathrm{Dischg}}
            `}
          />
          <BlockMath
            math={String.raw`
              \mathrm{SoC}_{\min} 
              \le 
              \mathrm{SoC}_k 
              \le 
              \mathrm{SoC}_{\max}
            `}
          /> 
          </div>
        </div>


        <H2 id="why-matters">Why This Matters</H2>
        <p>
          As electric grids continue evolving, batteries are becoming far more than just sources for services such as
          arbitrage, peak shaving, energy resilience, and ancillary support—they’re turning into intelligent grid
          assets.
        </p>

        <p>
          For <strong>electric utilities</strong>, coordinated battery scheduling offers a practical path to reduce peak
          demand, improve voltage regulation under high PV variability, integrate more renewable energy, and defer
          costly infrastructure upgrades.
        </p>

        <p>
          For <strong>researchers</strong>, the framework shows how optimization algorithms, parallel 
          computing, and standardized smart inverter controls can be woven together into scalable 
          decision-support tools for increasingly complex distribution systems.
        </p>

        <p>
          For the <strong>future smart grid</strong>, the message is even bigger: successful renewable integration isn’t
          just about installing more solar panels or larger batteries—it’s about coordinating those resources
          intelligently. Smarter batteries, smarter inverters, and 
          smarter algorithms will enable cleaner, more resilient, and more efficient power systems that can 
          actually meet tomorrow's energy challenges.
        </p>

        <p>
          As distributed energy resources continue to proliferate, intelligent coordination will become just 
          as critical as the technologies themselves. Because here's the truth: smarter batteries don't just 
          store energy—they help create smarter grids.
        </p>
        <p>
          For more details, you can check out the publications below, which provide a deeper dive into the methodologies 
          and results of this research.
        </p>
        <hr className="my-8" />
        
        <H3 id="publications">Publications</H3>
        <div className="space-y-4">
          <div className="p-4 bg-[var(--mm-card-bg)] rounded-lg border border-[var(--mm-border)]">
            <p className="font-semibold text-[var(--mm-heading)] mb-2">
              <a 
                href="https://ieeexplore.ieee.org/document/10907021"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--mm-link)] hover:underline"
              >
                BESS Scheduling for Two Communities of an Active Distribution Network
              </a>
            </p>
            <p className="text-sm text-[var(--mm-text)] mb-2">
              E. A. Amako, A. Arzani and S. M. Mahajan, "BESS Scheduling for Two Communities of an Active Distribution Network," 
              <em>2025 IEEE Texas Power and Energy Conference (TPEC)</em>, College Station, TX, USA, 2025, pp. 1-6,
              <a 
                href="https://doi.org/10.1109/TPEC63981.2025.10907021"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--mm-link)] hover:underline ml-1"
              >
                https://doi.org/10.1109/TPEC63981.2025.10907021
              </a>
            </p>
            <p className="text-xs text-[var(--mm-text-light)] mb-0">
              <em>IEEE Texas Power and Energy Conference (TPEC), 2025</em>
            </p>
          </div>
          
          <div className="p-4 bg-[var(--mm-card-bg)] rounded-lg border border-[var(--mm-border)]">
            <p className="font-semibold text-[var(--mm-heading)] mb-2">
              <a 
                href="https://www.mdpi.com/2673-4826/6/3/36"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--mm-link)] hover:underline"
              >
                Heuristic-Based Scheduling of BESS for Multi-Community Large-Scale Active Distribution Network
              </a>
            </p>
            <p className="text-sm text-[var(--mm-text)] mb-2">
              Amako, E. A., Arzani, A., & Mahajan, S. M. (2025). Heuristic-Based Scheduling of BESS for 
              Multi-Community Large-Scale Active Distribution Network. <em>Electricity</em>, <em>6</em>(3), 36. 
              <a 
                href="https://doi.org/10.3390/electricity6030036"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--mm-link)] hover:underline ml-1"
              >
                https://doi.org/10.3390/electricity6030036
              </a>
            </p>
            <p className="text-xs text-[var(--mm-text-light)] mb-0">
              <em>Electricity (MDPI), 2025</em>
            </p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
