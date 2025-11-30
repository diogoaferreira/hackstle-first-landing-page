import Image from "next/image";
import {
  Bug,
  Cpu,
  Eye,
  FileWarning,
  KeyRound,
  Network,
  Radar,
  ShieldAlert,
  Workflow,
} from "lucide-react";
import PlanetImg from "@/public/images/planet.png";
import PlanetOverlayImg from "@/public/images/planet-overlay.svg";

export default function FeaturesPlanet() {
  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-gray-200 md:text-4xl">
              Threat intelligence fused with attack surface awareness
            </h2>
          </div>
          {/* Planet */}
          <div className="pb-16 md:pb-20" data-aos="zoom-y-out">
            <div className="text-center">
              <div className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-linear-to-b before:from-[#2f0f6e] before:to-[var(--color-brand-500)]/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,var(--color-brand-500),transparent)]">
                <Image
                  className="rounded-full bg-gray-900"
                  src={PlanetImg}
                  width={400}
                  height={400}
                  alt="Planet"
                />
                <div className="pointer-events-none" aria-hidden="true">
                  <Image
                    className="absolute -right-64 -top-20 z-10 max-w-none"
                    src={PlanetOverlayImg}
                    width={789}
                    height={755}
                    alt="Planet decoration"
                  />
                  <div>
                    <div className="absolute -left-32 top-12 z-10 animate-[float_4s_ease-in-out_infinite_both] opacity-80 transition-opacity duration-500">
                      <div className="flex items-center gap-3 rounded-full border border-white/10 bg-gray-900/80 px-4 py-2 text-left shadow-lg backdrop-blur">
                        <ShieldAlert
                          className="h-4 w-4 text-[var(--color-brand-500)]"
                          strokeWidth={1.75}
                        />
                        <div className="leading-tight">
                          <div className="text-[11px] text-gray-400">Critical port opened</div>
                          <div className="text-sm font-semibold text-gray-50">
                            Port 21 on edge-gateway
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-52 top-6 z-10 animate-[float_4s_ease-in-out_infinite_1s_both] opacity-80 transition-opacity duration-500">
                      <div className="flex items-center gap-3 rounded-full border border-white/10 bg-gray-900/80 px-4 py-2 text-left shadow-lg backdrop-blur">
                        <FileWarning
                          className="h-4 w-4 text-[var(--color-brand-500)]"
                          strokeWidth={1.75}
                        />
                        <div className="leading-tight">
                          <div className="text-[11px] text-gray-400">CVE detected</div>
                          <div className="text-sm font-semibold text-gray-50">
                            CVE-2024-5039 on app-core
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute -left-24 bottom-24 z-10 animate-[float_4s_ease-in-out_infinite_2s_both] opacity-70 transition-opacity duration-500">
                      <div className="flex items-center gap-3 rounded-full border border-white/10 bg-gray-900/80 px-4 py-2 text-left shadow-lg backdrop-blur">
                        <KeyRound
                          className="h-4 w-4 text-[var(--color-brand-500)]"
                          strokeWidth={1.75}
                        />
                        <div className="leading-tight">
                          <div className="text-[11px] text-gray-400">Leaked credentials</div>
                          <div className="text-sm font-semibold text-gray-50">
                            finance-backoffice dump
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-32 left-64 z-10 animate-[float_4s_ease-in-out_infinite_3s_both] opacity-80 transition-opacity duration-500">
                      <div className="flex items-center gap-3 rounded-full border border-white/10 bg-gray-900/80 px-4 py-2 text-left shadow-lg backdrop-blur">
                        <Cpu
                          className="h-4 w-4 text-[var(--color-brand-500)]"
                          strokeWidth={1.75}
                        />
                        <div className="leading-tight">
                          <div className="text-[11px] text-gray-400">Technologies discovered</div>
                          <div className="text-sm font-semibold text-gray-50">
                            New EDR &amp; SSO provider
                          </div>
                        </div>
                      </div>
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
                <span>Darkweb Threat Monitoring</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Track ransomware posts, data leaks, and emerging threat actor
                chatter across marketplaces and forums mapped to your brands
                and executives.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <KeyRound
                  className="h-4 w-4 text-[var(--color-brand-500)]"
                  strokeWidth={1.75}
                />
                <span>Leaked Credential Triage</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Surface fresh credential drops, validate exposure, and push
                takedowns or resets before adversaries weaponize stolen
                access.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <Bug
                  className="h-4 w-4 text-[var(--color-brand-500)]"
                  strokeWidth={1.75}
                />
                <span>CVE &amp; Exploit Correlation</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Link vulnerability chatter and proof-of-concept drops to the
                assets you own, with severity driven by exploitability and live
                darkweb intent.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <Radar
                  className="h-4 w-4 text-[var(--color-brand-500)]"
                  strokeWidth={1.75}
                />
                <span>Attack Surface Management</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Continuously map internet-facing assets, uncover shadow IT, and
                correlate exposures with intel so remediation hits what
                attackers see first.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <Network
                  className="h-4 w-4 text-[var(--color-brand-500)]"
                  strokeWidth={1.75}
                />
                <span>Third-Party Incident Watch</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Monitor breaches and supplier ransomware claims to understand
                cascading risk to your supply chain and customers.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <Workflow
                  className="h-4 w-4 text-[var(--color-brand-500)]"
                  strokeWidth={1.75}
                />
                <span>Actionable Workflows</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Automate alerts to SOC channels, ticketing, and takedown
                partners with context that shortens investigation to minutes.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
