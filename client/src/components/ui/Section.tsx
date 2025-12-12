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
    <section id={id} className={cn("py-16 md:py-24 relative", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="mb-12 flex items-center gap-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary relative inline-block">
              <span className="text-accent mr-2">#</span>
              {title}
              <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary"></div>
            </h2>
            <div className="h-[1px] bg-primary/20 flex-grow mt-2"></div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
