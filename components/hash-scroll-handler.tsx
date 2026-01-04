"use client";

import { useEffect } from "react";

export default function HashScrollHandler() {
  useEffect(() => {
    // Handle hash navigation when component mounts
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash === '#services') {
        // Small delay to ensure the page is fully rendered
        setTimeout(() => {
          const servicesSection = document.getElementById('services');
          if (servicesSection) {
            servicesSection.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }
        }, 100);
      }
    };

    // Handle initial load
    handleHashScroll();

    // Handle hash changes (back/forward navigation)
    window.addEventListener('hashchange', handleHashScroll);

    return () => {
      window.removeEventListener('hashchange', handleHashScroll);
    };
  }, []);

  return null; // This component doesn't render anything
}