"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

import HackstleSquare from "@/public/images/hackstle-square.png";

export default function BusinessCategories() {
  const { t } = useLanguage();

  const threatCategories = [
    { label: t.businessCategories.categories.asset, primary: true },
    { label: t.businessCategories.categories.alert, primary: true },
    { label: t.businessCategories.categories.intel, secondary: true },
    { label: t.businessCategories.categories.zeroday, secondary: true },
    { label: t.businessCategories.categories.leaks, secondary: true },
    { label: t.businessCategories.categories.cve, secondary: true },
    { label: t.businessCategories.categories.iocs, tertiary: true },
    { label: t.businessCategories.categories.ops, tertiary: true },
  ];

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Desktop/Tablet Layout */}
          <div className="hidden sm:block">
            <div className="relative flex h-[324px] items-center justify-center">
              {/* Small brand dots */}
              <div className="absolute -z-10">
                <svg
                  className="fill-[var(--color-brand-500)]"
                  xmlns="http://www.w3.org/2000/svg"
                  width={164}
                  height={41}
                  viewBox="0 0 164 41"
                  fill="none"
                >
                  <circle cx={1} cy={8} r={1} fillOpacity="0.24" />
                  <circle cx={1} cy={1} r={1} fillOpacity="0.16" />
                  <circle cx={1} cy={15} r={1} />
                  <circle cx={1} cy={26} r={1} fillOpacity="0.64" />
                  <circle cx={1} cy={33} r={1} fillOpacity="0.24" />
                  <circle cx={8} cy={8} r={1} />
                  <circle cx={8} cy={15} r={1} />
                  <circle cx={8} cy={26} r={1} fillOpacity="0.24" />
                  <circle cx={15} cy={15} r={1} fillOpacity="0.64" />
                  <circle cx={15} cy={26} r={1} fillOpacity="0.16" />
                  <circle cx={8} cy={33} r={1} />
                  <circle cx={1} cy={40} r={1} />
                  <circle
                    cx={1}
                    cy={1}
                    r={1}
                    transform="matrix(-1 0 0 1 164 7)"
                    fillOpacity="0.24"
                  />
                  <circle
                    cx={1}
                    cy={1}
                    r={1}
                    transform="matrix(-1 0 0 1 164 0)"
                    fillOpacity="0.16"
                  />
                  <circle
                    cx={1}
                    cy={1}
                    r={1}
                    transform="matrix(-1 0 0 1 164 14)"
                  />
                  <circle
                    cx={1}
                    cy={1}
                    r={1}
                    transform="matrix(-1 0 0 1 164 25)"
                    fillOpacity="0.64"
                  />
                  <circle
                    cx={1}
                    cy={1}
                    r={1}
                    transform="matrix(-1 0 0 1 164 32)"
                    fillOpacity="0.24"
                  />
                  <circle
                    cx={1}
                    cy={1}
                    r={1}
                    transform="matrix(-1 0 0 1 157 7)"
                  />
                  <circle
                    cx={1}
                    cy={1}
                    r={1}
                    transform="matrix(-1 0 0 1 157 14)"
                  />
                  <circle
                    cx={1}
                    cy={1}
                    r={1}
                    transform="matrix(-1 0 0 1 157 25)"
                    fillOpacity="0.24"
                  />
                  <circle
                    cx={1}
                    cy={1}
                    r={1}
                    transform="matrix(-1 0 0 1 150 14)"
                    fillOpacity="0.64"
                  />
                  <circle
                    cx={1}
                    cy={1}
                    r={1}
                    transform="matrix(-1 0 0 1 150 25)"
                    fillOpacity="0.16"
                  />
                  <circle
                    cx={1}
                    cy={1}
                    r={1}
                    transform="matrix(-1 0 0 1 157 32)"
                  />
                  <circle
                    cx={1}
                    cy={1}
                    r={1}
                    transform="matrix(-1 0 0 1 164 39)"
                  />
                </svg>
              </div>
              {/* Brand glow */}
              <div className="absolute -z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={432}
                  height={160}
                  viewBox="0 0 432 160"
                  fill="none"
                >
                  <g opacity="0.6" filter="url(#filter0_f_2044_9)">
                    <path
                      className="fill-[var(--color-brand-500)]"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M80 112C62.3269 112 48 97.6731 48 80C48 62.3269 62.3269 48 80 48C97.6731 48 171 62.3269 171 80C171 97.6731 97.6731 112 80 112ZM352 112C369.673 112 384 97.6731 384 80C384 62.3269 369.673 48 352 48C334.327 48 261 62.3269 261 80C261 97.6731 334.327 112 352 112Z"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_2044_9"
                      x={0}
                      y={0}
                      width={432}
                      height={160}
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation={32}
                        result="effect1_foregroundBlur_2044_9"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              {/* Horizontal lines */}
              <div className="absolute inset-x-0 top-0 -z-10 h-px bg-linear-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
              <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-linear-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
              <div className="absolute inset-x-[200px] top-1/2 -z-10 h-px bg-linear-to-r from-transparent via-[var(--color-brand-500)]/60 to-transparent mix-blend-multiply"></div>
              <div className="absolute inset-x-0 top-1/2 -z-10 h-px -translate-y-[82px] bg-linear-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply before:absolute before:inset-y-0 before:w-24 before:animate-[line_10s_ease-in-out_infinite_both] before:bg-linear-to-r before:via-[var(--color-brand-500)]"></div>
              <div className="absolute inset-x-0 top-1/2 -z-10 h-px translate-y-[82px] bg-linear-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply before:absolute before:inset-y-0 before:w-24 before:animate-[line_10s_ease-in-out_infinite_5s_both] before:bg-linear-to-r before:via-[var(--color-brand-500)]"></div>
              {/* Diagonal lines */}
              <div className="absolute inset-x-[300px] top-1/2 -z-10 h-px rotate-[20deg] bg-linear-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
              <div className="absolute inset-x-[300px] top-1/2 -z-10 h-px -rotate-[20deg] bg-linear-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
              {/* Vertical lines */}
              <div className="absolute inset-y-0 left-1/2 -z-10 w-px -translate-x-[216px] bg-linear-to-b from-gray-200 to-transparent mix-blend-multiply"></div>
              <div className="absolute inset-y-0 left-1/2 -z-10 w-px translate-x-[216px] bg-linear-to-t from-gray-200 to-transparent mix-blend-multiply"></div>
              {/* Logos */}
              <div className="absolute before:absolute before:-inset-3 before:animate-[spin_3s_linear_infinite] before:rounded-full before:border before:border-transparent before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[background:conic-gradient(from_180deg,transparent,var(--color-brand-500))_border-box]">
                <div className="animate-[breath_8s_ease-in-out_infinite_both]">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                    <Image
                      className="relative rounded-[18px]"
                      src={HackstleSquare}
                      width={55}
                      height={55}
                      alt="Hackstle platform mark"
                      priority
                    />
                  </div>
                </div>
              </div>

              <div className="relative flex flex-col">
                <article className="flex h-full w-full items-center justify-center focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-[var(--color-brand-300)]">
                  <div className="absolute -translate-x-[136px]">
                    <div className="animate-[breath_7s_ease-in-out_3s_infinite_both]">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                        <span className="relative text-sm font-normal uppercase tracking-[0.0em] text-gray-800">
                          {t.businessCategories.categories.asset}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute translate-x-[136px]">
                    <div className="animate-[breath_7s_ease-in-out_3.5s_infinite_both]">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                        <span className="relative text-sm font-normal uppercase tracking-[0.0em] text-gray-800">
                          {t.businessCategories.categories.alert}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -translate-x-[216px] -translate-y-[82px]">
                    <div className="animate-[breath_6s_ease-in-out_3.5s_infinite_both]">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                        <span className="relative text-sm font-normal uppercase tracking-[0.25em] text-gray-400 italic">
                          {t.businessCategories.categories.intel}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -translate-y-[82px] translate-x-[216px]">
                    <div className="animate-[breath_6s_ease-in-out_1.5s_infinite_both]">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                        <span className="relative text-sm font-normal uppercase tracking-[0.25em] text-gray-400 italic">
                          {t.businessCategories.categories.zeroday}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute translate-x-[216px] translate-y-[82px]">
                    <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                        <span className="relative text-sm font-normal uppercase tracking-[0.25em] text-gray-400 italic">
                          {t.businessCategories.categories.leaks}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -translate-x-[216px] translate-y-[82px]">
                    <div className="animate-[breath_6s_ease-in-out_2.5s_infinite_both]">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                        <span className="relative text-sm font-normal uppercase tracking-[0.25em] text-gray-500 italic">
                          {t.businessCategories.categories.cve}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -translate-x-[292px] opacity-40">
                    <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200/60 bg-white shadow-lg">
                        <span className="relative text-[0.68rem] font-normal uppercase tracking-[0.2em] text-gray-500 italic">
                          {t.businessCategories.categories.iocs}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute translate-x-[292px] opacity-40">
                    <div className="animate-[breath_6s_ease-in-out_4s_infinite_both]">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200/60 bg-white shadow-lg">
                        <span className="relative text-[0.68rem] font-normal uppercase tracking-[0.2em] text-gray-500 italic">
                          {t.businessCategories.categories.ops}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="sm:hidden">
            <div className="relative py-8">
              {/* Central logo */}
              <div className="flex justify-center mb-8">
                <div className="relative before:absolute before:-inset-2 before:animate-[spin_3s_linear_infinite] before:rounded-full before:border before:border-transparent before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[background:conic-gradient(from_180deg,transparent,var(--color-brand-500))_border-box]">
                  <div className="animate-[breath_8s_ease-in-out_infinite_both]">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <Image
                        className="relative rounded-[12px]"
                        src={HackstleSquare}
                        width={36}
                        height={36}
                        alt="Hackstle platform mark"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Threat categories grid */}
              <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
                {threatCategories.map((category, index) => (
                  <div
                    key={category.label}
                    className={`
                      flex items-center justify-center rounded-xl bg-white shadow-md shadow-black/[0.03] 
                      border border-gray-200/60 transition-all duration-300 hover:shadow-lg
                      ${category.primary ? 'h-14 text-gray-800 font-medium' : ''}
                      ${category.secondary ? 'h-12 text-gray-500 font-normal' : ''}
                      ${category.tertiary ? 'h-10 text-gray-400 font-light opacity-75' : ''}
                      animate-[breath_6s_ease-in-out_infinite_both]
                    `}
                    style={{ animationDelay: `${index * 0.3}s` }}
                  >
                    <span 
                      className={`
                        uppercase tracking-wide
                        ${category.primary ? 'text-sm' : ''}
                        ${category.secondary ? 'text-xs tracking-[0.15em] italic' : ''}
                        ${category.tertiary ? 'text-[10px] tracking-[0.2em] italic' : ''}
                      `}
                    >
                      {category.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Subtle background decoration */}
              <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-20">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[var(--color-brand-500)]/20 to-transparent blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
