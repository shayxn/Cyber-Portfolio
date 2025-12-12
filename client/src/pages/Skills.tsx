import { Navbar } from "@/components/layout/Navbar";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";

export function Skills() {
  const skillCategories = [
    {
      title: "OFFENSIVE_SECURITY",
      skills: [
        { name: "Penetration Testing", level: 80 },
        { name: "Metasploit Framework", level: 75 },
        { name: "Burp Suite", level: 85 },
        { name: "Social Engineering", level: 60 },
        { name: "SQL Injection", level: 90 }
      ]
    },
    {
      title: "DEFENSIVE_SECURITY",
      skills: [
        { name: "Network Monitoring", level: 85 },
        { name: "Firewall Configuration", level: 80 },
        { name: "Incident Response", level: 70 },
        { name: "SIEM (Splunk)", level: 65 },
        { name: "Malware Analysis", level: 50 }
      ]
    },
    {
      title: "PROGRAMMING_&_TOOLS",
      skills: [
        { name: "Python", level: 90 },
        { name: "Bash Scripting", level: 85 },
        { name: "Linux Administration", level: 95 },
        { name: "C/C++", level: 60 },
        { name: "Git/GitHub", level: 85 }
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
                className="bg-card/30 border border-primary/10 p-8 rounded-lg relative"
              >
                {/* Decorative corner markers */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary"></div>

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
