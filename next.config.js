/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Environment-driven toggles so client and server can share the same flags.
   * Use TURNSTILE_DISABLED/NEXT_PUBLIC_TURNSTILE_DISABLED to bypass Turnstile
   * during local development.
   */
  env: {
    TURNSTILE_DISABLED: process.env.TURNSTILE_DISABLED,
    NEXT_PUBLIC_TURNSTILE_DISABLED: process.env.NEXT_PUBLIC_TURNSTILE_DISABLED,
  },
};

module.exports = nextConfig;
