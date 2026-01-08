"use client";

import { useSearchParams } from "next/navigation";

const pluginMap: Record<string, string[]> = {
  "Preamps, EQs & Channel Strips": [
    "Neve 1073",
    "API Vision Channel Strip",
    "Manley VoxBox",
  ],
  Compressors: [
    "1176 Classic Limiter",
    "LA-2A Leveler Collection",
    "Fairchild 670",
  ],
  "Tape & Saturation": [
    "Studer A800",
    "Ampex ATR-102",
    "Oxide Tape",
  ],
  "Reverbs, Delays & Modulation": [
    "Lexicon 224",
    "Galaxy Tape Echo",
    "Pure Plate Reverb",
  ],
  Instruments: ["Ravel Grand Piano", "Opal Morphing Synth"],
  Guitar: ["Marshall Plexi", "Fender ’55 Tweed", "ENGL Savage 120"],
};

export default function ResultsClient() {
  const params = useSearchParams();
  const category = params.get("category") || "";
  const plugins = pluginMap[category] || [];

  return (
    <div className="min-h-screen bg-[#faf7f2] px-8 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-medium mb-2 text-black/70">
          {category}
        </h1>

        <p className="text-sm text-black/60 mb-8">
          Included with your UAD Spark subscription
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {plugins.map((plugin) => (
            <div
              key={plugin}
              className="bg-white rounded-xl border border-black/10
                         p-5 flex items-center justify-between"
            >
              <span className="text-black/70">{plugin}</span>

              <button
                className="text-sm px-4 py-1.5 rounded-full
                           border border-black/20 text-black/70
                           hover:bg-black hover:text-white transition"
              >
                Preview
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
