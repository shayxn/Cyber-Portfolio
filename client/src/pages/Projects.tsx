import { Navbar } from "@/components/layout/Navbar";
import { Section } from "@/components/ui/Section";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import expresswayLogo from "@assets/image_1770021462490.png";
import planningLogo from "@assets/image_1770023250391.png";
import malwareLogo from "@assets/image_1775729570009.png";

export function Projects() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="scanline"></div>
      <Navbar />
      
      <main className="pt-24 pb-16">
        <Section title="PROJECTS_&_LABS">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <ProjectCard 
              title="HackTheBox: Expressway"
              description="Successfully pwned the Expressway machine. Exploited vulnerabilities to gain system access and capture both user and root flags."
              tags={["HackTheBox", "PenTesting", "Pwned"]}
              image={expresswayLogo}
              link="https://labs.hackthebox.com/achievement/machine/2289951/736"
            />
            <ProjectCard 
              title="HackTheBox: Planning"
              description="Successfully pwned the Planning machine. A retired machine that required strategic exploitation and lateral movement."
              tags={["HackTheBox", "Retired", "Pwned"]}
              image={planningLogo}
              link="https://labs.hackthebox.com/achievement/machine/2289951/660"
            />
            <ProjectCard 
              title="Malware Exploit Investigation"
              description="Network forensics case study using Kibana, Sguil, and Wireshark to trace a malware exploit and analyze attack artifacts."
              tags={["Forensics", "Kibana", "Wireshark"]}
              image={malwareLogo}
              github="https://github.com/shayxn/malware-exploit-investigation"
            />
            <ProjectCard 
              title="Vulnerability Scanner"
              description="Automated scanning tool that checks for common CVEs and misconfigurations in web servers."
              tags={["Bash", "Linux", "Security"]}
              github="https://github.com/shayxn"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 text-center"
          >
            <a href="https://github.com/shayxn" target="_blank" className="inline-flex items-center gap-2 text-primary hover:text-accent font-mono transition-colors">
              VIEW_ALL_REPOSITORIES <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>
        </Section>
      </main>
    </div>
  );
}