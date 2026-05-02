import { Navbar } from "@/components/layout/Navbar";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";

export function Skills() {
  const skillCategories = [
    {
      title: "OFFENSIVE_SECURITY",
      skills: [
        { name: "Vulnerability Assessment", level: 85 },
        { name: "Metasploit", level: 80 },
        { name: "Burp Suite", level: 85 },
        { name: "Nmap", level: 90 }
      ]
    },
    {
      title: "DEFENSIVE_SECURITY",
      skills: [
        { name: "Security Onion", level: 85 },
        { name: "SIEM (Splunk)", level: 80 },
        { name: "Wireshark", level: 90 },
        { name: "Malware Analysis", level: 75 },
        { name: "Digital Forensics", level: 80 }
      ]
    },
    {
      title: "GRC_&_INFRASTRUCTURE",
      skills: [
        { name: "GRC (Governance, Risk, Compliance)", level: 85 },
        { name: "Active Directory", level: 80 },
        { name: "ISO/IEC 27001", level: 90 },
        { name: "Linux Security", level: 85 }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="scanline"></div>
      <Navbar />
      
      <main className="pt-24 pb-16">
        <Section title="SKILL_MATRIX">
          <div className="grid gap-12">
            {skillCategories.map((category, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="bg-card/40 border border-primary/20 p-8 rounded-xl relative shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:border-primary/40 transition-colors"
              >
                <h3 className="text-2xl font-display font-bold text-primary mb-8 tracking-widest border-b border-primary/20 pb-4 inline-block">
                  {category.title}
                </h3>
                
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-2">
                      <div className="flex justify-between text-sm font-mono text-foreground/80">
                        <span>{skill.name}</span>
                        <span className="text-primary">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary w-full rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 + (sIdx * 0.1) }}
                          className="h-full bg-primary/80 shadow-[0_0_10px_theme('colors.primary')]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Section>
      </main>
    </div>
  );
}
