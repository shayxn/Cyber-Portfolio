import { useState } from "react";
import { Link, useLocation } from "wouter";
import { ArrowDownToLine, Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const links = [
    { href: "/", label: "Home" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
  ];

  return (
    <header className="nav-shell">
      <div className="site-container nav-inner">
        <Link href="/" className="brand-mark" onClick={() => setIsOpen(false)}>
          <span className="brand-monogram">SA</span>
          <span>
            <span className="brand-name">Shayan Ali</span>
            <span className="brand-caption">Cybersecurity · UAE</span>
          </span>
        </Link>

        <button
          type="button"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="nav-mobile-toggle"
        >
          {isOpen ? <X size={19} /> : <Menu size={19} />}
        </button>

        <div className={`${isOpen ? "nav-menu" : "hidden md:block"}`}>
          <nav className="nav-links" aria-label="Main navigation">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`nav-link ${location === link.href ? "active" : ""}`}
                aria-current={location === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
            <a className="resume-button" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume <ArrowDownToLine size={15} />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}