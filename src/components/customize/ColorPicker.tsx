import React from 'react';
import { Check } from 'lucide-react';

const colorOptions = [
  { name: 'Competition Green', value: '#2E7D32' },
  { name: 'Tactical Black', value: '#212121' },
  { name: 'Royal Blue', value: '#1565C0' },
  { name: 'Racing Red', value: '#C62828' },
  { name: 'Desert Tan', value: '#D4B996' },
  { name: 'Storm Grey', value: '#455A64' },
  { name: 'Arctic White', value: '#FAFAFA' },
  { name: 'Carbon Fiber', value: '#263238' }
];

interface ColorPickerProps {
  value: any;
  onChange: (key: string, value: any) => void;
}

export function ColorPicker({ value, onChange }: ColorPickerProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {colorOptions.map((color) => (
        <button
          key={color.value}
          onClick={() => onChange('color', color.value)}
          className={`relative p-4 rounded-xl border-2 transition-all ${
            value.color === color.value
              ? 'border-emerald-500 shadow-lg shadow-emerald-500/20'
              : 'border-gray-700 hover:border-gray-600'
          }`}
        >
          <div 
            className="w-full h-24 rounded-lg mb-3"
            style={{ backgroundColor: color.value }}
          />
          <span className="text-white font-medium">{color.name}</span>
          {value.color === color.value && (
            <div className="absolute top-2 right-2 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
              <Check className="w-4 h-4 text-white" />
            </div>
          )}
        </button>
      ))}
    </div>
  );
}