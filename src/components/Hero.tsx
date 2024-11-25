import React from 'react';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export function Hero() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1511374322656-8cdb4c9a7899?auto=format&fit=crop&w=2850&q=80")',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <div className="inline-block mb-4">
            <span className="bg-amber-500/10 text-amber-500 px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
              {t('hero.badge')}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-amber-300">
              {t('hero.title')}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700"
              onClick={() => navigate('/customize')}
            >
              {t('hero.cta.customize')}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="!text-white !border-white hover:!bg-white/10"
              onClick={() => navigate('/products')}
            >
              {t('hero.cta.gallery')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}