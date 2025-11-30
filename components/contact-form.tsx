"use client";

import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";

type SubmissionState = "idle" | "submitting" | "success" | "error";

const TURNSTILE_SCRIPT_SRC =
  "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export function ContactForm() {
  const [status, setStatus] = useState<SubmissionState>("idle");
  const [error, setError] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const widgetRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    if (!siteKey) {
      setError("Turnstile site key is missing. Set NEXT_PUBLIC_TURNSTILE_SITE_KEY.");
      return;
    }

    const renderWidget = () => {
      const turnstile = (window as typeof window & { turnstile?: any }).turnstile;
      if (!turnstile || !widgetRef.current) return;

      if (widgetIdRef.current) {
        turnstile.reset(widgetIdRef.current);
      }

      widgetIdRef.current = turnstile.render(widgetRef.current, {
        sitekey: siteKey,
        theme: "light",
        callback: (token: string) => setTurnstileToken(token),
        "expired-callback": () => setTurnstileToken(null),
        "error-callback": () => setTurnstileToken(null),
      });
    };

    const existingScript = document.querySelector(
      `script[src="${TURNSTILE_SCRIPT_SRC}"]`,
    ) as HTMLScriptElement | null;

    if (existingScript) {
      if ((window as typeof window & { turnstile?: any }).turnstile) {
        renderWidget();
      } else {
        existingScript.addEventListener("load", renderWidget);
      }
      return () => {
        existingScript.removeEventListener("load", renderWidget);
      };
    }

    const script = document.createElement("script");
    script.src = TURNSTILE_SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    script.onload = renderWidget;
    script.onerror = () => {
      setError("Turnstile failed to load. Please refresh and try again.");
    };
    document.head.appendChild(script);

    return () => {
      script.onload = null;
    };
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!turnstileToken) {
      setError("Please complete the Turnstile check before submitting.");
      return;
    }

    const formData = new FormData(event.currentTarget);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      role: formData.get("role"),
      message: formData.get("message"),
      briefing: formData.get("briefing") === "on",
      turnstileToken,
    };

    setStatus("submitting");
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        setStatus("error");
        setError(result.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setTurnstileToken(null);
      const turnstile = (window as typeof window & { turnstile?: any }).turnstile;
      if (turnstile && widgetIdRef.current) {
        turnstile.reset(widgetIdRef.current);
      }
      event.currentTarget.reset();
    } catch (fetchError) {
      setStatus("error");
      setError("Unable to submit right now. Please try again in a moment.");
    }
  };

  return (
    <div
      className="rounded-2xl border border-gray-200/70 bg-white p-8 shadow-xl shadow-black/5 sm:p-10"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <h2 className="text-xl font-semibold text-gray-900">Send us a note</h2>
      <p className="mt-2 text-sm text-gray-600">
        We respond quickly to urgent leak notifications, credential exposures, and emerging CVEs tied to your assets.
      </p>

      <form className="mt-8 grid gap-6" onSubmit={handleSubmit}>
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

        <div className="grid gap-4">
          <div ref={widgetRef} className="min-h-[65px]" />
          {error ? (
            <p className="text-sm text-red-600">{error}</p>
          ) : status === "success" ? (
            <p className="text-sm text-emerald-600">Thank you—our team will reach out shortly.</p>
          ) : null}
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
            className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-gray-100 shadow-lg shadow-gray-900/20 transition hover:-translate-y-[1px] hover:shadow-xl hover:shadow-gray-900/25 disabled:cursor-not-allowed disabled:opacity-70"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Sending..." : "Submit request"}
          </button>
        </div>
      </form>
    </div>
  );
}
