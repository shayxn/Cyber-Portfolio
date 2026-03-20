import { motion } from "framer-motion";

export function GlitchProfile({ src }: { src: string }) {
  return (
    <div className="relative group w-full max-w-md aspect-square mx-auto overflow-hidden border border-primary/20 bg-black cursor-crosshair">
      {/* Base Image */}
      <img 
        src={src} 
        alt="Operator"
        className="w-full h-full object-cover transition-all duration-700 ease-in-out filter grayscale-[0.2] contrast-125 brightness-90
                   group-hover:brightness-[0.1] group-hover:contrast-[2] group-hover:grayscale"
      />

      {/* Cyan Glitch Layer */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-screen pointer-events-none animate-pulse">
        <img 
          src={src} 
          alt=""
          className="w-full h-full object-cover filter brightness-[0.4] contrast-[3] sepia hue-rotate-[180deg] saturate-[3] translate-x-2"
          style={{ clipPath: 'polygon(0 15%, 100% 15%, 100% 25%, 0 25%, 0 50%, 100% 50%, 100% 60%, 0 60%)' }}
        />
      </div>

      {/* Magenta Glitch Layer */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-screen pointer-events-none animate-pulse" style={{ animationDelay: '150ms' }}>
        <img 
          src={src} 
          alt=""
          className="w-full h-full object-cover filter brightness-[0.4] contrast-[3] sepia hue-rotate-[280deg] saturate-[3] -translate-x-2"
          style={{ clipPath: 'polygon(0 70%, 100% 70%, 100% 80%, 0 80%, 0 90%, 100% 90%, 100% 95%, 0 95%)' }}
        />
      </div>

      {/* Pixelated/Dotted Grid Overlay */}
      <div 
        className="absolute inset-0 z-20 pointer-events-none mix-blend-overlay opacity-60 group-hover:opacity-90 transition-opacity duration-500" 
        style={{
          backgroundImage: 'radial-gradient(rgba(100, 200, 255, 0.4) 1px, transparent 1px)',
          backgroundSize: '4px 4px',
          backgroundPosition: '0 0'
        }} 
      />

      {/* Scanline Overlay */}
      <div 
        className="absolute inset-0 z-30 pointer-events-none mix-blend-overlay opacity-30 group-hover:opacity-60 transition-opacity duration-500"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,0,0.2) 2px, rgba(0,255,0,0.2) 4px)'
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 z-40 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] transition-all duration-700 group-hover:bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.95)_100%)]" />
    
      {/* Glitch Overlay Text */}
      <div className="absolute bottom-8 left-0 right-0 z-50 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500 uppercase tracking-widest" style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.8)' }}>
          MASTER<br/>CYBERSECURITY
        </h2>
      </div>
    </div>
  );
}