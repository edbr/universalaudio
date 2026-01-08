import { Suspense } from "react";
import ResultsClient from "./results-client";

export default function ResultsPage() {
  return (
    <Suspense fallback={<ResultsSkeleton />}>
      <ResultsClient />
    </Suspense>
  );
}

/* Optional lightweight loading state */
function ResultsSkeleton() {
  return (
    <div className="min-h-screen bg-[#faf7f2] px-8 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="h-6 w-64 bg-black/10 rounded mb-4" />
        <div className="h-4 w-48 bg-black/5 rounded mb-8" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-20 bg-white border border-black/10 rounded-xl"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
