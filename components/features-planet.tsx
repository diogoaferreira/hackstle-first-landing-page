import Image from "next/image";
import PlanetImg from "@/public/images/planet.png";
import PlanetOverlayImg from "@/public/images/planet-overlay.svg";
import PlanetTagImg01 from "@/public/images/planet-tag-01.png";
import PlanetTagImg02 from "@/public/images/planet-tag-02.png";
import PlanetTagImg03 from "@/public/images/planet-tag-03.png";
import PlanetTagImg04 from "@/public/images/planet-tag-04.png";

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
                    <Image
                      className="absolute -left-28 top-16 z-10 animate-[float_4s_ease-in-out_infinite_both] opacity-80 transition-opacity duration-500"
                      src={PlanetTagImg01}
                      width={253}
                      height={56}
                      alt="Tag 01"
                    />
                    <Image
                      className="absolute left-56 top-7 z-10 animate-[float_4s_ease-in-out_infinite_1s_both] opacity-30 transition-opacity duration-500"
                      src={PlanetTagImg02}
                      width={241}
                      height={56}
                      alt="Tag 02"
                    />
                    <Image
                      className="absolute -left-20 bottom-24 z-10 animate-[float_4s_ease-in-out_infinite_2s_both] opacity-25 transition-opacity duration-500"
                      src={PlanetTagImg03}
                      width={243}
                      height={56}
                      alt="Tag 03"
                    />
                    <Image
                      className="absolute bottom-32 left-64 z-10 animate-[float_4s_ease-in-out_infinite_3s_both] opacity-80 transition-opacity duration-500"
                      src={PlanetTagImg04}
                      width={251}
                      height={56}
                      alt="Tag 04"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Grid */}
          <div className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 *:relative *:p-6 *:before:absolute *:before:bg-gray-800 *:before:[block-size:100vh] *:before:[inline-size:1px] *:before:[inset-block-start:0] *:before:[inset-inline-start:-1px] *:after:absolute *:after:bg-gray-800 *:after:[block-size:1px] *:after:[inline-size:100vw] *:after:[inset-block-start:-1px] *:after:[inset-inline-start:0] md:*:p-10">
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg
                  className="h-4 w-4 text-[var(--color-brand-500)]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                  stroke="currentColor"
                  strokeWidth={1.75}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 10c2.5-3.333 5-5 7-5s4.5 1.667 7 5c-2.5 3.333-5 5-7 5s-4.5-1.667-7-5Z" />
                  <circle cx="10" cy="10" r="2.25" />
                  <path d="M13.5 6.5 15 5m-10 0 1.5 1.5M10 4.5V3" />
                </svg>
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
                <svg
                  className="h-4 w-4 text-[var(--color-brand-500)]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                  stroke="currentColor"
                  strokeWidth={1.75}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="4.5" y="4" width="11" height="12" rx="2" />
                  <path d="M4.5 8h11" />
                  <path d="M8 4V3a2 2 0 0 1 2-2v0a2 2 0 0 1 2 2v1" />
                  <circle cx="10" cy="11.5" r="2" />
                  <path d="M10 12.5v1.5" />
                </svg>
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
                <svg
                  className="h-4 w-4 text-[var(--color-brand-500)]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                  stroke="currentColor"
                  strokeWidth={1.75}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="6" cy="6" r="2.25" />
                  <circle cx="14" cy="6" r="2.25" />
                  <circle cx="10" cy="14" r="2.25" />
                  <path d="m7.5 7.5 2 2m3-2-2.5 2.5" />
                  <path d="M6 8.5v4M14 8.5v4" />
                </svg>
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
                <svg
                  className="h-4 w-4 text-[var(--color-brand-500)]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                  stroke="currentColor"
                  strokeWidth={1.75}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10 2.5 4 6.25v3.5C4 14 6.5 16.75 10 17.5c3.5-.75 6-3.5 6-7.75v-3.5L10 2.5Z" />
                  <path d="M7.25 10.25 9 12l3.5-3.5" />
                </svg>
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
                <svg
                  className="h-4 w-4 text-[var(--color-brand-500)]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                  stroke="currentColor"
                  strokeWidth={1.75}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5.5 6.5a4.5 4.5 0 1 1 9 0v2.25" />
                  <rect x="3.5" y="8.75" width="13" height="7.25" rx="2.25" />
                  <path d="M7.25 12.25a2.75 2.75 0 0 0 5.5 0" />
                </svg>
                <span>Third-Party Incident Watch</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Monitor breaches and supplier ransomware claims to understand
                cascading risk to your supply chain and customers.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg
                  className="h-4 w-4 text-[var(--color-brand-500)]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                  stroke="currentColor"
                  strokeWidth={1.75}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4.5 5.5h4.75L12 3.25l2.75 2.25H17" />
                  <path d="M4.5 10h5" />
                  <path d="M7 10v-1.5" />
                  <path d="M4.5 14.5h4.75L12 12.25l2.75 2.25H17" />
                </svg>
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
