import svgPaths from "./svg-pg871ghts1";

function Group() {
  return (
    <div className="-translate-x-1/2 absolute h-[54.998px] left-[calc(50%-317px)] top-0 w-[62px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 54.9983">
        <g id="Group 184">
          <path d={svgPaths.p879fc00} fill="var(--fill-0, white)" id="Subtract" />
          <path d={svgPaths.p2fd21580} fill="var(--fill-0, #00274C)" id="Subtract_2" />
          <path d={svgPaths.p3d0f9b00} fill="var(--fill-0, white)" id="favorite" />
        </g>
      </svg>
    </div>
  );
}

export default function WhyChoose() {
  return (
    <div className="relative size-full" data-name="why-choose">
      <p className="absolute font-['Google_Sans_Flex:Bold',sans-serif] font-bold leading-[0] left-[calc(50%-348px)] not-italic text-[#00274c] text-[83px] top-[64px] tracking-[-0.83px] w-[505px]" style={{ fontVariationSettings: "'wdth' 100, 'GRAD' 0, 'ROND' 0" }}>
        <span className="leading-[1.02]">{`Why Choose `}</span>
        <span className="leading-[1.02] text-white">PWP Health</span>
      </p>
      <p className="absolute font-['Google_Sans_Flex:Bold',sans-serif] font-bold leading-[0.95] left-[calc(50%+200px)] not-italic text-[#00274c] text-[25px] top-[127px] tracking-[-0.25px] w-[148px]" style={{ fontVariationSettings: "'wdth' 100, 'GRAD' 0, 'ROND' 0" }}>
        Care built on trust, clarity, and community.
      </p>
      <Group />
    </div>
  );
}
