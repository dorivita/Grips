import React from 'react';
import { Check } from 'lucide-react';

const materials = [
  {
    id: 'premium-polymer',
    name: 'Premium Competition Polymer',
    description: 'Tournament-grade material with optimal rigidity and feedback',
    properties: ['High-impact resistant', 'Weather-proof', 'Anti-slip surface']
  },
  {
    id: 'carbon-composite',
    name: 'Carbon Fiber Composite',
    description: 'Lightweight and incredibly durable with premium feel',
    properties: ['Ultra-lightweight', 'Maximum durability', 'Temperature stable']
  },
  {
    id: 'flex-elite',
    name: 'FlexElite™ Compound',
    description: 'Advanced material with customizable flex zones',
    properties: ['Adaptive grip', 'Shock absorbing', 'Pressure distribution']
  }
];

interface MaterialSelectorProps {
  value: any;
  onChange: (key: string, value: any) => void;
}

export function MaterialSelector({ value, onChange }: MaterialSelectorProps) {
  return (
    <div className="space-y-4">
      {materials.map((material) => (
        <button
          key={material.id}
          onClick={() => onChange('material', material.id)}
          className={`w-full text-left p-6 rounded-xl border-2 transition-all ${
            value.material === material.id
              ? 'border-emerald-500 shadow-lg shadow-emerald-500/20'
              : 'border-gray-700 hover:border-gray-600'
          }`}
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {material.name}
              </h3>
              <p className="text-gray-400 mb-4">{material.description}</p>
              <div className="flex flex-wrap gap-2">
                {material.properties.map((property) => (
                  <span
                    key={property}
                    className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300"
                  >
                    {property}
                  </span>
                ))}
              </div>
            </div>
            {value.material === material.id && (
              <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-white" />
              </div>
            )}
          </div>
        </button>
      ))}
    </div>
  );
}