'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, defaultLanguage, Translations } from '@/lib/i18n';
import { getTranslations } from '@/lib/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(defaultLanguage);
  const [t, setTranslations] = useState<Translations>(getTranslations(defaultLanguage));

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'pt')) {
      setLanguageState(savedLanguage);
      setTranslations(getTranslations(savedLanguage));
    }
  }, []);

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    setTranslations(getTranslations(newLanguage));
    localStorage.setItem('language', newLanguage);
    
    // Update document language attribute
    document.documentElement.lang = newLanguage;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}