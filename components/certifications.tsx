import { BadgeCheck } from "lucide-react";

const certifications = ["OSCP", "OSED", "CTIA", "OSTH", "RTO"];

export default function Certifications() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="grid items-center gap-8 md:grid-cols-[1.2fr_1fr]">
            <div className="space-y-4">
              <div className="inline-flex rounded-full bg-[var(--color-brand-500)]/10 px-3 py-1 text-sm font-medium text-[var(--color-brand-600)]">
                Deeply certified team
              </div>
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                Elite practitioners behind every alert
              </h2>
              <p className="text-lg text-gray-600">
                Hackstle analysts pair darkweb tradecraft with enterprise reporting discipline. From exploit development to threat intelligence frameworks, the team is certified to tackle complex incidents with confidence.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm shadow-black/[0.03] backdrop-blur">
              <div className="flex items-start gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-brand-500)]/10 text-[var(--color-brand-500)]">
                  <BadgeCheck className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Certifications that matter</h3>
                  <p className="mt-2 text-base text-gray-600">
                    Offensive and defensive credentials keep our playbooks current and pragmatic.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {certifications.map((cert) => (
                      <span
                        key={cert}
                        className="rounded-full bg-gray-50 px-3 py-1 text-sm font-medium text-gray-800 shadow-inner shadow-black/5"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
