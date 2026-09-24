export function CyberPortrait({ src }: { src: string }) {
  return (
    <div className="portrait-frame">
      <div className="portrait-note">United Arab Emirates <span>CYBERSECURITY</span></div>
      <div className="portrait-image-wrap">
        <img src={src} alt="Shayan Ali" className="portrait-image" />
      </div>
      <div className="portrait-caption">
        <span className="portrait-index">01 / ABOUT</span>
        <span>People first. Systems protected.</span>
      </div>
    </div>
  );
}