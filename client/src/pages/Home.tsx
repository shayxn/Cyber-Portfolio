import { Navbar } from "@/components/layout/Navbar";
import { Section } from "@/components/ui/Section";
import { GlitchText } from "@/components/ui/GlitchText";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { InteractiveTerminal } from "@/components/ui/InteractiveTerminal";
import { CyberPortrait } from "@/components/ui/CyberPortrait";
import { motion } from "framer-motion";
import { Terminal, Award, BookOpen, ChevronRight, ShieldCheck } from "lucide-react";
import { Link } from "wouter";

import expresswayLogo from "@assets/image_1770021462490.png";
import planningLogo from "@assets/image_1770023250391.png";
import profilePic from "@assets/image_1773977700491.png";

export function Home() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Scanline Effect */}
      <div className="scanline"></div>

      <Navbar />

      <main className="relative z-10 pt-16">
        {/* HERO SECTION */}
        <section className="min-h-[90vh] flex flex-col justify-center relative py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-3 py-1 mb-4 border border-primary/50 bg-primary/10 text-primary font-mono text-sm rounded-sm">
                STATUS: ONLINE
              </div>
              <div id="whoami-card" className="bg-card/80 border border-primary/20 p-6 rounded-lg backdrop-blur-md shadow-[0_0_30px_rgba(34,197,94,0.1)] mb-8">
                <div className="flex items-center gap-2 mb-4 border-b border-primary/20 pb-2">
                  <Terminal className="text-primary w-5 h-5" />
                  <span className="text-sm font-mono text-muted-foreground">terminal@user:~</span>
                </div>
                <div className="font-mono text-sm space-y-2">
                  <p className="text-primary">$ ./whoami</p>
                  <p className="text-foreground pl-4">
                    Name: Syed Shayan Ali<br/>
                    Role: Cybersecurity Analyst<br/>
                    Location: United Arab Emirates 🇦🇪<br/>
                    Focus: Red Teaming, SOC Operations
                  </p>
                  <p className="text-primary mt-4">$ ./list_skills</p>
                  <div className="pl-4 grid grid-cols-2 gap-x-4 text-foreground/80">
                    <span>- Python</span>
                    <span>- Linux</span>
                    <span>- Wireshark</span>
                    <span>- Metasploit</span>
                  </div>
                  <p className="text-primary mt-4 animate-pulse">$ _</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/projects" className="cursor-pointer inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-mono font-bold hover:bg-primary/90 transition-colors shadow-[0_0_15px_rgba(147,51,234,0.3)] hover:shadow-[0_0_25px_rgba(147,51,234,0.5)]">
                  VIEW_OPERATIONS
                </Link>
                <a href="mailto:shayanaliwis@gmail.com" className="inline-block px-8 py-3 border-2 border-primary text-primary rounded-lg font-mono font-bold hover:bg-primary/10 transition-colors">
                  INITIATE_CONTACT
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex justify-center w-full max-w-sm mx-auto md:max-w-none mt-8 md:mt-0"
            >
              <CyberPortrait src={profilePic} />
            </motion.div>
          </div>
          
          {/* Interactive Terminal Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-2 text-primary font-mono text-sm">
                <span className="animate-pulse">▶</span>
                <span>INTERACTIVE_SYSTEM_ACCESS // TYPE 'help' FOR INSTRUCTIONS</span>
              </div>
              <InteractiveTerminal />
            </motion.div>
          </div>
        </section>

        <Section id="experience" title="WORK_EXPERIENCE" className="bg-secondary/10">
          <div className="relative border-l border-primary/30 ml-4 md:ml-12 space-y-12">
            {[
              {
                role: "AI Cybersecurity Intern",
                company: "ATS5E",
                period: "12/2025 - 04/2026",
                location: "Dubai, UAE",
                details: "Supported security reviews for AI-enabled systems and agents, with focus on access control, risk identification, secure integrations, and technical security documentation."
              },
              {
                role: "Cybersecurity & Risk Governance Intern",
                company: "Aspiro",
                period: "06/2025 - 09/2025",
                location: "Dubai, UAE",
                details: "Supported cybersecurity risk assessments, control reviews, and compliance-related governance activities."
              },
              {
                role: "Cybersecurity Intern",
                company: "InShield Tech",
                period: "05/2025 - 06/2025",
                location: "Dubai, UAE",
                details: "Supported Netskope cloud security operations, including policy monitoring, alert review, and security documentation."
              },
              {
                role: "AI Cybersecurity Intern",
                company: "Raen AI",
                period: "05/2024 - 08/2024",
                location: "Dubai, UAE",
                details: "Performed red teaming of Large Language Model (LLM) applications to uncover security risks, misuse scenarios, and prompt injection vulnerabilities. Used Giskard to automate vulnerability scanning, bias detection, and adversarial testing of AI models, improving the reliability and security of deployed systems."
              },
              {
                role: "IT Intern",
                company: "Lattafa",
                period: "05/2023 - 08/2023",
                location: "Sharjah, UAE",
                details: "Collaborated with IT teams to support information security policies and controls."
              }
            ].map((exp, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12">
                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-primary rounded-full shadow-[0_0_10px_theme('colors.primary')]"></div>
                <div className="bg-card/50 p-6 border border-primary/10 hover:border-primary/40 transition-colors rounded-r-lg">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-xl font-display font-bold text-foreground">{exp.role}</h3>
                    <span className="font-mono text-sm text-primary bg-primary/10 px-3 py-1 rounded-full w-fit mt-2 md:mt-0">{exp.period}</span>
                  </div>
                  <h4 className="text-lg text-muted-foreground font-mono mb-4 flex items-center justify-between">
                    <span className="flex items-center gap-2"><Terminal className="w-4 h-4" /> {exp.company}</span>
                    <span className="text-sm">{exp.location}</span>
                  </h4>
                  <p className="text-foreground/80 font-sans leading-relaxed">
                    {exp.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* EDUCATION */}
        <Section id="education" title="EDUCATION_LOG" className="bg-secondary/5">
          <div className="relative border-l border-primary/30 ml-4 md:ml-12 space-y-12">
            {[
              {
                degree: "B.S. Cybersecurity",
                school: "Rochester Institute of Technology",
                period: "2022 - 2026",
                details: "Focus on Network Defense, Cryptography, and Digital Forensics."
              }
            ].map((edu, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12">
                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-primary rounded-full shadow-[0_0_10px_theme('colors.primary')]"></div>
                <div className="bg-card/50 p-6 border border-primary/10 hover:border-primary/40 transition-colors rounded-r-lg">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-xl font-display font-bold text-foreground">{edu.degree}</h3>
                    <span className="font-mono text-sm text-primary bg-primary/10 px-3 py-1 rounded-full w-fit mt-2 md:mt-0">{edu.period}</span>
                  </div>
                  <h4 className="text-lg text-muted-foreground font-mono mb-4 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" /> {edu.school}
                  </h4>
                  <p className="text-foreground/80 font-sans leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* CERTIFICATIONS */}
        <Section title="CERTIFICATIONS" className="bg-secondary/20">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "ISO/IEC 27001:2022 Lead Auditor", issuer: "Mastermind Assurance", date: "2025", id: "330d0e5f-76c5-4495-ab2d-5224e8bf95b5" },
              { name: "Certified Ethical Hacker", issuer: "EC-Council", date: "In Progress", id: "CEH" },
              { 
                name: "Google Cybersecurity", 
                issuer: "Google", 
                date: "2025", 
                id: "LJ647PD19HXS",
                link: "https://www.coursera.org/account/accomplishments/specialization/LJ647PD19HXS"
              }
            ].map((cert, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-card border-l-4 border-primary p-6 relative overflow-hidden group cursor-pointer"
                onClick={() => cert.link && window.open(cert.link, '_blank')}
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <ShieldCheck className="w-24 h-24" />
                </div>
                <div className="flex justify-between items-start mb-4">
                  <Award className="w-8 h-8 text-primary" />
                  <span className="font-mono text-xs text-muted-foreground border border-primary/20 px-2 py-1">{cert.date}</span>
                </div>
                <h3 className="text-xl font-bold font-display text-foreground mb-1">{cert.name}</h3>
                <p className="text-sm text-muted-foreground font-mono">{cert.issuer}</p>
                <div className="mt-4 pt-4 border-t border-dashed border-primary/20">
                  <span className="text-xs font-mono text-primary">ID: {cert.id}-{Math.floor(Math.random() * 9999)}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* PROJECTS SECTION - NEW */}
        <Section title="LATEST_OPERATIONS" className="bg-secondary/5">
          <div className="grid md:grid-cols-2 gap-6">
            <ProjectCard 
              title="Malware Exploit Investigation"
              description="Investigated a malware exploit using Kibana, Sguil, and Wireshark to analyze attack traffic and identify exploit behavior."
              tags={["Kibana", "Sguil", "Wireshark", "Malware"]}
            />
            <ProjectCard 
              title="AI Risk Assessment (GRC)"
              description="Conducted a structured AI risk assessment and governance review of a recruitment system, identifying key risks and mitigation strategies."
              tags={["GRC", "AI Governance", "Risk"]}
            />
            <ProjectCard 
              title="Offensive Security Labs"
              description="Performed penetration testing labs on Hack The Box, exploiting vulnerabilities and achieving privilege escalation."
              tags={["Hack The Box", "PenTesting", "PrivEsc"]}
            />
            <ProjectCard 
              title="Security Log Analysis"
              description="Performed log analysis using Splunk and Microsoft Sentinel, identifying patterns and investigating network and security events."
              tags={["Splunk", "Sentinel", "SIEM"]}
            />
          </div>
          <div className="text-center mt-8">
            <Link href="/projects" className="inline-flex items-center gap-2 text-primary hover:text-accent font-mono transition-colors">
              VIEW_ALL_PROJECTS <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </Section>

        <footer className="border-t border-primary/20 bg-background py-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="font-mono text-sm text-muted-foreground">
              &copy; 2025 CYBERSEC_PORTFOLIO. SYSTEM_SECURE.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
