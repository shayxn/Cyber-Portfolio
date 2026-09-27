import { Navbar } from "@/components/layout/Navbar";
import { Section } from "@/components/ui/Section";
import { InteractiveTerminal } from "@/components/ui/InteractiveTerminal";
import { CyberPortrait } from "@/components/ui/CyberPortrait";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, ArrowUpRight, Award, BookOpen, MapPin, ShieldCheck } from "lucide-react";
import profilePic from "@assets/image_1773977700491.png";

const experience = [
  {
    role: "AI Cybersecurity Intern", company: "ATS5E", period: "12/2025 – 04/2026", location: "Dubai, UAE",
    details: "Supported security reviews for AI-enabled systems and agents, with focus on access control, risk identification, secure integrations, and technical security documentation."
  },
  {
    role: "Cybersecurity & Risk Governance Intern", company: "Aspiro", period: "06/2025 – 09/2025", location: "Dubai, UAE",
    details: "Supported cybersecurity risk assessments, control reviews, and compliance-related governance activities."
  },
  {
    role: "Technical Internee", company: "InShield Tech", period: "05/2025 – 06/2025", location: "Dubai, UAE",
    details: "Supported Netskope cloud security operations, including policy monitoring, alert review, and security documentation."
  },
  {
    role: "AI Cybersecurity Intern", company: "Raen AI", period: "05/2024 – 08/2024", location: "Dubai, UAE",
    details: "Performed red teaming of Large Language Model (LLM) applications to uncover security risks, misuse scenarios, and prompt injection vulnerabilities. Used Giskard to automate vulnerability scanning, bias detection, and adversarial testing of AI models, improving the reliability and security of deployed systems."
  },
  {
    role: "IT Intern", company: "Lattafa", period: "05/2023 – 08/2023", location: "Sharjah, UAE",
    details: "Collaborated with IT teams to support information security policies and controls."
  }
];

const certifications = [
  { name: "ISO/IEC 27001:2022 Lead Auditor", issuer: "Mastermind Assurance", date: "2025", id: "330d0e5f-76c5-4495-ab2d-5224e8bf95b5" },
  { name: "Certified Ethical Hacker", issuer: "EC-Council", date: "In Progress", id: "CEH" },
  { name: "Google Cybersecurity", issuer: "Google", date: "2025", id: "LJ647PD19HXS", link: "https://www.coursera.org/account/accomplishments/specialization/LJ647PD19HXS" }
];

