import React from 'react';
import { Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Professional Archer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
      content: "The custom grip has significantly improved my competition performance. The precision and comfort are unmatched.",
      rating: 5
    },
    {
      name: 'Michael Torres',
      role: 'Olympic Medalist',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
      content: "GoldenGrip's attention to detail in customization has helped me achieve new levels of accuracy.",
      rating: 5
    },
    {
      name: 'Emma Wilson',
      role: 'Archery Coach',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
      content: 'I recommend GoldenGrip to all my students. The difference in their performance is remarkable.',
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl p-6 border border-gray-700"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="text-white font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-gray-300">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}