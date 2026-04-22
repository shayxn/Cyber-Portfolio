import { Link, useLocation } from "wouter";
import { Terminal, Shield, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const links = [
    { href: "/", label: "HOME" },
    { href: "/skills", label: "SKILLS" },
    { href: "/projects", label: "PROJECTS" },
    { href: "https://github.com/shayxn", label: "GITHUB", external: true },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 border-b border-primary/20 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer group">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2b/Kali-dragon-icon.svg" 
                  alt="Dragon Logo" 
                  className="h-8 w-8 object-contain filter drop-shadow-[0_0_8px_rgba(147,51,234,0.6)] opacity-90 group-hover:opacity-100 group-hover:drop-shadow-[0_0_12px_rgba(147,51,234,0.9)] transition-all duration-300"
                />
                <span className="font-display font-bold text-xl tracking-wider text-foreground group-hover:text-primary transition-colors">
                  SEC<span className="text-primary">.PORTFOLIO</span>
                </span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {links.map((link) => (
                link.external ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer px-3 py-2 text-sm font-mono font-medium transition-colors hover:text-primary hover:bg-primary/10 border border-transparent hover:border-primary/50 text-muted-foreground"
                  >
                    {`> ${link.label}`}
                  </a>
                ) : (
                  <Link key={link.label} href={link.href}>
                    <span 
                      className={`cursor-pointer px-3 py-2 text-sm font-mono font-medium transition-colors hover:text-primary hover:bg-primary/10 border border-transparent hover:border-primary/50 ${
                        location === link.href ? "text-primary border-b-primary" : "text-muted-foreground"
                      }`}
                    >
                      {`> ${link.label}`}
                    </span>
                  </Link>
                )
              ))}
              <a 
                href="/resume.pdf" 
                target="_blank"
                className="px-4 py-2 text-sm font-mono font-bold text-primary-foreground bg-primary hover:bg-primary/90 transition-colors rounded-md shadow-[0_0_10px_rgba(147,51,234,0.3)] hover:shadow-[0_0_15px_rgba(147,51,234,0.5)]"
              >
                DOWNLOAD_RESUME
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-white hover:bg-primary/20 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-primary/20 bg-background"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {links.map((link) => (
                link.external ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 text-base font-mono font-medium text-foreground hover:text-primary hover:bg-primary/10 border-l-2 border-transparent hover:border-primary cursor-pointer"
                  >
                    {`> ${link.label}`}
                  </a>
                ) : (
                  <Link key={link.label} href={link.href}>
                    <span 
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-2 text-base font-mono font-medium text-foreground hover:text-primary hover:bg-primary/10 border-l-2 border-transparent hover:border-primary cursor-pointer"
                    >
                      {`> ${link.label}`}
                    </span>
                  </Link>
                )
              ))}
              <a 
                href="/resume.pdf"
                className="block w-full text-center mt-4 px-4 py-3 text-base font-mono font-bold text-primary-foreground bg-primary hover:bg-primary/90 rounded-md"
              >
                DOWNLOAD_RESUME
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
