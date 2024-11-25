import React from 'react';
import { Button } from './Button';
import { ArrowRight, Target, Shield, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function ProductShowcase() {
  const { t, language } = useLanguage();

  const products = [
    {
      id: 'competition-pro',
      image: '/images/grip-gold.jpg',
      title: t('products.competition'),
      features: [
        { icon: Target, text: language === 'en' ? 'Competition-grade precision' : 'Wettkampfpräzision' },
        { icon: Shield, text: language === 'en' ? 'Premium polymer build' : 'Premium-Polymer-Konstruktion' },
        { icon: Zap, text: language === 'en' ? 'Enhanced stability' : 'Verbesserte Stabilität' }
      ],
      description: language === 'en' 
        ? 'Our flagship competition grip, featuring advanced ergonomics and premium materials for tournament-level performance.'
        : 'Unser Flaggschiff-Wettkampfgriff mit fortschrittlicher Ergonomie und Premium-Materialien für Wettkampfleistung.'
    },
    {
      id: 'tactical-elite',
      image: '/images/grip-mesh.jpg',
      title: t('products.elite'),
      features: [
        { icon: Target, text: language === 'en' ? 'Tactical mesh pattern' : 'Taktisches Mesh-Muster' },
        { icon: Shield, text: language === 'en' ? 'Maximum durability' : 'Maximale Haltbarkeit' },
        { icon: Zap, text: language === 'en' ? 'Weather-resistant' : 'Wetterbeständig' }
      ],
      description: language === 'en'
        ? 'Featuring our innovative mesh design for superior grip in any weather condition. Perfect for outdoor competitions.'
        : 'Mit unserem innovativen Mesh-Design für überlegenen Grip bei jedem Wetter. Perfekt für Outdoor-Wettkämpfe.'
    },
    {
      id: 'color-series',
      image: '/images/grip-colors.jpg',
      title: t('products.tactical'),
      features: [
        { icon: Target, text: language === 'en' ? 'Custom colors' : 'Individuelle Farben' },
        { icon: Shield, text: language === 'en' ? 'UV-resistant' : 'UV-beständig' },
        { icon: Zap, text: language === 'en' ? 'Personalized fit' : 'Personalisierte Passform' }
      ],
      description: language === 'en'
        ? 'Express your style with our color series. Each grip is precisely crafted to your measurements while adding a personal touch.'
        : 'Drücken Sie Ihren Stil mit unserer Farbserie aus. Jeder Griff wird präzise nach Ihren Maßen gefertigt und verleiht eine persönliche Note.'
    }
  ];

  return (
    <section className="py-24 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('products.title')}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t('products.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-amber-500/50 transition-all group"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60" />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4">{product.title}</h3>
                <p className="text-gray-400 mb-6">{product.description}</p>
                
                <div className="space-y-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <feature.icon className="w-5 h-5 text-amber-500 mr-3" />
                      <span>{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 pt-0">
                <Button 
                  onClick={() => {}} 
                  className="w-full group"
                >
                  {language === 'en' ? 'Learn More' : 'Mehr erfahren'}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="group !border-amber-500 !text-amber-500 hover:!bg-amber-500/10"
          >
            {t('products.viewAll')}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}