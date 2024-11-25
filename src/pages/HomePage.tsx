import React from 'react';
import { Hero } from '../components/Hero';
import { Benefits } from '../components/Benefits';
import { ProductShowcase } from '../components/ProductShowcase';
import { Testimonials } from '../components/Testimonials';
import { Newsletter } from '../components/Newsletter';

export function HomePage() {
  return (
    <main>
      <Hero />
      <Benefits />
      <ProductShowcase />
      <Testimonials />
      <Newsletter />
    </main>
  );
}