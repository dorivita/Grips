import React from 'react';
import { Slider } from '../ui/Slider';

interface PerformanceOptionsProps {
  value: any;
  onChange: (key: string, value: any) => void;
}

export function PerformanceOptions({ value, onChange }: PerformanceOptionsProps) {
  const textureOptions = [
    { id: 'smooth', label: 'Smooth' },
    { id: 'medium', label: 'Medium' },
    { id: 'aggressive', label: 'Aggressive' }
  ];

  const gripPatterns = [
    { id: 'competition', label: 'Competition' },
    { id: 'tactical', label: 'Tactical' },
    { id: 'precision', label: 'Precision' }
  ];

  return (
    <div className="space-y-8">
      {/* Hardness Slider */}
      <div>
        <label className="block text-white font-medium mb-2">
          Material Hardness
        </label>
        <div className="mb-2">
          <Slider
            value={[value.hardness]}
            onValueChange={(vals) => onChange('hardness', vals[0])}
            min={70}
            max={100}
            step={1}
          />
        </div>
        <div className="flex justify-between text-sm text-gray-400">
          <span>Softer (70)</span>
          <span>Current: {value.hardness}</span>
          <span>Harder (100)</span>
        </div>
      </div>

      {/* Surface Texture */}
      <div>
        <label className="block text-white font-medium mb-4">
          Surface Texture
        </label>
        <div className="grid grid-cols-3 gap-4">
          {textureOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => onChange('texture', option.id)}
              className={`p-4 rounded-xl border-2 transition-all ${
                value.texture === option.id
                  ? 'border-emerald-500 bg-emerald-500/10'
                  : 'border-gray-700 hover:border-gray-600'
              }`}
            >
              <span className={`block text-center ${
                value.texture === option.id ? 'text-emerald-400' : 'text-white'
              }`}>
                {option.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Grip Pattern */}
      <div>
        <label className="block text-white font-medium mb-4">
          Grip Pattern
        </label>
        <div className="grid grid-cols-3 gap-4">
          {gripPatterns.map((pattern) => (
            <button
              key={pattern.id}
              onClick={() => onChange('gripPattern', pattern.id)}
              className={`p-4 rounded-xl border-2 transition-all ${
                value.gripPattern === pattern.id
                  ? 'border-emerald-500 bg-emerald-500/10'
                  : 'border-gray-700 hover:border-gray-600'
              }`}
            >
              <span className={`block text-center ${
                value.gripPattern === pattern.id ? 'text-emerald-400' : 'text-white'
              }`}>
                {pattern.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}