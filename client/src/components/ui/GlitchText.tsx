import { motion } from "framer-motion";

interface GlitchTextProps {
  text: string;
  className?: string;
}

export function GlitchText({ text, className = "" }: GlitchTextProps) {
  return (
    <div className={`relative inline-block ${className} group`}>
      <span className="relative z-10">{text}</span>
      <span 
        className="absolute top-0 left-0 -z-10 w-full h-full text-primary opacity-0 group-hover:opacity-70 group-hover:animate-glitch translate-x-[2px]"
        aria-hidden="true"
      >
        {text}
      </span>
      <span 
        className="absolute top-0 left-0 -z-10 w-full h-full text-accent opacity-0 group-hover:opacity-70 group-hover:animate-glitch translate-x-[-2px]"
        style={{ animationDelay: "0.1s" }}
        aria-hidden="true"
      >
        {text}
      </span>
    </div>
  );
}
