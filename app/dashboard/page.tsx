"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { HelpIcon } from "@/components/HelpIcon";
import { Cell } from "recharts";


import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

// ----------------------
// Dummy Data
// ----------------------

const funnelData = [
  { stage: "Product Page", value: 10000 },
  { stage: "Trial Started", value: 2800 },
  { stage: "Active Trial (Day 3)", value: 2100 },
  { stage: "Converted to Paid", value: 640 },
  { stage: "Retained (Day 30)", value: 410 },
];

const retentionData = [
  { day: "Day 0", retention: 100 },
  { day: "Day 7", retention: 78 },
  { day: "Day 14", retention: 66 },
  { day: "Day 30", retention: 52 },
  { day: "Day 60", retention: 44 },
  { day: "Day 90", retention: 38 },
];

const pluginEngagementData = [
  { plugin: "LA-2A Leveling Amp", uses: 128 },
  { plugin: "1176 Rev E", uses: 102 },
  { plugin: "Neve 1073 Preamp", uses: 94 },
  { plugin: "API 2500 Bus Comp", uses: 77 },
  { plugin: "Teletronix Classic", uses: 64 },
];

const getEngagementColor = (uses: number) => {
  if (uses >= 100) return "var(--primary)";           // High
  if (uses >= 70) return "var(--accent)";             // Medium
  return "var(--muted-foreground)";                   // Low
};

