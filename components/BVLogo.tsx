import Image from "next/image";

interface BVLogoProps {
  className?: string;
  /** compact = icon + stacked text (navbar); full = icon + side-by-side text (footer) */
  variant?: "compact" | "full";
}

export default function BVLogo({ className = "", variant = "compact" }: BVLogoProps) {
  /*
   * Icon SVG viewBox is 0 0 120 132.
   * We render with explicit width/height so the full 132-unit tall shield
   * is never clipped. Add 2px bottom padding inside the container to
   * guarantee the bottom edge of the shield doesn't touch the clip boundary.
   */
  const iconW = variant === "compact" ? 34 : 42;
  const iconH = Math.round(iconW * (132 / 120)); // keep 120:132 aspect ratio

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Shield mark from official logo package */}
      <div className="shrink-0" style={{ width: iconW, height: iconH + 2, paddingBottom: 2 }}>
        <Image
          src="/bvcg-icon.svg"
          alt="BV Cyber Guardian shield"
          width={iconW}
          height={iconH}
          priority
          style={{ display: "block", width: iconW, height: iconH }}
        />
      </div>

      {/* Wordmark */}
      {variant === "compact" ? (
        <div className="leading-none">
          <div className="text-white font-bold text-base tracking-wide">BV CYBER</div>
          <div className="text-[#22D3EE] font-bold text-base tracking-widest">GUARDIAN</div>
        </div>
      ) : (
        <div className="leading-none">
          <div className="text-white font-bold text-lg tracking-wide">BV CYBER</div>
          <div className="text-[#22D3EE] font-bold text-lg tracking-widest">GUARDIAN</div>
        </div>
      )}
    </div>
  );
}
