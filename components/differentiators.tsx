import { ClipboardList, Filter, Gauge, Target } from "lucide-react";

const differentiators = [
  {
    title: "Tailored intelligence, not templates",
    description:
      "Engagements are calibrated to your brands, attack surface, and industry context so analysts see only what matters to your organization.",
    Icon: Target,
  },
  {
    title: "Signal over noise",
    description:
      "Noise-cutting triage and analyst validation eliminate false positives, keeping darkweb mentions, leaked creds, and CVEs trustworthy and actionable.",
    Icon: Filter,
  },
  {
    title: "Clarity without dashboard sprawl",
    description:
      "We ship insights in streamlined views instead of complex dashboards, so your SOC and executives get to outcomes faster.",
    Icon: Gauge,
  },
  {
    title: "Reporting that lands",
    description:
      "Executive-ready reports summarize impact, urgency, and recommended actions so you can brief stakeholders with confidence.",
    Icon: ClipboardList,
  },
];

export default function Differentiators() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex rounded-full bg-[var(--color-brand-500)]/10 px-3 py-1 text-sm font-medium text-[var(--color-brand-600)]">
              Why Hackstle is different
            </div>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Built for teams that need precision, not another portal
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Hackstle trims noise, tailors coverage to your environment, and turns darkweb intelligence into clear, decisive actions.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="h-full rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm shadow-black/[0.03] backdrop-blur"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-brand-500)]/10 text-[var(--color-brand-500)]">
                    <item.Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                </div>
                <p className="mt-3 text-base text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
