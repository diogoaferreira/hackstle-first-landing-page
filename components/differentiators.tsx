"use client";

import { ClipboardList, Filter, Gauge, Target } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Differentiators() {
  const { t } = useLanguage();

  const differentiators = [
    {
      title: t.differentiators.items.tailoredIntelligence.title,
      description: t.differentiators.items.tailoredIntelligence.description,
      Icon: Target,
    },
    {
      title: t.differentiators.items.signalOverNoise.title,
      description: t.differentiators.items.signalOverNoise.description,
      Icon: Filter,
    },
    {
      title: t.differentiators.items.clarityWithoutSprawl.title,
      description: t.differentiators.items.clarityWithoutSprawl.description,
      Icon: Gauge,
    },
    {
      title: t.differentiators.items.reportingThatLands.title,
      description: t.differentiators.items.reportingThatLands.description,
      Icon: ClipboardList,
    },
  ];

  return (
    <section id="whyHackstle">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex rounded-full bg-[var(--color-brand-500)]/10 px-3 py-1 text-sm font-medium text-[var(--color-brand-600)]">
              {t.differentiators.badge}
            </div>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 md:text-4xl">
              {t.differentiators.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {t.differentiators.subtitle}
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
