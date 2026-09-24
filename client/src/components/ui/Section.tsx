import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  title?: string;
  id?: string;
}

export function Section({ children, className, title, id }: SectionProps) {
  return (
    <section id={id} className={cn("py-20 md:py-28 relative", className)}>
      <div className="site-container">
        {title && (
          <div className="mb-12 md:mb-16">
            <p className="section-kicker mb-4">Shayan Ali · Field notes</p>
            <h2 className="section-heading">{title}</h2>
            <div className="mt-7 h-px w-full bg-[var(--line)]" />
          </div>
        )}
        {children}
      </div>
    </section>
  );
}