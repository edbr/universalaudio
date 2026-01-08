"use client";

import { useRouter } from "next/navigation";

const filters = [
  "Preamps, EQs & Channel Strips",
  "Compressors",
  "Tape & Saturation",
  "Reverbs, Delays & Modulation",
  "Instruments",
  "Guitar",
];

export default function SparkOnboardingChoosePath() {
  const router = useRouter();

  function handleSelect(filter: string) {
    const slug = encodeURIComponent(filter);
    router.push(`/onboarding/results?category=${slug}`);
  }

  return (
    <div className="min-h-screen bg-[#faf7f2] px-8 flex flex-col justify-center">
      <h2 className="text-xl font-medium mb-6 text-black/70 text-center">
        What do you want to work on?
      </h2>

      <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => handleSelect(filter)}
            className="
              px-5 py-2 rounded-full text-sm text-black/70
              border border-black/20 bg-white
              hover:border-black/40 transition
            "
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}
