import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.products': 'Products',
    'nav.customize': 'Customize',
    'nav.about': 'About',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Perfect Your Archery with Custom 3D-Printed Grips',
    'hero.subtitle': 'Individually tailored for maximum comfort and precision',
    'hero.cta.customize': 'Start Customizing',
    'hero.cta.gallery': 'View Gallery',
    'hero.badge': 'Professional Grade Equipment',
    
    // Benefits
    'benefits.title': 'Professional Advantage',
    'benefits.subtitle': 'Every grip is crafted with competition-grade precision to give you the edge you need.',
    'benefits.fit.title': 'Competition-Ready Fit',
    'benefits.fit.desc': 'Precision-engineered to your exact measurements for tournament-level performance.',
    'benefits.materials.title': 'Pro-Grade Materials',
    'benefits.materials.desc': 'Advanced composites tested for durability under competitive conditions.',
    'benefits.performance.title': 'Performance Boost',
    'benefits.performance.desc': 'Scientifically optimized design for enhanced accuracy and shot consistency.',
    'benefits.ordering.title': '3D Precision Ordering',
    'benefits.ordering.desc': 'Advanced digital customization with real-time visualization technology.',

    // Products
    'products.title': 'Precision-Engineered Grips',
    'products.subtitle': 'Discover our range of competition-ready bow grips, each customizable to your exact specifications.',
    'products.viewAll': 'View All Products',
    'products.competition': 'Competition Pro',
    'products.elite': 'Elite Series',
    'products.tactical': 'Tactical Edge',
    
    // Testimonials
    'testimonials.title': 'Trusted by Champions',
    'testimonials.subtitle': 'Hear from professional archers who have elevated their game with our custom grips.',
    
    // Newsletter
    'newsletter.title': 'Stay on Target',
    'newsletter.subtitle': 'Subscribe to receive exclusive offers, early access to new products, and expert archery tips.',
    'newsletter.placeholder': 'Enter your email',
    'newsletter.button': 'Subscribe',
  },
  de: {
    // Navigation
    'nav.products': 'Produkte',
    'nav.customize': 'Anpassen',
    'nav.about': 'Über uns',
    'nav.blog': 'Blog',
    'nav.contact': 'Kontakt',
    
    // Hero
    'hero.title': 'Perfektioniere dein Bogenschießen mit maßgefertigten 3D-gedruckten Griffen',
    'hero.subtitle': 'Individuell angepasst für maximalen Komfort und Präzision',
    'hero.cta.customize': 'Jetzt Anpassen',
    'hero.cta.gallery': 'Galerie Ansehen',
    'hero.badge': 'Professionelle Ausrüstung',
    
    // Benefits
    'benefits.title': 'Professioneller Vorteil',
    'benefits.subtitle': 'Jeder Griff wird mit Wettkampf-Präzision gefertigt, um dir den entscheidenden Vorsprung zu verschaffen.',
    'benefits.fit.title': 'Wettkampftaugliche Passform',
    'benefits.fit.desc': 'Präzisionsgefertigt nach deinen exakten Maßen für Wettkampfleistung.',
    'benefits.materials.title': 'Profi-Materialien',
    'benefits.materials.desc': 'Fortschrittliche Verbundwerkstoffe, getestet für Langlebigkeit unter Wettkampfbedingungen.',
    'benefits.performance.title': 'Leistungssteigerung',
    'benefits.performance.desc': 'Wissenschaftlich optimiertes Design für verbesserte Genauigkeit und Schusskonsistenz.',
    'benefits.ordering.title': '3D-Präzisionsbestellung',
    'benefits.ordering.desc': 'Fortschrittliche digitale Anpassung mit Echtzeit-Visualisierungstechnologie.',

    // Products
    'products.title': 'Präzisionsgefertigte Griffe',
    'products.subtitle': 'Entdecke unsere Auswahl an wettkampftauglichen Bogengriffen, jeder individuell anpassbar nach deinen Vorgaben.',
    'products.viewAll': 'Alle Produkte Ansehen',
    'products.competition': 'Competition Pro',
    'products.elite': 'Elite Series',
    'products.tactical': 'Tactical Edge',
    
    // Testimonials
    'testimonials.title': 'Vertraut von Champions',
    'testimonials.subtitle': 'Höre von professionellen Bogenschützen, die ihr Spiel mit unseren maßgefertigten Griffen verbessert haben.',
    
    // Newsletter
    'newsletter.title': 'Bleib auf Kurs',
    'newsletter.subtitle': 'Abonniere für exklusive Angebote, frühen Zugang zu neuen Produkten und Expertentipps zum Bogenschießen.',
    'newsletter.placeholder': 'E-Mail-Adresse eingeben',
    'newsletter.button': 'Abonnieren',
  }
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}