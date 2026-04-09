'use client';
import React, { useState, createContext, useContext } from 'react';
import { englishTexts } from '../utils/text';
import { frenchTexts } from '../utils/text';

type Language = 'en' | 'fr';

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof englishTexts | typeof frenchTexts;
}

const LanguageContext = createContext<LanguageContextTypes | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = language === 'en' ? englishTexts : frenchTexts;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageProvider;