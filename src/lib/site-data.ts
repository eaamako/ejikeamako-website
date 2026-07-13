export const PROFILE_IMG = "/images/profile.jpg";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Research", href: "/research" },
  { label: "Publications", href: "/publications" },
  { label: "Experience", href: "/industry-experience" },
  { label: "Blog/Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const hiddenNavItems: { label: string; href: string }[] = [];

export type SocialLink = {
  label: string;
  href: string;
  icon: string;
};

// Sidebar social links (with location first)
export const sidebarSocials: SocialLink[] = [
  { label: "ResearchGate", href: "https://www.researchgate.net/profile/A-Amako", icon: "researchgate" },
  { label: "Google Scholar", href: "https://scholar.google.com/citations?hl=en&user=OyN1lUYAAAAJ", icon: "scholar" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/eaamako62", icon: "linkedin" },
  { label: "GitHub", href: "https://github.com/eaamako", icon: "github" },
  { label: "ORCID", href: "https://orcid.org/0009-0002-6733-5131", icon: "orcid" },
  { label: "Email", href: "mailto:ejikeamako@yahoo.com", icon: "email" },
];

export const footerSocials: SocialLink[] = [
  { label: "Email", href: "mailto:ejikeamako@yahoo.com", icon: "email" }, 
  { label: "LinkedIn", href: "https://www.linkedin.com/in/eaamako62", icon: "linkedin" },
  { label: "Instagram", href: "https://www.instagram.com/alex_ejike/", icon: "instagram" },
  { label: "GitHub", href: "https://github.com/eaamako", icon: "github" },
  { label: "Google Scholar", href: "https://scholar.google.com/citations?hl=en&user=OyN1lUYAAAAJ", icon: "scholar" },
  { label: "ResearchGate", href: "https://www.researchgate.net/profile/A-Amako", icon: "researchgate" },
];

export type NewsItem = { date: string; html: string };

export const recentNews: NewsItem[] = [
  {
    date: "May 2026",
    html: `Our paper on <em>"Meta-DQN Tuned TD3-based Safety-Aware Deep Reinforcement Learning for Energy Management System in Community Microgrids"</em> is <strong>accepted</strong> for presentation and publication at the <strong>2026 61st IEEE Industry Applications Society Annual Meeting</strong>, Vancouver, Canada, October 2026.`,
  },
  {
    date: "Jan 2026",
    html: `Our paper on <em>"Real-Time Implementation of Consensus Tracking Control for Battery Energy Management and SoC Balancing"</em> is <strong>accepted</strong> for presentation and publication at the <strong>IEEE 10th Texas Power and Energy Conference (TPEC)</strong>, College Station, TX, USA, February 2026.`,
  },
  {
    date: "Dec 2025",
    html: `Our paper on <em>"An Enhanced Linear Active Disturbance Rejection Controller-Based Dual Active Bridge Converters for EV Charging"</em> was <strong>accepted and presented</strong> at the <strong>IEEE ECCE 2025</strong>, Philadelphia, PA, USA, October 2025.`,
  },
  {
    date: "Aug 2025",
    html: `Honored to share that I have been <strong>elevated to the grade of Senior Member of IEEE</strong>! The Senior Member grade is the highest level for which one may apply, requiring &ge;10 years of professional experience, significant performance over &ge;5 years, and peer recognition through three recommendation letters from IEEE Senior Members. Only ~10% of nearly half a million IEEE members hold this distinction.`,
  },
  {
    date: "Feb 2025",
    html: `Our paper on <em>"Modbus TCP/IP Based BESS Plant Controller Operations for a Peak Shaving Application"</em> was <strong>accepted and presented</strong> at the <strong>2025 IEEE 9th Texas Power and Energy Conference (TPEC)</strong>, College Station, TX.`,
  },
  {
    date: "Dec 2024",
    html: `Received <strong>Master of Science in Electrical and Computer Engineering</strong> degree from Tennessee Tech and continue to finish the ongoing <strong>Ph.D. in Engineering</strong>, majoring in Electrical Engineering with a focus on "Power Systems and Control".`,
  },
  {
    date: "Oct 2024",
    html: `Our paper, <em>"Multivariate Optimal Hybrid Deep Learning Model for Forecasting of Day-Ahead Solar Irradiance,"</em> was <strong>accepted and presented</strong> at the <strong>IEEE North American Power Symposium (NAPS) 2024</strong>, El Paso, TX.`,
  },
  {
    date: "May 2023",
    html: `Three of our papers on <strong>MiTM attacks</strong>, <strong>anomaly detection in smart grids</strong>, and <strong>digital twin applications</strong> were accepted at the <strong>IEEE World AI IoT Congress (AIIoT) 2023</strong>, Seattle, WA, USA.`,
  },
  {
    date: "Apr 2023",
    html: `A poster on <strong>automatic dust detection in solar PV panels</strong> was accepted at the <strong>18th Annual Research and Creative Inquiry Day 2023</strong> at Tennessee Tech.`,
  },
  {
    date: "Feb 2023",
    html: `Invited to review papers for the <strong>IEEE PES General Meeting</strong> conference.`,
  },
  {
    date: "Aug 2022",
    html: `Joined as a <strong>Graduate Teaching Assistant / Instructor</strong> at the Department of Electrical and Computer Engineering, Tennessee Tech University.`,
  },
  {
    date: "May 2022",
    html: `Received the <strong>Bangladesh Sweden Trust Fund scholarship</strong> to cover travel expenses for my Ph.D. study at Tennessee Tech.`,
  },
  {
    date: "Aug 2021",
    html: `Joined the <strong>Smart Grid Lab</strong> as a <strong>Graduate Research Assistant</strong> at the Center for Energy Systems Research (CESR), Tennessee Tech University.`,
  },
  {
    date: "Aug 2021",
    html: `Resigned from the <strong>Sub-Divisional Engineer (Electrical)</strong> position at the Sub-station Division of <a class="mm-link" href="https://www.apscl.gov.bd" target="_blank" rel="noopener">Ashuganj Power Station Company Ltd. (APSCL)</a> &mdash; one of the largest and first government power generation utilities in Bangladesh &mdash; to join the Ph.D. program at Tennessee Tech, USA.`,
  },
  {
    date: "Jul 2021",
    html: `Got <strong>USA student visa (F-1)</strong> approval from the US Embassy in Dhaka, Bangladesh, to pursue higher studies at Tennessee Tech University, TN, USA (2021&ndash;2026).`,
  },
  {
    date: "Apr 2021",
    html: `Received <strong>fully funded Ph.D. and Master's scholarships</strong> from multiple universities in the USA, South Korea, Malaysia, and Japan.`,
  },
  {
    date: "Mar 2020",
    html: `Promoted to <strong>Sub-Divisional Engineer (Grade-6)</strong> from Assistant Engineer (Grade-8) at <a class="mm-link" href="https://www.apscl.gov.bd" target="_blank" rel="noopener">Ashuganj Power Station Company Ltd. (APSCL)</a>, Ashuganj, Brahmanbaria, Bangladesh.`,
  },
  {
    date: "Jul 2018",
    html: `Visited <strong>China</strong> to participate in a month-long seminar and training on <em>"Upgradation and Renovation of Smart Grid in Bangladesh"</em>. Visited Kunming (Yunnan), Changsha (Hunan), and Xiamen (Fujian).`,
  },
  {
    date: "Dec 2017",
    html: `Our paper, <em>"Efficient Rectenna Design for Harvesting Microwave Power from SSPS System,"</em> was <strong>accepted and presented</strong> at the <strong>IEEE 2nd International Conference on Electrical and Electronic Engineering (ICEEE)</strong>, Rajshahi, Bangladesh.`,
  },
  {
    date: "Dec 2016",
    html: `Our paper, <em>"Novel approach of antenna array with beam steering technology for microwave power transmission from SSPS system,"</em> was <strong>accepted and presented</strong> at the <strong>IEEE 2nd International Conference on Electrical, Computer and Telecommunication Engineering (ICECTE)</strong>, Rajshahi, Bangladesh.`,
  },
  {
    date: "Aug 2016",
    html: `Received a full-time permanent position at <a class="mm-link" href="https://www.apscl.gov.bd" target="_blank" rel="noopener"><strong>Ashuganj Power Station Company Ltd. (APSCL)</strong></a> as <strong>Assistant Engineer (Electrical) [Grade-8]</strong>, placing <strong>3rd in the competitive recruitment exam</strong> conducted by BUET, Bangladesh. Joined on Aug 16, 2016.`,
  },
  {
    date: "Aug 2015",
    html: `Stood <strong>1st in merit</strong> in the competitive recruitment exam of <a class="mm-link" href="https://www.reb.gov.bd" target="_blank" rel="noopener"><strong>Bangladesh Rural Electrification Board (BREB)</strong></a> as Assistant Engineer and joined on Aug 2, 2015. Later secured 4th position for the AGM position, and then 2nd position in the combined BREB Assistant Engineer (Electrical) [Grade-9] exam.`,
  },
  {
    date: "Apr 2014",
    html: `Received the <strong>BASIS Outsourcing Award 2014</strong> in the District Category of Bangladesh for outstanding performance as a freelance worker in Web Development on Upwork (formerly oDesk/Elance) and as a Level-2 Fiverr Seller.`,
  },
  {
    date: "Jan 2014",
    html: `Completed <strong>B.Sc. in Electrical and Electronic Engineering</strong> from <a class="mm-link" href="https://www.pust.ac.bd" target="_blank" rel="noopener">Pabna University of Science and Technology (PUST)</a>, Bangladesh. Final result published Jan 2, 2014 &mdash; CGPA 3.87/4.00 (First Class with Distinction), <strong>1st position in merit in all 8 semesters</strong>.`,
  },
  {
    date: "Oct 2013",
    html: `Co-founded <strong>Cloud Technology BD</strong> as CEO, a startup providing web development, business management software, and ICT education to secondary and higher secondary students.`,
  },
  {
    date: "Mar 2009",
    html: `Started B.Sc. studies on 31st March 2009 at the Department of Electrical and Electronic Engineering, <a class="mm-link" href="https://www.pust.ac.bd" target="_blank" rel="noopener">Pabna University of Science and Technology (PUST)</a>, Pabna, Bangladesh.`,
  },
];

export const researchInterests = [
  "Power System Modeling and Simulation",
  "Smart Grid", "Utility Power-Communication Systems",
  "Hardware-in-the-Loop Simulation",
  "Multi-Community Active Distribution Networks",
  "Smart Inverter Control Models",
  "Distribution Station Operator Co-ordinated Control",
  "Co-simulation in Cyber-Physical Power Systems", 
  "Trans-Distr. Co-simulations",
  "Renewable Energy Integration Optimization",
  "Battery Energy Storage Systems & PV Systems",
];
