import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="Hackstle">
      <span className="inline-flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 40 40" role="img">
          <rect width="40" height="40" rx="9" fill="url(#paint0_linear_1_1)" />
          <rect x="18.5" y="18.5" width="3" height="3" rx="0.75" fill="#F5F0FF" />
          <path
            fill="#F5F0FF"
            d="M17 6H9v8h3V9h5zM23 6h8v8h-3V9h-5zM17 34H9v-8h3v5h5zM23 34h8v-8h-3v5h-5z"
          />
          <path
            fill="#DCCBFF"
            d="m13.5 16.5 3 3-2.1 2.1-3-3 2.1-2.1Zm9 0-3 3 2.1 2.1 3-3-2.1-2.1ZM13.5 26.4l3-3 2.1 2.1-3 3-2.1-2.1Zm9 0 3-3-2.1-2.1-3 3 2.1 2.1Z"
          />
          <defs>
            <linearGradient id="paint0_linear_1_1" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
              <stop stopColor="var(--color-brand-600)" />
              <stop offset="1" stopColor="var(--color-brand-400)" />
            </linearGradient>
          </defs>
        </svg>
        <span className="text-lg font-semibold tracking-tight text-gray-900">hackstle</span>
      </span>
    </Link>
  );
}
