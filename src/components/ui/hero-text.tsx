// components/HeroText.tsx
import React from "react";

export default function HeroText(
  { text }: { text: string }
) {
  return (
    <section className="relative w-full flex items-center justify-center min-h-[220px] lg:min-h-[20px]">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
      >
        <div className="absolute inset-0" />
        {/* subtle radial highlight in center */}
        <div className="absolute inset-0" />
      </div>

      {/* The text — background image clipped to the text */}
      <h1
        className="relative text-[3.7rem] md:text-[6rem] leading-[0.82] font-extrabold tracking-[-0.1em]
                   bg-cover bg-center bg-no-repeat bg-clip-text text-transparent drop-shadow-2xl"
        style={{
          backgroundImage: "url('/images/main/marble.jpg')",
          // ensure webkit prefix for broader support:
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
        }}
      >
        {text}
      </h1>
    </section>
  );
}
