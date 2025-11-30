import { BadgeCheck } from "lucide-react";

const certifications = [
  {
    code: "OSCP",
    name: "Offensive Security Certified Professional",
    gradient: "from-[#8C52FF] to-[#5B21B6]",
    tone: "text-white",
  },
  {
    code: "OSED",
    name: "Offensive Security Exploit Developer",
    gradient: "from-[#111827] to-[#1F2937]",
    tone: "text-indigo-50",
  },
  {
    code: "CTIA",
    name: "Certified Threat Intelligence Analyst",
    gradient: "from-[#0EA5E9] to-[#2563EB]",
    tone: "text-white",
  },
  {
    code: "OSTH",
    name: "Offensive Security Web Expert (OSTH)",
    gradient: "from-[#F59E0B] to-[#EA580C]",
    tone: "text-white",
  },
  {
    code: "RTO",
    name: "Red Team Operator",
    gradient: "from-[#10B981] to-[#059669]",
    tone: "text-white",
  },
];

export default function Certifications() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="grid items-start gap-10 md:grid-cols-[1.1fr_1fr]">
            <div className="space-y-4" data-aos="fade-up">
              <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand-500)]/10 px-3 py-1 text-sm font-medium text-[var(--color-brand-600)]">
                <BadgeCheck className="h-4 w-4" strokeWidth={1.75} />
                Deeply certified team
              </div>
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                Elite practitioners behind every alert
              </h2>
              <p className="text-lg text-gray-600">
                Hackstle analysts pair darkweb tradecraft with enterprise reporting discipline. From exploit development to threat intelligence frameworks, the team is certified to tackle complex incidents with confidence.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white/90 p-6 shadow-sm shadow-black/[0.03] backdrop-blur">
              <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-gray-800" data-aos="fade-up" data-aos-delay="50">
                <BadgeCheck className="h-4 w-4 text-[var(--color-brand-500)]" strokeWidth={1.75} />
                Credentials we bring into every investigation
              </div>
              <div className="grid gap-3 sm:grid-cols-2" data-aos="fade-up" data-aos-delay="100">
                {certifications.map((cert, index) => (
                  <div
                    key={cert.code}
                    className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white/80 p-4 shadow-inner shadow-black/[0.02]"
                    data-aos="fade-up"
                    data-aos-delay={140 + index * 50}
                  >
                    <div
                      className={`relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br ${cert.gradient} ${cert.tone} text-sm font-bold tracking-wide shadow-lg shadow-black/10`}
                      aria-hidden="true"
                    >
                      <span>{cert.code}</span>
                      <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/30" />
                    </div>
                    <div>
                      <p className="text-base font-semibold text-gray-900">{cert.code}</p>
                      <p className="text-sm text-gray-600">{cert.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
