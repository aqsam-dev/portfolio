const labels = [
  { text: "UI", position: "left-[18%] top-[32%]" },
  { text: "APIs", position: "left-[45%] top-[17%]" },
  { text: "DATA", position: "left-[29%] top-[86%]" },

  { text: "CODE", position: "left-[10%] top-[54%]" },
  { text: "DEPLOY", position: "left-[19%] top-[54%]" },
  { text: "MONITOR", position: "left-[30%] top-[54%]" },

  { text: "RETRIEVE", position: "left-[1%] top-[77%]" },
  { text: "REASON", position: "left-[37%] top-[67%]" },
  { text: "ACT", position: "left-[46%] top-[77%]" },
];

function DeveloperIllustration() {
  return (
    <div className="relative mx-auto aspect-[2/3] w-full max-w-2xl">
      <img
        src="/developerillustration.png"
        alt="Developer working across UI, APIs, data, deployment, monitoring, and AI workflows"
        className="absolute inset-0 h-full w-full object-contain"
      />

      <div aria-hidden="true">
        {labels.map(({ text, position }) => (
          <span
            key={text}
            className={`absolute ${position} -translate-x-1/2 rounded-sm bg-[#F3F5F6]/85 px-0.5 py-0.15 font-mono text-[clamp(0.42rem,1.1vw,0.7rem)] font-extrabold tracking-[0.08em] text-[#0F9B8E]`}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}

export default DeveloperIllustration;