export default function DashboardPage() {
  const [uplift, setUplift] = useState<number>(5);

  const baseSubscribers = 640;
  const adjustedSubscribers = Math.round(
    baseSubscribers * (1 + uplift / 100)
  );

  return (
    <main className="space-y-10">
      {/* ---------------------- */}
      {/* HEADER */}
      {/* ---------------------- */}
      <div className="space-y-2">
        <h1 className="text-4xl font-semibold tracking-tight text-foreground flex items-center gap-3">
          Universal Audio – Growth Dashboard
          <HelpIcon
            title="What This Dashboard Shows"
            description="A unified view into UA's subscription funnel, retention health, and revenue-impacting growth levers. Each module includes strategic commentary to help teams align around opportunities."
          />
        </h1>

        <p className="text-muted-foreground max-w-2xl">
          A strategic prototype showing how Universal Audio can visualize and
          optimize subscription conversion, churn, and retention forecasting.
        </p>
      </div>

      <Separator className="bg-border" />

      {/* ---------------------- */}
      {/* TOP METRICS */}
      {/* ---------------------- */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <MetricCard
          label="Traffic → Trial Start"
          value="28%"
          helpTitle="Traffic to Trial Conversion"
          helpDesc="Shows how effectively UA engages visitors and motivates them to begin a trial. Improving this early-stage metric lifts the entire subscription funnel."
        />

        <MetricCard
          label="Trial → Paid Conversion"
          value="22%"
          helpTitle="Trial to Paid Conversion"
          helpDesc="Indicates how well new trial users experience value during their trial period. This is a major driver of subscription revenue."
        />

        <MetricCard
          label="Day-30 Retention"
          value="64%"
          helpTitle="Day-30 Retention"
          helpDesc="Retention after the first month is one of the strongest predictors of long-term customer lifetime value and subscription stability."
        />

        <MetricCard
          label="Blended Churn Rate"
          value="3.4% / mo"
          helpTitle="Churn Rate"
          helpDesc="Churn shows how many users cancel each month. Lower churn significantly increases long-term revenue and reduces acquisition pressure."
        />
      </div>

      {/* ---------------------- */}
      {/* TABS */}
      {/* ---------------------- */}
      <Tabs defaultValue="funnel" className="w-full">
        <TabsList className="bg-card border border-border">
          <TabsTrigger value="funnel">Funnel</TabsTrigger>
          <TabsTrigger value="retention">Retention</TabsTrigger>
          <TabsTrigger value="forecast">Forecast</TabsTrigger>
        </TabsList>

        {/* ---------------------- */}
        {/* FUNNEL */}
        {/* ---------------------- */}
        <TabsContent value="funnel" className="mt-6">
          <Card className="bg-card border border-border shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-xl font-medium tracking-tight">
                  Conversion Funnel
                </h2>
                <HelpIcon
                  title="Why the Conversion Funnel Matters"
                  description="This shows how efficiently users move from curiosity (product page) to a successful trial and finally to becoming a retained subscriber. Small improvements at each step compound dramatically across UA's subscriber base."
                />
              </div>

              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={funnelData}>
                  <CartesianGrid stroke="rgba(255,255,255,0.04)" />
                  <XAxis dataKey="stage" stroke="var(--muted-foreground)" />
                  <YAxis stroke="var(--muted-foreground)" />
                  <Tooltip
                    contentStyle={{
                      background: "var(--card)",
                      border: "1px solid var(--border)",
                      color: "var(--foreground)",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="var(--primary)"
                    strokeWidth={3}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ---------------------- */}
        {/* RETENTION */}
        {/* ---------------------- */}
        <TabsContent value="retention" className="mt-6">
          <Card className="bg-card border border-border shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-xl font-medium tracking-tight">
                  Churn & Retention Curve
                </h2>
                <HelpIcon
                  title="Why Retention Matters"
                  description="Retention is the strongest predictor of long-term subscription revenue. Better onboarding, education, and plugin discovery moments help users stay engaged longer."
                />
              </div>

              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={retentionData}>
                  <CartesianGrid stroke="rgba(255,255,255,0.04)" />
                  <XAxis dataKey="day" stroke="var(--muted-foreground)" />
                  <YAxis stroke="var(--muted-foreground)" />
                  <Tooltip
                    contentStyle={{
                      background: "var(--card)",
                      border: "1px solid var(--border)",
                      color: "var(--foreground)",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="retention"
                    stroke="var(--accent)"
                    strokeWidth={3}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ---------------------- */}
        {/* FORECAST */}
        {/* ---------------------- */}
        <TabsContent value="forecast" className="mt-6">
          <Card className="bg-card border border-border shadow-sm">
            <CardContent className="p-6 space-y-6">
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-medium tracking-tight">
                  Conversion Uplift Forecast
                </h2>
                <HelpIcon
                  title="Why Forecasting Helps"
                  description="Forecasting lets teams visualize the downstream revenue impact of improving trial activation or conversion. This helps prioritize experiments and feature investments."
                />
              </div>

              <p className="text-sm text-muted-foreground">
                Model the impact of a conversion improvement on subscriber growth.
              </p>
<div className="flex justify-between items-center">
  <label className="text-sm font-medium text-muted-foreground">
    Conversion uplift (%)
  </label>
  <span className="text-sm text-foreground">{uplift}%</span>
</div>
              <Slider
                value={[uplift]}
                max={30}
                step={1}
                onValueChange={(v) => setUplift(v[0])}
                className="mt-2"
              />

              <div className="pt-4">
                <MetricCard
                  label="Projected Subscribers"
                  value={adjustedSubscribers.toString()}
                  helpTitle="Projected Subscriber Impact"
                  helpDesc="Shows the estimated subscriber count after applying the uplift value. Useful for evaluating the business impact of conversion improvements."
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* ---------------------- */}
      {/* INSIGHTS PANEL */}
      {/* ---------------------- */}
<Card className="bg-card border border-border shadow-sm mt-10">
  <CardContent className="p-6">
    <div className="flex items-center gap-2 mb-3">
      <h2 className="text-xl font-medium tracking-tight">
        Key Growth Opportunities
      </h2>
      <HelpIcon
        title="Why These Opportunities Matter"
        description="These insights highlight the areas where UA can generate the highest impact across activation, education, onboarding, and long-term retention. Improving even one of these levers can meaningfully increase subscription revenue."
      />
    </div>

    <div className="space-y-6 text-muted-foreground leading-relaxed">

      <div>
        <h3 className="font-semibold text-foreground mb-1">
          1. Improve Trial Activation With Creator-Specific Presets
        </h3>
        <p>
          Producers, guitarists, podcasters, and mixers all begin their workflows differently.
          Surfacing presets, plugin chains, and templates tailored to each persona dramatically improves
          early trial engagement and helps users reach an “aha” moment faster.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-foreground mb-1">
          3. Add “Aha-Moment” Educational Touchpoints
        </h3>
        <p>
          Many creators churn when they fail to hear meaningful improvements early in their trial.
          Inline guidance—before/after audio previews, recommended plugin chains, or creator tips—
          increases perceived value and boosts trial-to-paid conversion rates.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-foreground mb-1">
          4. Build a Shared Forecasting Layer for Product + Marketing
        </h3>
        <p>
          Forecasting helps teams understand how improvements in trial activation or conversion affect
          subscriber growth. This model becomes the foundation for prioritizing experiments and aligning
          cross-functional roadmaps.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-foreground mb-1">
          5. Increase Retention With Lifecycle Messaging
        </h3>
        <p>
          Timely, personalized nudges during the trial and early subscription period—highlighting plugin
          recommendations, tutorials can reduce churn by reminding users of the
          value they are getting.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-foreground mb-1">
          6. Reinforce Subscription Value by Highlighting Creative Wins
        </h3>
        <p>
          Showing users what they have achieved using UA tools (Your last mix used 3 pro-grade UA plugins) increases perceived value.
        </p>
      </div>

    </div>
  </CardContent>
</Card>


<Card className="bg-card border border-border shadow-sm">
  <CardContent className="p-6">
    <div className="flex items-center gap-2 mb-4">
      <h2 className="text-xl font-medium tracking-tight">
        Plugin Engagement Depth
      </h2>

      <HelpIcon
        title="Why Plugin Engagement Matters"
        description="The plugins that users try most during their first week strongly predict trial activation, perceived value, and long-term retention. Highlighting these can inform onboarding, preset recommendations, and lifecycle messaging."
      />
    </div>

    <p className="text-muted-foreground text-sm mb-4">
      Most-used plugins during the trial period. Higher engagement typically correlates with stronger activation and higher conversion to paid.
    </p>
<div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
  <div className="flex items-center gap-1">
    <span className="w-3 h-3 rounded-sm" style={{ background: "var(--primary)" }}></span>
    High engagement
  </div>
  <div className="flex items-center gap-1">
    <span className="w-3 h-3 rounded-sm" style={{ background: "var(--accent)" }}></span>
    Medium
  </div>
  <div className="flex items-center gap-1">
    <span className="w-3 h-3 rounded-sm" style={{ background: "var(--muted-foreground)" }}></span>
    Low
  </div>
</div>

    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={pluginEngagementData} layout="vertical">
        <CartesianGrid stroke="rgba(255,255,255,0.05)" />
        <XAxis type="number" stroke="var(--muted-foreground)" />
        <YAxis
          type="category"
          dataKey="plugin"
          width={150}
          stroke="var(--muted-foreground)"
        />
        <Tooltip
          contentStyle={{
            background: "var(--card)",
            border: "1px solid var(--border)",
            color: "var(--foreground)",
          }}
        />
       <Bar
  dataKey="uses"
  radius={[4, 4, 4, 4]}
  fillOpacity={0.95}
>
  {pluginEngagementData.map((entry, index) => (
    <Cell
      key={`cell-${index}`}
      fill={getEngagementColor(entry.uses)}
    />
  ))}
</Bar>

      </BarChart>
    </ResponsiveContainer>
  </CardContent>
</Card>

    </main>
  );
}

// ----------------------
// Metric Card Component
// ----------------------
function MetricCard({
  label,
  value,
  helpTitle,
  helpDesc,
}: {
  label: string;
  value: string;
  helpTitle: string;
  helpDesc: string;
}) {
  return (
    <Card className="bg-card border border-border shadow-sm">
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <p className="text-sm text-muted-foreground">{label}</p>
            <HelpIcon title={helpTitle} description={helpDesc} />
          </div>
        </div>

        <p className="text-2xl font-semibold text-foreground">{value}</p>
      </CardContent>
    </Card>
  );
}
