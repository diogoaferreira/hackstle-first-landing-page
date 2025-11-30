export const metadata = {
  title: "Contact Hackstle | Threat Intelligence Briefing",
  description:
    "Connect with Hackstle for a threat intelligence briefing, platform tour, or darkweb incident triage support.",
};

export default function ContactPage() {
  return (
    <section
      className="relative overflow-hidden pb-20 pt-28 sm:pb-28 sm:pt-32"
      data-aos="fade-up"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.12),transparent_25%),radial-gradient(circle_at_50%_70%,rgba(16,185,129,0.12),transparent_35%)]" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center" data-aos="fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">Contact</p>
          <h1 className="mt-3 text-3xl font-semibold text-gray-900 sm:text-4xl lg:text-5xl">Talk with Hackstle</h1>
          <p className="mt-4 text-lg text-gray-600">
            Request a live briefing, schedule a platform walk-through, or drop details about a darkweb incident you need triaged
            fast.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]" data-aos="fade-up" data-aos-delay="150">
          <div
            className="rounded-2xl border border-gray-200/70 bg-white p-8 shadow-xl shadow-black/5 sm:p-10"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h2 className="text-xl font-semibold text-gray-900">Send us a note</h2>
            <p className="mt-2 text-sm text-gray-600">
              We respond quickly to urgent leak notifications, credential exposures, and emerging CVEs tied to your assets.
            </p>

            <form className="mt-8 grid gap-6" action="#" method="post">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="grid gap-2">
                  <label className="text-sm font-medium text-gray-800" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 shadow-sm shadow-black/5 outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-200"
                    placeholder="Alex Ramirez"
                  />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-medium text-gray-800" htmlFor="email">
                    Work email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 shadow-sm shadow-black/5 outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-200"
                    placeholder="alex@company.com"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="grid gap-2">
                  <label className="text-sm font-medium text-gray-800" htmlFor="company">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 shadow-sm shadow-black/5 outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-200"
                    placeholder="Acme Security"
                  />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-medium text-gray-800" htmlFor="role">
                    Role
                  </label>
                  <input
                    id="role"
                    name="role"
                    type="text"
                    className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 shadow-sm shadow-black/5 outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-200"
                    placeholder="SOC Lead"
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-medium text-gray-800" htmlFor="message">
                  How can we help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 shadow-sm shadow-black/5 outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-200"
                  placeholder="Share the incident, assets, or CVEs you want us to monitor."
                />
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <label className="flex items-center gap-3 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    name="briefing"
                    className="h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-700"
                  />
                  Request a 30-minute threat briefing
                </label>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-gray-100 shadow-lg shadow-gray-900/20 transition hover:-translate-y-[1px] hover:shadow-xl hover:shadow-gray-900/25"
                >
                  Submit request
                </button>
              </div>
            </form>
          </div>

          <div
            className="flex flex-col justify-between gap-6 rounded-2xl border border-gray-200/70 bg-gray-900 px-8 py-10 text-gray-100 shadow-xl shadow-black/20 sm:px-10"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="grid gap-5">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">Fast response</p>
                <h2 className="mt-2 text-2xl font-semibold">What to expect</h2>
                <p className="mt-3 text-gray-200">
                  A Hackstle analyst will reach out with next steps—log sources we can monitor, leaked data samples for validation,
                  and a timeline for containment.
                </p>
              </div>
              <ul className="grid gap-4 text-gray-100">
                <li className="flex gap-3">
                  <span className="mt-[6px] h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <div>
                    <p className="text-sm font-semibold">Darkweb leak triage</p>
                    <p className="text-sm text-gray-200">Rapid validation of paste sites, forums, and breach channels.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-[6px] h-2.5 w-2.5 rounded-full bg-sky-400" />
                  <div>
                    <p className="text-sm font-semibold">Attack surface mapping</p>
                    <p className="text-sm text-gray-200">Exposed assets correlated with active exploits and CVEs.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-[6px] h-2.5 w-2.5 rounded-full bg-[var(--color-brand-400)]" />
                  <div>
                    <p className="text-sm font-semibold">Third-party incident watch</p>
                    <p className="text-sm text-gray-200">Visibility into suppliers and partners linked to your org.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="rounded-xl bg-gray-800/60 px-5 py-4 text-sm text-gray-200 ring-1 ring-white/5">
              Prefer to talk now? Email <a className="font-semibold text-white underline decoration-white/60 underline-offset-4" href="mailto:hello@hackstle.io">hello@hackstle.io</a> for urgent issues.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
