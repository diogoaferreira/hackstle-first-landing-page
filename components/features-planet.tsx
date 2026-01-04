"use client";

import Image from "next/image";
import {
  Bug,
  Cpu,
  Eye,
  FileWarning,
  KeyRound,
  Network,
  PenTool,
  Radar,
  ShieldAlert,
  Swords,
  Workflow,
} from "lucide-react";
import PlanetImg from "@/public/images/planet.png";
import PlanetOverlayImg from "@/public/images/planet-overlay.svg";
import { useLanguage } from "@/contexts/LanguageContext";

export default function FeaturesPlanet() {
  const { t } = useLanguage();

  const planetSignals = [
    {
      id: "exposed-port",
      icon: ShieldAlert,
      title: t.features.planetSignals.criticalPortExposed.title,
      detail: t.features.planetSignals.criticalPortExposed.detail,
      status: t.features.planetSignals.criticalPortExposed.status,
      statusClass: "bg-rose-500/20 text-rose-100 border border-rose-300/25",
      accent: "from-rose-500/50 via-orange-500/30 to-transparent",
      position: "-left-32 top-12 sm:-left-32 sm:top-12 -left-16 top-8",
      animation: "animate-[float_5s_ease-in-out_infinite]",
      metric: t.features.planetSignals.criticalPortExposed.metric,
      pulseColor: "bg-rose-400",
      widthClass: "min-w-[180px] sm:min-w-[220px]",
    },
    {
      id: "cve",
      icon: FileWarning,
      title: t.features.planetSignals.exploitChatterSpiking.title,
      detail: t.features.planetSignals.exploitChatterSpiking.detail,
      status: t.features.planetSignals.exploitChatterSpiking.status,
      statusClass: "bg-amber-400/20 text-amber-100 border border-amber-200/30",
      accent: "from-amber-400/40 via-yellow-300/40 to-transparent",
      position: "left-52 top-6 sm:left-52 sm:top-6 left-20 top-4",
      animation: "animate-[float_5s_ease-in-out_infinite_1s]",
      metric: t.features.planetSignals.exploitChatterSpiking.metric,
      pulseColor: "bg-amber-300",
      widthClass: "min-w-[200px] sm:min-w-[280px] sm:w-[300px]",
    },
    {
      id: "credentials",
      icon: KeyRound,
      title: t.features.planetSignals.freshCredentialDump.title,
      detail: t.features.planetSignals.freshCredentialDump.detail,
      status: t.features.planetSignals.freshCredentialDump.status,
      statusClass: "bg-sky-500/20 text-sky-100 border border-sky-300/30",
      accent: "from-sky-500/40 via-indigo-500/30 to-transparent",
      position: "-left-24 bottom-24 sm:-left-24 sm:bottom-24 -left-12 bottom-16",
      animation: "animate-[float_5s_ease-in-out_infinite_2s]",
      metric: t.features.planetSignals.freshCredentialDump.metric,
      pulseColor: "bg-sky-300",
      widthClass: "min-w-[180px] sm:min-w-[230px]",
    },
    {
      id: "shadow-service",
      icon: Cpu,
      title: t.features.planetSignals.shadowServiceFound.title,
      detail: t.features.planetSignals.shadowServiceFound.detail,
      status: t.features.planetSignals.shadowServiceFound.status,
      statusClass: "bg-emerald-500/15 text-emerald-100 border border-emerald-300/25",
      accent: "from-emerald-500/40 via-teal-400/30 to-transparent",
      position: "bottom-32 left-64 sm:bottom-32 sm:left-64 bottom-20 left-24",
      animation: "animate-[float_5s_ease-in-out_infinite_3s]",
      metric: t.features.planetSignals.shadowServiceFound.metric,
      pulseColor: "bg-emerald-300",
      widthClass: "min-w-[200px] sm:min-w-[280px] sm:w-[300px]",
    },
  ];

  return (
    <section id="services" className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-25">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-gray-200 md:text-4xl">
              {t.features.title}
            </h2>
          </div>
          {/* Planet */}
          <div className="pb-16 md:pb-20" data-aos="zoom-y-out">
            <div className="text-center">
              <div className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-linear-to-b before:from-[#2f0f6e]/60 before:to-[var(--color-brand-500)]/35 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,var(--color-brand-500),transparent)]">
                <Image
                  className="rounded-full bg-gray-900 w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]"
                  src={PlanetImg}
                  width={400}
                  height={400}
                  alt="Planet"
                />
                <div className="pointer-events-none hidden sm:block" aria-hidden="true">
                  <Image
                    className="absolute -right-64 -top-20 z-10 max-w-none"
                    src={PlanetOverlayImg}
                    width={789}
                    height={755}
                    alt="Planet decoration"
                  />
                  <div>
                    {planetSignals.map((signal) => {
                      const Icon = signal.icon;
                      return (
                        <div
                          key={signal.id}
                          className={`absolute z-10 opacity-90 transition-opacity duration-500 ${signal.position} ${signal.animation}`}
                        >
                          <div
                            className={`group flex items-start gap-2 sm:gap-3 rounded-xl sm:rounded-2xl border border-white/10 bg-gray-950/80 px-3 py-2 sm:px-4 sm:py-3 text-left shadow-[0_18px_45px_rgba(8,7,19,0.65)] ring-1 ring-white/5 backdrop-blur-xl ${signal.widthClass}`}
                          >
                            <div
                              className={`relative flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-gradient-to-br ${signal.accent} text-white shadow-[0_8px_20px_rgba(4,3,7,0.65)]`}
                            >
                              <span className="absolute inset-0 -z-10 rounded-full bg-white/40 opacity-40 blur-lg" />
                              <Icon className="h-3 w-3 sm:h-4 sm:w-4" strokeWidth={1.75} />
                            </div>
                            <div className="leading-tight">
                              <div className="mb-1 flex flex-wrap items-center gap-1 sm:gap-2">
                                <p className="text-xs sm:text-sm font-semibold text-gray-50">
                                  {signal.title}
                                </p>
                                <span
                                  className={`inline-flex items-center rounded-full border px-1.5 py-0.5 sm:px-2 text-[9px] sm:text-[10px] font-semibold uppercase tracking-wide ${signal.statusClass}`}
                                >
                                  {signal.status}
                                </span>
                              </div>
                              <p className="text-[10px] sm:text-[11px] text-gray-400">
                                {signal.detail}
                              </p>
                              <div className="mt-1 sm:mt-2 flex items-center gap-1 sm:gap-2 text-[9px] sm:text-[10px] font-medium uppercase tracking-[0.2em] text-gray-500">
                                <span
                                  className={`h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full ${signal.pulseColor} animate-pulse`}
                                />
                                {signal.metric}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                {/* Mobile-only simplified version */}
                <div className="sm:hidden absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4 mt-8">
                    <div className="grid grid-cols-2 gap-3 max-w-[240px]">
                      {planetSignals.slice(0, 4).map((signal, index) => {
                        const Icon = signal.icon;
                        return (
                          <div
                            key={signal.id}
                            className={`flex flex-col items-center gap-2 rounded-lg border border-white/10 bg-gray-950/60 p-3 text-center backdrop-blur-sm ${signal.animation}`}
                            style={{ animationDelay: `${index * 0.5}s` }}
                          >
                            <div
                              className={`flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br ${signal.accent} text-white`}
                            >
                              <Icon className="h-3 w-3" strokeWidth={1.75} />
                            </div>
                            <div>
                              <p className="text-[10px] font-semibold text-gray-50 leading-tight">
                                {signal.title}
                              </p>
                              <span
                                className={`inline-flex items-center rounded-full border px-1.5 py-0.5 text-[8px] font-semibold uppercase tracking-wide mt-1 ${signal.statusClass}`}
                              >
                                {signal.status}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Grid */}
          <div className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 *:relative *:p-6 *:before:absolute *:before:bg-gray-800 *:before:[block-size:100vh] *:before:[inline-size:1px] *:before:[inset-block-start:0] *:before:[inset-inline-start:-1px] *:after:absolute *:after:bg-gray-800 *:after:[block-size:1px] *:after:[inline-size:100vw] *:after:[inset-block-start:-1px] *:after:[inset-inline-start:0] md:*:p-10">
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <Eye
                  className="h-4 w-4 text-[var(--color-brand-500)]"
                  strokeWidth={1.75}
                />
                <span>{t.features.services.darkwebThreatMonitoring.title}</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                {t.features.services.darkwebThreatMonitoring.description}
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <KeyRound
                  className="h-4 w-4 text-[var(--color-brand-500)]"
                  strokeWidth={1.75}
                />
                <span>{t.features.services.leakedCredentialTriage.title}</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                {t.features.services.leakedCredentialTriage.description}
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <Bug
                  className="h-4 w-4 text-[var(--color-brand-500)]"
                  strokeWidth={1.75}
                />
                <span>{t.features.services.cveExploitCorrelation.title}</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                {t.features.services.cveExploitCorrelation.description}
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <Radar
                  className="h-4 w-4 text-[var(--color-brand-500)]"
                  strokeWidth={1.75}
                />
                <span>{t.features.services.attackSurfaceManagement.title}</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                {t.features.services.attackSurfaceManagement.description}
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <Swords
                  className="h-4 w-4 text-[var(--color-brand-500)]"
                  strokeWidth={1.75}
                />
                <span>{t.features.services.redTeamingOperations.title}</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                {t.features.services.redTeamingOperations.description}
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <PenTool
                  className="h-4 w-4 text-[var(--color-brand-500)]"
                  strokeWidth={1.75}
                />
                <span>{t.features.services.penetrationTesting.title}</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                {t.features.services.penetrationTesting.description}
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <Network
                  className="h-4 w-4 text-[var(--color-brand-500)]"
                  strokeWidth={1.75}
                />
                <span>{t.features.services.thirdPartyIncidentWatch.title}</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                {t.features.services.thirdPartyIncidentWatch.description}
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <Workflow
                  className="h-4 w-4 text-[var(--color-brand-500)]"
                  strokeWidth={1.75}
                />
                <span>{t.features.services.actionableWorkflows.title}</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                {t.features.services.actionableWorkflows.description}
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <ShieldAlert
                  className="h-4 w-4 text-[var(--color-brand-500)]"
                  strokeWidth={1.75}
                />
                <span>{t.features.services.brandProtectionTakedowns.title}</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                {t.features.services.brandProtectionTakedowns.description}
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
