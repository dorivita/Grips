import React from 'react';
import { Button } from './Button';
import { Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Newsletter() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('newsletter.title')}
          </h2>
          <p className="text-gray-400 mb-8">
            {t('newsletter.subtitle')}
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder={t('newsletter.placeholder')}
              className="flex-1 px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <Button className="group whitespace-nowrap">
              {t('newsletter.button')}
              <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}