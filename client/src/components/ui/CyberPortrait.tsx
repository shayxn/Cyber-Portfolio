export function CyberPortrait({ src }: { src: string }) {
  return (
    <div className="relative w-full max-w-sm mx-auto aspect-[4/5] overflow-hidden rounded-lg border border-primary/20 bg-background">
      <img
        src={src}
        alt="Portrait"
        className="w-full h-full object-cover"
      />
    </div>
  );
}