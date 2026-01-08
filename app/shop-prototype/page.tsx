// app/shop-prototype/page.tsx

export default function ShopPrototype() {
  return (
    <main className="min-h-screen bg-[#faf7f2] text-black">
      <PromoRail />
      <ProductGrid />
      <RecommendedRow />
    </main>
  );
}

/* =========================================================
   PROMO RAIL
========================================================= */

function PromoRail() {
  const promos = [
    { label: "NEW", text: "Paradise Guitar Studio" },
    { label: "50% OFF", text: "UAD Spark is 50% Off Now" },
    { label: "BOGO", text: "UAD Select Bundles" },
    { label: "$10 EACH", text: "UAD Mix Tape Pro Bundle" },
  ];

  return (
    <section className="px-8 py-6 border-b border-black/5">
            <div className="mb-6">
        <h2 className="text-xl font-medium">Best deals</h2>
        <p className="text-sm text-black/60 mt-1">
          Always changing, just like your sound.
        </p>
      </div>
      <div className="flex gap-4 overflow-x-auto">
        {promos.map((promo, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-4 py-3 rounded-xl
                       bg-white border border-black/10 shrink-0"
          >
            <span className="text-xs font-semibold uppercase text-emerald-700">
              {promo.label}
            </span>
            <span className="text-sm text-black/80">{promo.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   PRODUCT GRID
========================================================= */

const products = [
  {
    title: "Holiday Freebie",
    price: "$299",
    badge: "FREE",
    cta: "Choose Plug-Ins",
    bg: "#9fc9bd",
  },
  {
    title: "Paradise Guitar Studio",
    price: "$149",
    badge: "Sale",
    cta: "Add to Cart",
    bg: "#5f7f4f",
  },

  // SUBSCRIPTION-AWARE CARD
  {
    title: "UAD Spark",
    price: "$19.99 / mo",
    badge: "Subscription",
    cta: "Start Free Trial",
    bg: "#1f2933",
    subscription: true,
  },

  {
    title: "UAD Mix Tape Pro Bundle",
    price: "$99",
    badge: "Sale",
    cta: "Choose Plug-Ins",
    bg: "#4aa3b3",
  },
];

function ProductGrid() {
  return (
    <section className="px-8 py-10">
            <div className="mb-6">
        <h2 className="text-xl font-medium">Latest Plugins </h2>
        <p className="text-sm text-black/60 mt-1">
          High community engagement and user ratings
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, i) => (
          <ProductCard key={i} {...product} />
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   PRODUCT CARD
========================================================= */

function ProductCard({
  title,
  price,
  badge,
  cta,
  bg,
  subscription = false,
}: {
  title: string;
  price: string;
  badge: string;
  cta: string;
  bg: string;
  subscription?: boolean;
}) {
  return (
    <div
      className={`bg-white rounded-2xl border overflow-hidden
                  transition-transform hover:-translate-y-1
                  ${
                    subscription
                      ? "border-emerald-500/40 shadow-[0_0_0_1px_rgba(16,185,129,0.3)]"
                      : "border-black/10"
                  }`}
    >
      {/* Visual */}
      <div
        className="h-48 flex items-center justify-center relative"
        style={{ backgroundColor: bg }}
      >
        <span
          className={`absolute top-3 left-3 text-xs px-2 py-1 rounded-full
                      ${
                        subscription
                          ? "bg-emerald-500 text-white"
                          : "bg-white/90 text-black/80"
                      }`}
        >
          {badge}
        </span>

        <span className="text-white/80 text-sm tracking-wide">
          Product Visual
        </span>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <h3 className="text-lg font-medium leading-tight">{title}</h3>

        {subscription && (
          <p className="text-sm text-black/60">
            Access 60+ legendary plug-ins. Cancel anytime.
          </p>
        )}

        <div className="flex items-center justify-between">
          <span className="text-base font-semibold">{price}</span>

          <button
            className={`px-4 py-2 rounded-full text-sm transition
                        ${
                          subscription
                            ? "bg-emerald-500 text-white hover:bg-emerald-600"
                            : "border border-black/20 hover:bg-black hover:text-white"
                        }`}
          >
            {cta}
          </button>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   RECOMMENDED FOR YOUR SOUND
========================================================= */

function RecommendedRow() {
  const recommendations = [
    {
      title: "Studer A800",
      note: "Pairs well with your recent vocal mixes",
    },
    {
      title: "Lexicon 224",
      note: "Adds spatial depth similar to your last session",
    },
    {
      title: "Oxide Tape",
      note: "Light saturation for modern workflows",
    },
  ];

  return (
    <section className="px-8 py-12 border-t border-black/5">
      <div className="mb-6">
        <h2 className="text-xl font-medium">Recommended for your sound</h2>
        <p className="text-sm text-black/60 mt-1">
          Based on your recent sessions and plug-in usage.
        </p>
      </div>

      <div className="flex gap-6 overflow-x-auto">
        {recommendations.map((rec, i) => (
          <div
            key={i}
            className="min-w-[260px] bg-white rounded-xl border border-black/10
                       p-5 space-y-2 shrink-0"
          >
            <h3 className="font-medium">{rec.title}</h3>
            <p className="text-sm text-black/60">{rec.note}</p>

            <button
              className="mt-3 text-sm underline underline-offset-4
                         text-black/80 hover:text-black"
            >
              View details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
