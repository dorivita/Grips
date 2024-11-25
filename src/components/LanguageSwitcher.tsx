import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 rounded-md text-sm font-medium transition-colors ${
          language === 'en'
            ? 'bg-amber-500 text-white'
            : 'text-gray-400 hover:text-amber-500'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('de')}
        className={`px-2 py-1 rounded-md text-sm font-medium transition-colors ${
          language === 'de'
            ? 'bg-amber-500 text-white'
            : 'text-gray-400 hover:text-amber-500'
        }`}
      >
        DE
      </button>
    </div>
  );
}