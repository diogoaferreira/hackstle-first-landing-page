"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./logo";
import LanguageSwitcher from "./language-switcher";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  // Close menu when clicking outside or on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Element;
      if (isMenuOpen && !target.closest('[data-mobile-menu]')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const scrollTo = (sectionName: string) => {
    const servicesSection = document.getElementById(sectionName);
    if (servicesSection) {
      // If we're on the homepage and the services section exists, scroll to it
      servicesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // If we're on a different page, navigate to homepage with hash
      window.location.href = '/#'+sectionName;
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <header className="fixed top-2 z-50 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          
          {/* Site branding */}
          <div className="flex items-center">
            <Logo />
          </div>
            
          {/* Desktop navigation */}
          {/* <nav className="hidden md:flex"> */}
          <nav className="hidden lg:flex">
            <ul className="flex items-center gap-6">
              <li>
                <button
                  onClick={() => scrollTo("home")}
                  className="text-sm font-medium text-gray-800 transition hover:text-[var(--color-brand-700)] cursor-pointer"
                >
                  {t.header.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("services")}
                  className="text-sm font-medium text-gray-800 transition hover:text-[var(--color-brand-700)] cursor-pointer"
                >
                  {t.header.ourServices}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("whyHackstle")}
                  className="text-sm font-medium text-gray-800 transition hover:text-[var(--color-brand-700)] cursor-pointer"
                >
                  {t.header.whyHackstle}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("about")}
                  className="text-sm font-medium text-gray-800 transition hover:text-[var(--color-brand-700)] cursor-pointer"
                >
                  {t.header.aboutUs}
                </button>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm font-medium text-gray-800 transition hover:text-[var(--color-brand-700)]"
                >
                  {t.header.blog}
                </Link>
              </li>
              <li>
                <LanguageSwitcher />
              </li>
              <li>
                <Link
                  href="/contact"
                  className="btn-sm bg-[var(--color-brand-500)] text-white shadow-sm transition hover:bg-[var(--color-brand-600)] px-4 py-2 rounded-lg text-sm font-medium"
                >
                  {t.header.contactUs}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile menu button */}
          {/* 
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-gray-800 hover:bg-gray-100/50 transition-colors"
          */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg text-gray-800 hover:bg-gray-100/50 transition-colors"
            aria-label="Toggle menu"
            data-mobile-menu
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile navigation menu */}
        {isMenuOpen && (
          /*
          <div 
            className="md:hidden absolute top-16 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl shadow-black/[0.08] border border-gray-200/50 overflow-hidden"
          */
          <div 
            className="lg:hidden absolute top-16 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl shadow-black/[0.08] border border-gray-200/50 overflow-hidden"
            data-mobile-menu
          >
            <nav className="py-2">
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/"
                    onClick={handleLinkClick}
                    className="block px-4 py-3 text-gray-800 hover:bg-gray-50/80 transition-colors font-medium"
                  >
                    {t.header.home}
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo("services")}
                    className="w-full text-left px-4 py-3 text-gray-800 hover:bg-gray-50/80 transition-colors font-medium"
                  >
                    {t.header.ourServices}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo("whyHackstle")}
                    className="w-full text-left px-4 py-3 text-gray-800 hover:bg-gray-50/80 transition-colors font-medium"
                  >
                    {t.header.whyHackstle}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo("about")}
                    className="w-full text-left px-4 py-3 text-gray-800 hover:bg-gray-50/80 transition-colors font-medium"
                  >
                    {t.header.aboutUs}
                  </button>
                </li>
                <li>
                  <Link
                    href="/blog"
                    onClick={handleLinkClick}
                    className="block px-4 py-3 text-gray-800 hover:bg-gray-50/80 transition-colors font-medium"
                  >
                    {t.header.blog}
                  </Link>
                </li>
                <li className="px-4 py-2">
                  <LanguageSwitcher />
                </li>
                <li className="px-4 py-3">
                  <Link
                    href="/contact"
                    onClick={handleLinkClick}
                    className="block w-full text-center bg-[var(--color-brand-500)] text-white py-3 px-4 rounded-lg font-medium shadow-sm transition hover:bg-[var(--color-brand-600)]"
                  >
                    {t.header.contactUs}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>

      {/* Mobile menu backdrop */}
      {isMenuOpen && (
        /*
        <div 
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
        */
        <div 
          className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
}
