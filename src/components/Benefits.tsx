import React from 'react';
import { Target, Shield, Zap, MousePointerClick } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Benefits() {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Target,
      title: t('benefits.fit.title'),
      description: t('benefits.fit.desc')
    },
    {
      icon: Shield,
      title: t('benefits.materials.title'),
      description: t('benefits.materials.desc')
    },
    {
      icon: Zap,
      title: t('benefits.performance.title'),
      description: t('benefits.performance.desc')
    },
    {
      icon: MousePointerClick,
      title: t('benefits.ordering.title'),
      description: t('benefits.ordering.desc')
    }
  ];

  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
          {t('benefits.title')}
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          {t('benefits.subtitle')}
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-amber-500/50 transition-colors"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl mb-6 shadow-lg shadow-amber-500/20">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}