import React, { useState } from 'react';
import { ChevronRight, Palette, Grip, Dumbbell, Ruler } from 'lucide-react';
import { Button } from './Button';
import { ColorPicker } from './customize/ColorPicker';
import { MaterialSelector } from './customize/MaterialSelector';
import { PerformanceOptions } from './customize/PerformanceOptions';
import { SizeCustomization } from './customize/SizeCustomization';
import { useCart } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

export function CustomizeGrip() {
  const navigate = useNavigate();
  const { dispatch } = useCart();
  const [activeStep, setActiveStep] = useState(0);
  const [customization, setCustomization] = useState({
    color: '#2E7D32',
    material: 'premium-polymer',
    hardness: 85,
    texture: 'medium',
    gripPattern: 'competition',
    measurements: {
      palmWidth: 90,
      gripCircumference: 100,
      fingerSpacing: 'medium'
    }
  });

  const steps = [
    {
      title: 'Color Selection',
      icon: Palette,
      component: ColorPicker,
      description: 'Choose your perfect color combination'
    },
    {
      title: 'Material Properties',
      icon: Grip,
      component: MaterialSelector,
      description: 'Select material type and surface properties'
    },
    {
      title: 'Performance Settings',
      icon: Dumbbell,
      component: PerformanceOptions,
      description: 'Customize grip characteristics'
    },
    {
      title: 'Size & Fit',
      icon: Ruler,
      component: SizeCustomization,
      description: 'Input your measurements for perfect fit'
    }
  ];

  const handleUpdateCustomization = (key: string, value: any) => {
    setCustomization(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleAddToCart = () => {
    const item = {
      id: crypto.randomUUID(),
      name: 'Custom Bow Grip',
      price: 149.99,
      customization
    };
    
    dispatch({ type: 'ADD_ITEM', payload: item });
    navigate('/cart');
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Progress Steps */}
          <div className="flex justify-between mb-12">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`flex flex-col items-center w-1/4 ${
                  index < activeStep ? 'text-emerald-500' : 
                  index === activeStep ? 'text-white' : 'text-gray-500'
                }`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                  index <= activeStep ? 'sport-gradient' : 'bg-gray-800'
                }`}>
                  <step.icon className="w-6 h-6" />
                </div>
                <span className="text-sm font-medium">{step.title}</span>
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">
              {steps[activeStep].title}
            </h2>
            <p className="text-gray-400 mb-8">
              {steps[activeStep].description}
            </p>

            <div className="mb-8">
              {React.createElement(steps[activeStep].component, {
                value: customization,
                onChange: handleUpdateCustomization
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button
              variant="secondary"
              onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
              disabled={activeStep === 0}
            >
              Back
            </Button>
            <Button
              className="group"
              onClick={() => {
                if (activeStep < steps.length - 1) {
                  setActiveStep(prev => prev + 1);
                } else {
                  handleAddToCart();
                }
              }}
            >
              {activeStep === steps.length - 1 ? 'Add to Cart' : 'Next Step'}
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}