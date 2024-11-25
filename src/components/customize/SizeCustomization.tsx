import React from 'react';
import { Slider } from '../ui/Slider';

interface SizeCustomizationProps {
  value: any;
  onChange: (key: string, value: any) => void;
}

export function SizeCustomization({ value, onChange }: SizeCustomizationProps) {
  const handleMeasurementChange = (key: string, newValue: number) => {
    onChange('measurements', {
      ...value.measurements,
      [key]: newValue
    });
  };

  const fingerSpacingOptions = [
    { id: 'narrow', label: 'Narrow' },
    { id: 'medium', label: 'Medium' },
    { id: 'wide', label: 'Wide' }
  ];

  return (
    <div className="space-y-8">
      {/* Palm Width */}
      <div>
        <label className="block text-white font-medium mb-2">
          Palm Width (mm)
        </label>
        <div className="mb-2">
          <Slider
            value={[value.measurements.palmWidth]}
            onValueChange={(vals) => handleMeasurementChange('palmWidth', vals[0])}
            min={70}
            max={120}
            step={1}
          />
        </div>
        <div className="flex justify-between text-sm text-gray-400">
          <span>70mm</span>
          <span>Current: {value.measurements.palmWidth}mm</span>
          <span>120mm</span>
        </div>
      </div>

      {/* Grip Circumference */}
      <div>
        <label className="block text-white font-medium mb-2">
          Grip Circumference (mm)
        </label>
        <div className="mb-2">
          <Slider
            value={[value.measurements.gripCircumference]}
            onValueChange={(vals) => handleMeasurementChange('gripCircumference', vals[0])}
            min={80}
            max={140}
            step={1}
          />
        </div>
        <div className="flex justify-between text-sm text-gray-400">
          <span>80mm</span>
          <span>Current: {value.measurements.gripCircumference}mm</span>
          <span>140mm</span>
        </div>
      </div>

      {/* Finger Spacing */}
      <div>
        <label className="block text-white font-medium mb-4">
          Finger Spacing
        </label>
        <div className="grid grid-cols-3 gap-4">
          {fingerSpacingOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => handleMeasurementChange('fingerSpacing', option.id)}
              className={`p-4 rounded-xl border-2 transition-all ${
                value.measurements.fingerSpacing === option.id
                  ? 'border-emerald-500 bg-emerald-500/10'
                  : 'border-gray-700 hover:border-gray-600'
              }`}
            >
              <span className={`block text-center ${
                value.measurements.fingerSpacing === option.id ? 'text-emerald-400' : 'text-white'
              }`}>
                {option.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}