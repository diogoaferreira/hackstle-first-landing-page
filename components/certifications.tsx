"use client";

import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const certifications = [
  {
    code: "OSCP",
    name: "Offensive Security Certified Professional",
    gradient: "from-[#8C52FF] to-[#5B21B6]",
    tone: "text-white",
    logo: "/images/oscp.png",
  },
  {
    code: "OSEP",
    name: "Offensive Security Experienced Penetration Tester",
    gradient: "from-[#111827] to-[#1F2937]",
    tone: "text-indigo-50",
    logo: "/images/osep.svg",
  },
  {
    code: "CTIA",
    name: "Certified Threat Intelligence Analyst",
    gradient: "from-[#0EA5E9] to-[#2563EB]",
    tone: "text-white",
    logo: "/images/ctia.png",
  },
  {
    code: "OSTH",
    name: "Offensive Security Threat Hunter",
    gradient: "from-[#F59E0B] to-[#EA580C]",
    tone: "text-white",
    logo: "/images/osth.png",
  },
  {
    code: "RTO",
    name: "Red Team Operator",
    gradient: "from-[#10B981] to-[#059669]",
    tone: "text-white",
    logo: "/images/rto.png",
  },
];

export default function Certifications() {
  const { t } = useLanguage();

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="grid items-start gap-10 md:grid-cols-[1.1fr_1fr]">
            <div className="space-y-4" data-aos="fade-up">
              <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand-500)]/10 px-3 py-1 text-sm font-medium text-[var(--color-brand-600)]">
                <BadgeCheck className="h-4 w-4" strokeWidth={1.75} />
                {t.certifications.badge}
              </div>
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                {t.certifications.title}
              </h2>
              <p className="text-lg text-gray-600">
                {t.certifications.subtitle}
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white/90 p-6 shadow-sm shadow-black/[0.03] backdrop-blur">
              <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-gray-800" data-aos="fade-up" data-aos-delay="50">
                <BadgeCheck className="h-4 w-4 text-[var(--color-brand-500)]" strokeWidth={1.75} />
                {t.certifications.certificatesTitle}
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
                      className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl bg-gray-50 shadow-lg shadow-black/10"
                      aria-hidden="true"
                    >
                      <Image
                        src={cert.logo}
                        alt={`${cert.code} certification logo`}
                        width={56}
                        height={56}
                        className="h-12 w-12 object-contain"
                        priority={index === 0}
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                      <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/60" />
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
