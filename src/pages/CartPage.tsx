import React from 'react';
import { useCart } from '../contexts/CartContext';
import { Button } from '../components/Button';
import { Trash2, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function CartPage() {
  const { state, dispatch } = useCart();
  const navigate = useNavigate();

  const handleRemoveItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const getMaterialName = (id: string) => {
    const materials: Record<string, string> = {
      'premium-polymer': 'Premium Competition Polymer',
      'carbon-composite': 'Carbon Fiber Composite',
      'flex-elite': 'FlexElite™ Compound'
    };
    return materials[id] || id;
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-900 pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Your Cart is Empty</h2>
            <p className="text-gray-400 mb-8">Start customizing your perfect bow grip today!</p>
            <Button onClick={() => navigate('/customize')}>
              Start Customizing
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-8">Shopping Cart</h1>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {state.items.map((item) => (
                <div key={item.id} className="bg-gray-800 rounded-xl p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{item.name}</h3>
                      <p className="text-gray-400">${item.price.toFixed(2)}</p>
                    </div>
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <div className="space-y-2 text-sm text-gray-400">
                    <p>Material: {getMaterialName(item.customization.material)}</p>
                    <p>Hardness: {item.customization.hardness}</p>
                    <p>Texture: {item.customization.texture}</p>
                    <p>Pattern: {item.customization.gripPattern}</p>
                    <p>Palm Width: {item.customization.measurements.palmWidth}mm</p>
                    <p>Grip Circumference: {item.customization.measurements.gripCircumference}mm</p>
                    <p>Finger Spacing: {item.customization.measurements.fingerSpacing}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-800 rounded-xl p-6 h-fit">
              <h3 className="text-xl font-semibold text-white mb-4">Order Summary</h3>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span>${state.total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="border-t border-gray-700 pt-2 flex justify-between text-white font-semibold">
                  <span>Total</span>
                  <span>${state.total.toFixed(2)}</span>
                </div>
              </div>

              <Button
                className="w-full group"
                onClick={() => navigate('/checkout')}
              >
                Proceed to Checkout
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}