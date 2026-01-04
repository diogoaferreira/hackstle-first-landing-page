"use client";

import { ContactForm } from "@/components/contact-form";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <section
      className="relative overflow-hidden pb-20 pt-28 sm:pb-28 sm:pt-32"
      data-aos="fade-up"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.12),transparent_25%),radial-gradient(circle_at_50%_70%,rgba(16,185,129,0.12),transparent_35%)]" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center" data-aos="fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">{t.common.contact}</p>
          <h1 className="mt-3 text-3xl font-semibold text-gray-900 sm:text-4xl lg:text-5xl">{t.contact.pageTitle}</h1>
          <p className="mt-4 text-lg text-gray-600">
            {t.contact.pageSubtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]" data-aos="fade-up" data-aos-delay="150">
          <ContactForm />

          <div
            className="flex flex-col justify-between gap-6 rounded-2xl border border-gray-200/70 bg-gray-900 px-8 py-10 text-gray-100 shadow-xl shadow-black/20 sm:px-10"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="grid gap-5">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">{t.contact.expectationsSubtitle}</p>
                <h2 className="mt-2 text-2xl font-semibold">{t.contact.expectationsTitle}</h2>
                <p className="mt-3 text-gray-200">
                  {t.contact.expectationsDescription}
                </p>
              </div>
              <ul className="grid gap-4 text-gray-100">
                <li className="flex gap-3">
                  <span className="mt-[6px] h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <div>
                    <p className="text-sm font-semibold">{t.contact.services.darkwebTriage.title}</p>
                    <p className="text-sm text-gray-200">{t.contact.services.darkwebTriage.description}</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-[6px] h-2.5 w-2.5 rounded-full bg-sky-400" />
                  <div>
                    <p className="text-sm font-semibold">{t.contact.services.attackSurfaceMapping.title}</p>
                    <p className="text-sm text-gray-200">{t.contact.services.attackSurfaceMapping.description}</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-[6px] h-2.5 w-2.5 rounded-full bg-[var(--color-brand-400)]" />
                  <div>
                    <p className="text-sm font-semibold">{t.contact.services.thirdPartyWatch.title}</p>
                    <p className="text-sm text-gray-200">{t.contact.services.thirdPartyWatch.description}</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="rounded-xl bg-gray-800/60 px-5 py-4 text-sm text-gray-200 ring-1 ring-white/5">
              {t.contact.urgentContact.split('hello@hackstle.io').map((part, index, array) => (
                <span key={index}>
                  {part}
                  {index < array.length - 1 && (
                    <a className="font-semibold text-white underline decoration-white/60 underline-offset-4" href="mailto:hello@hackstle.io">
                      hello@hackstle.io
                    </a>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
