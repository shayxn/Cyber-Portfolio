import { Navbar } from "@/components/layout/Navbar";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { ArrowRight, Crosshair, Eye, Network } from "lucide-react";
import { Link } from "wouter";

const skillCategories = [
  {
    title: "Offensive security",
    note: "Find the paths a defender should know about.",
    icon: Crosshair,
    skills: [
      { name: "Vulnerability Assessment", level: 85 },
      { name: "Metasploit", level: 80 },
      { name: "Burp Suite", level: 85 },
      { name: "Nmap", level: 90 }
    ]
  },
  {
    title: "Detection & response",
    note: "Turn the noise into a useful signal.",
    icon: Eye,
    skills: [
      { name: "Security Onion", level: 85 },
      { name: "SIEM (Splunk)", level: 80 },
      { name: "Wireshark", level: 90 },
      { name: "Malware Analysis", level: 75 },
      { name: "Digital Forensics", level: 80 }
    ]
  },
  {
    title: "Governance & infrastructure",
    note: "Build the controls and foundations that last.",
    icon: Network,
    skills: [
      { name: "GRC (Governance, Risk, Compliance)", level: 85 },
      { name: "Active Directory", level: 80 },
      { name: "ISO/IEC 27001", level: 90 },
      { name: "Linux Security", level: 85 }
    ]
  }
];

export function Skills() {
  return (
    <div className="page-shell">
      <Navbar />
      <main className="inner-page">
        <section className="page-intro">
          <div className="site-container page-intro-grid">
            <div>
              <p className="eyebrow">A practical toolkit</p>
              <h1 className="display-title page-title">Tools are useful.<br /><em>Judgment is better.</em></h1>
            </div>
            <p className="page-intro-copy">A working mix of offensive testing, detection, and risk governance—built through hands-on labs, internships, and a lot of questions.</p>
          </div>
          <div className="page-index">02 <span>/</span> SKILLS</div>
        </section>

        <Section title="Where I focus" className="skills-content">
          <div className="skills-grid">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.article
                  key={category.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * .12, duration: .45 }}
                  className={`skill-category skill-category-${index + 1} paper-panel`}
                >
                  <div className="skill-category-heading">
                    <span className="skill-icon"><Icon size={19} /></span>
                    <span className="section-kicker">0{index + 1} / PRACTICE</span>
                  </div>
                  <h2>{category.title}</h2>
                  <p className="skill-category-note">{category.note}</p>
                  <div className="skill-list">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="skill-item">
                        <div className="skill-label"><span>{skill.name}</span><span className="skill-level">{skill.level}<small>%</small></span></div>
                        <div className="skill-track">
                          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: .75, delay: .35 + skillIndex * .08 }} className="skill-fill" style={{ width: `${skill.level}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <span className="skill-category-number">0{index + 1}</span>
                </motion.article>
              );
            })}
          </div>
          <div className="skill-footnote"><span className="footnote-rule" /> Self-assessed familiarity across tools and methods. Experience is as important as the score.</div>
        </Section>

        <section className="skills-bridge">
          <div className="site-container skills-bridge-inner">
            <div><p className="section-kicker">Put the skills in context</p><h2>See the work behind them.</h2></div>
            <Link href="/projects" className="button-primary">Browse projects <ArrowRight size={15} /></Link>
          </div>
        </section>
      </main>
      <footer className="site-footer"><div className="site-container footer-inner"><span>© 2026 Shayan Ali</span><span>Security is a practice, not a finish line.</span><a href="mailto:syedshayan03@protonmail.com">Email Shayan <ArrowRight size={13} /></a></div></footer>
    </div>
  );
}