"use client";

import ServiceIcon from "@/components/ui/service-icon";
import { useLanguage } from "@/contexts/LanguageContext";

export default function WhatWeDo() {
  const { t } = useLanguage();
  
  return (
    <section id="what-we-do" className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-12 md:pb-20 md:pt-20">
          <div className="pb-8 text-center md:pb-12">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl tracking-tight">{t.whatWeOffer.title}</h2>
            <p className="mx-auto max-w-4xl text-lg text-gray-700">
              {t.whatWeOffer.subtitle}
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <section className="group rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg text-[var(--color-brand-700)]">
                <ServiceIcon name="cti" className="h-7 w-7" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{t.whatWeOffer.services.cti.title}</h3>
              <ul className="list-disc space-y-1 pl-6 text-gray-700">
                {t.whatWeOffer.services.cti.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="group rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg text-[var(--color-brand-700)]">
                <ServiceIcon name="asm" className="h-7 w-7" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{t.whatWeOffer.services.asm.title}</h3>
              <ul className="list-disc space-y-1 pl-6 text-gray-700">
                {t.whatWeOffer.services.asm.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="group rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg text-[var(--color-brand-700)]">
                <ServiceIcon name="assessments" className="h-7 w-7" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{t.whatWeOffer.services.assessments.title}</h3>
              <ul className="list-disc space-y-1 pl-6 text-gray-700">
                {t.whatWeOffer.services.assessments.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="group rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg text-[var(--color-brand-700)]">
                <ServiceIcon name="audit" className="h-7 w-7" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{t.whatWeOffer.services.audit.title}</h3>
              <ul className="list-disc space-y-1 pl-6 text-gray-700">
                {t.whatWeOffer.services.audit.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="group rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg text-[var(--color-brand-700)]">
                <ServiceIcon name="redteam" className="h-7 w-7" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{t.whatWeOffer.services.redteam.title}</h3>
              <ul className="list-disc space-y-1 pl-6 text-gray-700">
                {t.whatWeOffer.services.redteam.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="group rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg text-[var(--color-brand-700)]">
                <ServiceIcon name="ciso" className="h-7 w-7" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{t.whatWeOffer.services.ciso.title}</h3>
              <ul className="list-disc space-y-1 pl-6 text-gray-700">
                {t.whatWeOffer.services.ciso.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
