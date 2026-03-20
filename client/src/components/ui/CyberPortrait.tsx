import { motion } from "framer-motion";

export function CyberPortrait({ src }: { src: string }) {
  return (
    <div className="relative w-full max-w-sm mx-auto aspect-[4/5] group">
      {/* Outer Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/40 to-blue-600/40 rounded-xl blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
      
      {/* Main Container */}
      <div 
        className="relative w-full h-full overflow-hidden border border-primary/30 bg-background shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-all duration-500"
        style={{ clipPath: "polygon(15% 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0 15%)" }}
      >
        {/* Base Image */}
        <img 
          src={src} 
          alt="Portrait" 
          className="absolute inset-0 w-full h-full object-cover contrast-[1.1] brightness-[0.85] sepia-[.1]"
        />

        {/* Gradient Overlay for Cinematic Lighting */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/60 via-transparent to-blue-900/60 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

        {/* Digital Distortion Waves (CSS anim) - Red Glitch */}
        <motion.div 
          animate={{ 
            clipPath: [
              'polygon(0 10%, 100% 10%, 100% 12%, 0 12%)',
              'polygon(0 35%, 100% 35%, 100% 36%, 0 36%)',
              'polygon(0 75%, 100% 75%, 100% 78%, 0 78%)',
              'polygon(0 15%, 100% 15%, 100% 17%, 0 17%)',
            ],
            x: [-4, 5, -3, 0]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear", times: [0, 0.3, 0.7, 1] }}
          className="absolute inset-0 opacity-70 mix-blend-screen pointer-events-none"
        >
          <img src={src} alt="" className="w-full h-full object-cover filter contrast-150 saturate-200" style={{ filter: 'drop-shadow(4px 0 0 red)', transform: 'translateX(4px)' }} />
        </motion.div>

        {/* Digital Distortion Waves - Blue Glitch */}
        <motion.div 
          animate={{ 
            clipPath: [
              'polygon(0 50%, 100% 50%, 100% 53%, 0 53%)',
              'polygon(0 80%, 100% 80%, 100% 82%, 0 82%)',
              'polygon(0 25%, 100% 25%, 100% 27%, 0 27%)',
              'polygon(0 60%, 100% 60%, 100% 62%, 0 62%)',
            ],
            x: [4, -3, 5, 0]
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear", times: [0, 0.4, 0.8, 1], delay: 0.2 }}
          className="absolute inset-0 opacity-70 mix-blend-screen pointer-events-none"
        >
          <img src={src} alt="" className="w-full h-full object-cover filter contrast-150 saturate-200" style={{ filter: 'drop-shadow(-4px 0 0 blue)', transform: 'translateX(-4px)' }} />
        </motion.div>

        {/* Scanlines */}
        <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay"
             style={{ 
               backgroundImage: `linear-gradient(transparent 50%, rgba(0, 0, 0, 1) 50%)`,
               backgroundSize: '100% 4px'
             }} 
        />

        {/* LED Matrix */}
        <div className="absolute inset-0 pointer-events-none opacity-30 mix-blend-overlay"
             style={{ 
               backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.9) 1px, transparent 1px)`,
               backgroundSize: '4px 4px'
             }} 
        />

        {/* Noise Texture */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.25] mix-blend-screen" 
             style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} 
        />

        {/* Neon Inner Shadow & Borders */}
        <div className="absolute inset-0 pointer-events-none border-[1px] border-white/5" />
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_50px_rgba(147,51,234,0.4),inset_0_0_30px_rgba(59,130,246,0.4)]" />
        
        {/* HUD overlay text */}
        <div className="absolute bottom-4 left-4 font-mono text-[10px] text-primary/80 leading-tight">
          <p>ID: SYED_SHAYAN</p>
          <p>STATUS: OPTIMAL</p>
          <p>SYS_VER: 9.2.4</p>
        </div>
      </div>
      
      {/* Decorative Corner accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary z-10" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary z-10" />
      <div className="absolute top-0 right-4 w-12 h-1 bg-primary/40" />
      <div className="absolute bottom-0 left-4 w-12 h-1 bg-primary/40" />
    </div>
  );
}