export function Home() {
  return (
    <div className="page-shell">
      <Navbar />
      <main>
        <section className="home-hero">
          <div className="site-container hero-grid">
            <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }}>
              <p className="eyebrow">Cybersecurity, with context</p>
              <h1 className="display-title hero-title">Security work,<br /><em>grounded in evidence.</em></h1>
              <p className="hero-copy">
                I’m Shayan Ali, a cybersecurity professional working across red teaming, security operations, and responsible AI. I like understanding how things break—and helping people make them safer.
              </p>
              <div className="hero-meta">
                <span><MapPin size={15} /> United Arab Emirates</span>
                <span>Red teaming · SOC · AI security</span>
              </div>
              <div className="hero-actions">
                <Link href="/projects" className="button-primary">Explore my work <ArrowRight size={16} /></Link>
                <a href="mailto:shayanaliwis@gmail.com" className="button-outline">Get in touch <ArrowUpRight size={16} /></a>
              </div>
              <div className="hero-secondary-links">
                <a href="https://tryhackme.com/p/shayxn" target="_blank" rel="noopener noreferrer">TryHackMe profile <ArrowUpRight size={13} /></a>
                <a href="https://github.com/shayxn" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={13} /></a>
              </div>
            </motion.div>
            <motion.div className="hero-portrait" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .15, duration: .65 }}>
              <CyberPortrait src={profilePic} />
              <div className="hero-margin-note">SECURITY<br />IS A HUMAN<br />PRACTICE.</div>
            </motion.div>
          </div>
          <a className="scroll-cue site-container" href="#about"><span>Scroll to explore</span><ArrowDown size={15} /></a>
          <div className="hero-stamp" aria-hidden="true">SA<br /><span>2026</span></div>
        </section>

        <Section id="about" title="A little about how I work">
          <div className="about-grid">
            <p className="about-lead">Good security isn’t just a stack of tools. It’s careful thinking, clear communication, and knowing what matters to the people who rely on a system.</p>
            <div className="about-aside">
              <p>My experience spans offensive testing, SOC workflows, governance, and the fast-changing risks around AI. My academic background is in cybersecurity at Rochester Institute of Technology, with a focus on network defense, cryptography, and digital forensics.</p>
              <Link href="/skills" className="text-link">See the skills I bring <ArrowRight size={15} /></Link>
            </div>
          </div>
          <div className="values-strip">
            <div><span>01</span><strong>Stay curious</strong><p>Ask a better question before reaching for a tool.</p></div>
            <div><span>02</span><strong>Think in context</strong><p>Translate technical findings into real-world risk.</p></div>
            <div><span>03</span><strong>Share the signal</strong><p>Make security work clear, useful, and collaborative.</p></div>
          </div>
        </Section>

        <section className="terminal-section">
          <div className="site-container terminal-section-grid">
            <div className="terminal-intro">
              <p className="section-kicker">A small interactive detour</p>
              <h2 className="section-heading">Ask the<br />terminal.</h2>
              <p>Try <code>help</code>, <code>whoami</code>, or <code>projects</code>. It’s a little command-line window into the work and the person behind it.</p>
              <span className="terminal-caret-label"><i /> SYSTEM READY</span>
            </div>
            <InteractiveTerminal />
          </div>
        </section>

        <Section id="experience" title="Experience, in practice">
          <div className="experience-list">
            {experience.map((job, index) => (
              <motion.article key={`${job.company}-${job.role}`} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ delay: index * .06 }} className="experience-row">
                <div className="experience-rail"><span>{String(index + 1).padStart(2, "0")}</span><i /></div>
                <div className="experience-main">
                  <div className="experience-topline"><span className="section-kicker">{job.company}</span><span className="experience-period">{job.period}</span></div>
                  <h3>{job.role}</h3>
                  <p>{job.details}</p>
                  <span className="experience-location"><MapPin size={13} /> {job.location}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section id="education" title="Building the foundation" className="education-section">
          <div className="education-card paper-panel">
            <div className="education-icon"><BookOpen size={22} /></div>
            <div className="education-copy">
              <span className="section-kicker">2022 — 2026</span>
              <h3>B.S. Cybersecurity</h3>
              <p className="education-school">Rochester Institute of Technology</p>
              <p>Focus on Network Defense, Cryptography, and Digital Forensics.</p>
            </div>
            <span className="education-note">01 / EDUCATION</span>
          </div>
        </Section>

        <Section title="Credentials & continued learning">
          <div className="credential-grid">
            {certifications.map((cert) => {
              const content = (
                <>
                  <div className="credential-mark"><Award size={20} /><span>{cert.date}</span></div>
                  <h3>{cert.name}</h3>
                  <p>{cert.issuer}</p>
                  <div className="credential-id"><ShieldCheck size={14} /> Credential ID <span>{cert.id}</span></div>
                  {cert.link && <span className="credential-verify">View credential <ArrowUpRight size={14} /></span>}
                </>
              );
              return cert.link ? (
                <a className="credential-card paper-panel lift" href={cert.link} target="_blank" rel="noopener noreferrer" key={cert.id}>{content}</a>
              ) : (
                <article className="credential-card paper-panel lift" key={cert.id}>{content}</article>
              );
            })}
          </div>
        </Section>

        <section className="closing-note">
          <div className="site-container closing-inner">
            <p className="section-kicker">The best security work is shared</p>
            <h2>Have a thoughtful problem<br />to solve?</h2>
            <a href="mailto:shayanaliwis@gmail.com" className="button-light">Let’s talk <ArrowUpRight size={16} /></a>
          </div>
        </section>
      </main>
      <footer className="site-footer"><div className="site-container footer-inner"><span>© 2026 Shayan Ali</span><span>Security is a practice, not a finish line.</span><a href="mailto:syedshayan03@protonmail.com">Email Shayan <ArrowUpRight size={13} /></a></div></footer>
    </div>
  );
}