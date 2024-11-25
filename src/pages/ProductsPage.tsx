import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/Button';
import { ArrowRight, Target, Shield, Zap, Award, Crosshair, Gauge } from 'lucide-react';

export function ProductsPage() {
  const { language } = useLanguage();

  const products = [
    {
      id: 'competition-pro',
      name: language === 'en' ? 'Competition Pro Series' : 'Competition Pro Serie',
      price: '249.99',
      images: [
        '/images/grip-gold.jpg',
        '/images/grip-mesh.jpg'
      ],
      description: language === 'en' 
        ? 'Our flagship competition grip, engineered for professional archers seeking maximum precision and control.'
        : 'Unser Flaggschiff-Wettkampfgriff, entwickelt für professionelle Bogenschützen, die maximale Präzision und Kontrolle suchen.',
      features: [
        {
          icon: Target,
          title: language === 'en' ? 'Tournament-Grade Precision' : 'Turnier-Präzision',
          description: language === 'en' 
            ? 'Engineered for competitive accuracy'
            : 'Entwickelt für Wettkampfgenauigkeit'
        },
        {
          icon: Shield,
          title: language === 'en' ? 'Premium Materials' : 'Premium-Materialien',
          description: language === 'en'
            ? 'Aerospace-grade polymers'
            : 'Polymere in Luftfahrtqualität'
        },
        {
          icon: Award,
          title: language === 'en' ? 'Competition Ready' : 'Wettkampfbereit',
          description: language === 'en'
            ? 'Used by champion archers'
            : 'Von Champion-Bogenschützen verwendet'
        }
      ]
    },
    {
      id: 'tactical-elite',
      name: language === 'en' ? 'Tactical Elite' : 'Tactical Elite',
      price: '199.99',
      images: [
        '/images/grip-mesh.jpg'
      ],
      description: language === 'en'
        ? 'Advanced grip technology with our innovative mesh pattern design for superior control in any condition.'
        : 'Fortschrittliche Grifftechnologie mit unserem innovativen Mesh-Muster-Design für überlegene Kontrolle unter allen Bedingungen.',
      features: [
        {
          icon: Crosshair,
          title: language === 'en' ? 'Enhanced Stability' : 'Verbesserte Stabilität',
          description: language === 'en'
            ? 'Reduced vibration and sway'
            : 'Reduzierte Vibration und Schwankung'
        },
        {
          icon: Shield,
          title: language === 'en' ? 'Weather Resistant' : 'Wetterbeständig',
          description: language === 'en'
            ? 'All-weather performance'
            : 'Leistung bei jedem Wetter'
        },
        {
          icon: Gauge,
          title: language === 'en' ? 'Precision Fit' : 'Präzise Passform',
          description: language === 'en'
            ? 'Custom-sized to your hand'
            : 'Maßgeschneidert für Ihre Hand'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-12">
        <header className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {language === 'en' 
              ? 'Professional Archery Grips'
              : 'Professionelle Bogengriffe'
            }
          </h1>
          <p className="text-xl text-gray-400">
            {language === 'en'
              ? 'Precision-engineered grips for competitive archers'
              : 'Präzisionsgefertigte Griffe für Wettkampfbogenschützen'
            }
          </p>
        </header>

        <div className="space-y-24">
          {products.map((product) => (
            <div 
              key={product.id}
              className="max-w-7xl mx-auto bg-gray-800 rounded-2xl overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="p-8">
                  <div className="aspect-square rounded-xl overflow-hidden">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="p-8">
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold text-white mb-2">
                      {product.name}
                    </h2>
                    <p className="text-2xl text-amber-500 font-semibold">
                      ${product.price}
                    </p>
                  </div>

                  <p className="text-gray-300 mb-8">
                    {product.description}
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {product.features.map((feature, index) => (
                      <div key={index} className="text-center">
                        <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center mx-auto mb-3">
                          <feature.icon className="w-6 h-6 text-amber-500" />
                        </div>
                        <h3 className="text-white font-semibold mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-gray-400">
                          {feature.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      className="flex-1 group"
                      onClick={() => {}}
                    >
                      {language === 'en' ? 'Customize Now' : 'Jetzt Anpassen'}
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button 
                      variant="outline"
                      className="flex-1"
                    >
                      {language === 'en' ? 'Learn More' : 'Mehr Erfahren'}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}