import { Navbar } from "@/components/layout/Navbar";
import { Section } from "@/components/ui/Section";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import expresswayLogo from "@assets/image_1770021462490.png";
import planningLogo from "@assets/image_1770023250391.png";
import malwareLogo from "@assets/image_1775729570009.png";
import aiRiskLogo from "@assets/image_1776076981590.png";

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
              title="Malware Exploit Investigation"
              description="Investigated a malware exploit using Kibana, Sguil, and Wireshark to analyze attack traffic and identify exploit behavior."
              tags={["Forensics", "Kibana", "Wireshark", "Sguil"]}
              image={malwareLogo}
            />
            <ProjectCard 
              title="AI Risk Assessment for Recruitment System (GRC)"
              description="Conducted a structured AI risk assessment and governance review of a recruitment system, identifying key risks and mitigation strategies."
              tags={["GRC", "AI Governance", "Risk Management"]}
              image={aiRiskLogo}
            />
            <ProjectCard 
              title="Offensive Security Labs — Hack The Box"
              description="Performed penetration testing labs on Hack The Box, exploiting vulnerabilities and achieving privilege escalation."
              tags={["HackTheBox", "PenTesting", "PrivEsc", "OffSec"]}
            />
            <ProjectCard 
              title="Security Log Analysis & Monitoring"
              description="Performed log analysis using Splunk and Microsoft Sentinel, identifying patterns and investigating network and security events."
              tags={["Splunk", "Microsoft Sentinel", "SIEM", "Log Analysis"]}
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