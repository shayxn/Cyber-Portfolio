import { Navbar } from "@/components/layout/Navbar";
import { Section } from "@/components/ui/Section";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import expresswayLogo from "@assets/image_1770021462490.png";
import planningLogo from "@assets/image_1770023250391.png";
import malwareLogo from "@assets/image_1775729570009.png";
import aiRiskLogo from "@assets/image_1776076981590.png";
import insiderLabLogo from "@assets/image_1782317005169.png";

export function Projects() {
  return (
    <div className="page-shell">
      <Navbar />
      <main className="inner-page">
        <section className="page-intro projects-intro">
          <div className="site-container page-intro-grid">
            <div>
              <p className="eyebrow">Lab work · investigations · governance</p>
              <h1 className="display-title page-title">Curiosity,<br /><em>put to work.</em></h1>
            </div>
            <p className="page-intro-copy">A selection of hands-on security labs and research projects. Each one is a chance to follow the evidence, test an assumption, and learn something new.</p>
          </div>
          <div className="page-index">03 <span>/</span> PROJECTS</div>
        </section>

        <Section title="Selected projects" className="projects-content">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: .08 } } }}
            className="projects-grid"
          >
            <ProjectCard
              title="Insider Lab (CyberDefenders)"
              description="Analyzed Linux disk image artifacts, including logs and Bash history, using FTK Imager to investigate insider threat activity and reconstruct user actions."
              tags={["Endpoint Forensics", "Execution", "Credential Access"]}
              image={insiderLabLogo}
              link="https://cyberdefenders.org/blueteam-ctf-challenges/achievements/shayxn/insider/"
            />
            <ProjectCard
              title="HackTheBox: Expressway"
              description="Pwned the Expressway machine by exploiting vulnerabilities to gain system access and capture both user and root flags."
              tags={["HackTheBox", "PenTesting", "Pwned"]}
              image={expresswayLogo}
              link="https://labs.hackthebox.com/achievement/machine/2289951/736"
            />
            <ProjectCard
              title="HackTheBox: Planning"
              description="Worked through the retired Planning machine, applying strategic exploitation and lateral movement to reach the objective."
              tags={["HackTheBox", "Retired", "Pwned"]}
              image={planningLogo}
              link="https://labs.hackthebox.com/achievement/machine/2289951/660"
            />
            <ProjectCard
              title="AI Risk Assessment & Governance Review"
              description="A structured AI risk assessment of an AI-assisted recruitment system, identifying key risks and practical recommendations for responsible, compliant use."
              tags={["GRC", "AI Governance", "Risk Management"]}
              image={aiRiskLogo}
              github="https://github.com/shayxn/ai-risk-assessment-talentmatch"
            />
            <ProjectCard
              title="Malware Exploit Investigation"
              description="A network forensics case study using Kibana, Sguil, and Wireshark to trace a malware exploit and examine the artifacts it left behind."
              tags={["Forensics", "Kibana", "Wireshark"]}
              image={malwareLogo}
              github="https://github.com/shayxn/malware-exploit-investigation"
            />
          </motion.div>
          <div className="projects-endnote">
            <span className="section-kicker">More notes in progress</span>
            <a href="https://github.com/shayxn" target="_blank" rel="noopener noreferrer" className="text-link">Explore all repositories <ArrowUpRight size={15} /></a>
          </div>
        </Section>
      </main>
      <footer className="site-footer"><div className="site-container footer-inner"><span>© 2026 Shayan Ali</span><span>Security is a practice, not a finish line.</span><a href="mailto:syedshayan03@protonmail.com">Email Shayan <ArrowUpRight size={13} /></a></div></footer>
    </div>
  );
}