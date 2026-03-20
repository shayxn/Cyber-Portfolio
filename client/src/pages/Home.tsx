import { Navbar } from "@/components/layout/Navbar";
import { Section } from "@/components/ui/Section";
import { GlitchText } from "@/components/ui/GlitchText";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { InteractiveTerminal } from "@/components/ui/InteractiveTerminal";
import { CyberPortrait } from "@/components/ui/CyberPortrait";
import { motion } from "framer-motion";
import { Terminal, Award, BookOpen, ChevronRight, ShieldCheck } from "lucide-react";
import heroBg from "@assets/generated_images/cybersecurity_abstract_background.png";

import expresswayLogo from "@assets/image_1770021462490.png";
import planningLogo from "@assets/image_1770023250391.png";
import profilePic from "@assets/image_1773977700491.png";

export function Home() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="fixed inset-0 z-0 opacity-20 pointer-events-none mix-blend-screen"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
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
              <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-6 leading-tight">
                <GlitchText text="SECURE" /> THE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
                  FUTURE
                </span>
              </h1>
              <p className="text-xl text-muted-foreground font-sans max-w-lg mb-8 leading-relaxed border-l-2 border-primary/30 pl-6">
                I am a Cybersecurity Student passionate about network defense, ethical hacking, and building secure systems.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="/projects" className="px-8 py-3 bg-primary text-background font-mono font-bold hover:bg-white transition-colors clip-path-polygon" style={{ clipPath: "polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)" }}>
                  VIEW_OPERATIONS
                </a>
                <a href="mailto:shayanaliwis@gmail.com" className="px-8 py-3 border border-primary text-primary font-mono font-bold hover:bg-primary/10 transition-colors clip-path-polygon" style={{ clipPath: "polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)" }}>
                  INITIATE_CONTACT
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="hidden md:block"
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


        {/* EDUCATION */}
        <Section id="education" title="EDUCATION_LOG" className="bg-secondary/10">
          <div className="relative border-l border-primary/30 ml-4 md:ml-12 space-y-12">
            {[
              {
                degree: "B.S. Cybersecurity",
                school: "Rochester Institute of Technology",
                period: "2022 - 2026",
                details: "Focus on Network Defense, Cryptography, and Digital Forensics. Dean's List 2023-2024."
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
