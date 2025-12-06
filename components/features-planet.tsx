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

const planetSignals = [
  {
    id: "exposed-port",
    icon: ShieldAlert,
    title: "Critical port exposed",
    detail: "FTP on edge-gateway left open 32m",
    status: "High risk",
    statusClass: "bg-rose-500/20 text-rose-100 border border-rose-300/25",
    accent: "from-rose-500/50 via-orange-500/30 to-transparent",
    position: "-left-32 top-12",
    animation: "animate-[float_5s_ease-in-out_infinite]",
    metric: "Live signal",
    pulseColor: "bg-rose-400",
    widthClass: "min-w-[220px]",
  },
  {
    id: "cve",
    icon: FileWarning,
    title: "Exploit chatter spiking",
    detail: "CVE-2024-5039 mapped to app-core",
    status: "Exploit",
    statusClass: "bg-amber-400/20 text-amber-100 border border-amber-200/30",
    accent: "from-amber-400/40 via-yellow-300/40 to-transparent",
    position: "left-52 top-6",
    animation: "animate-[float_5s_ease-in-out_infinite_1s]",
    metric: "+18 mentions",
    pulseColor: "bg-amber-300",
    widthClass: "min-w-[280px] w-[300px]",
  },
  {
    id: "credentials",
    icon: KeyRound,
    title: "Fresh credential dump",
    detail: "Finance ops bundle / 184 accounts",
    status: "New",
    statusClass: "bg-sky-500/20 text-sky-100 border border-sky-300/30",
    accent: "from-sky-500/40 via-indigo-500/30 to-transparent",
    position: "-left-24 bottom-24",
    animation: "animate-[float_5s_ease-in-out_infinite_2s]",
    metric: "Now indexing",
    pulseColor: "bg-sky-300",
    widthClass: "min-w-[230px]",
  },
  {
    id: "shadow-service",
    icon: Cpu,
    title: "Shadow service found",
    detail: "Untracked EDR + SSO provider",
    status: "Investigate",
    statusClass: "bg-emerald-500/15 text-emerald-100 border border-emerald-300/25",
    accent: "from-emerald-500/40 via-teal-400/30 to-transparent",
    position: "bottom-32 left-64",
    animation: "animate-[float_5s_ease-in-out_infinite_3s]",
    metric: "New asset",
    pulseColor: "bg-emerald-300",
    widthClass: "min-w-[280px] w-[300px]",
  },
];

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
              <div className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-linear-to-b before:from-[#2f0f6e]/60 before:to-[var(--color-brand-500)]/35 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,var(--color-brand-500),transparent)]">
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
                    {planetSignals.map((signal) => {
                      const Icon = signal.icon;
                      return (
                        <div
                          key={signal.id}
                          className={`absolute z-10 opacity-90 transition-opacity duration-500 ${signal.position} ${signal.animation}`}
                        >
                          <div
                            className={`group flex items-start gap-3 rounded-2xl border border-white/10 bg-gray-950/80 px-4 py-3 text-left shadow-[0_18px_45px_rgba(8,7,19,0.65)] ring-1 ring-white/5 backdrop-blur-xl ${signal.widthClass}`}
                          >
                            <div
                              className={`relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${signal.accent} text-white shadow-[0_8px_20px_rgba(4,3,7,0.65)]`}
                            >
                              <span className="absolute inset-0 -z-10 rounded-full bg-white/40 opacity-40 blur-lg" />
                              <Icon className="h-4 w-4" strokeWidth={1.75} />
                            </div>
                            <div className="leading-tight">
                              <div className="mb-1 flex flex-wrap items-center gap-2">
                                <p className="text-sm font-semibold text-gray-50">
                                  {signal.title}
                                </p>
                                <span
                                  className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${signal.statusClass}`}
                                >
                                  {signal.status}
                                </span>
                              </div>
                              <p className="text-[11px] text-gray-400">
                                {signal.detail}
                              </p>
                              <div className="mt-2 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-gray-500">
                                <span
                                  className={`h-1.5 w-1.5 rounded-full ${signal.pulseColor} animate-pulse`}
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
                <Swords
                  className="h-4 w-4 text-[var(--color-brand-500)]"
                  strokeWidth={1.75}
                />
                <span>Red Teaming Operations</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Simulate modern adversaries, chain together darkweb intel, and
                stress-test detections with live attack paths mapped to your
                environment.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <PenTool
                  className="h-4 w-4 text-[var(--color-brand-500)]"
                  strokeWidth={1.75}
                />
                <span>Penetration Testing</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Validate exploitable weaknesses with curated pentests that feed
                prioritized fixes back to engineering and governance teams.
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
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <ShieldAlert
                  className="h-4 w-4 text-[var(--color-brand-500)]"
                  strokeWidth={1.75}
                />
                <span>Brand Protection &amp; Takedowns</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Hunt sophisticated phishing kits, clone sites, and typosquats,
                then coordinate rapid domain takedowns to keep customer trust
                and brand equity intact.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
