"use client";

import { useRouter } from "next/navigation";

export default function SparkOnboardingWelcome() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#faf7f2] px-8 text-center">
      <h1 className="text-2xl font-medium mb-4 text-black/70">
        You’re set up with UAD Spark
      </h1>

      <p className="text-sm text-black/70 mb-8 max-w-sm">
        Access a growing collection of world-class plug-ins and instruments.
        Let’s find what fits your sound.
      </p>

      <button
        onClick={() => router.push("/onboarding/choose-path")}
        className="
          px-6 py-3 rounded-full text-sm
          bg-black text-white
          hover:bg-black/90 transition
        "
      >
        Explore plug-ins
      </button>
    </div>
  );
}
