import React from 'react';
import { Button } from '../components/Button';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function OrderConfirmationPage() {
  const navigate = useNavigate();
  const orderNumber = Math.random().toString(36).substr(2, 9).toUpperCase();

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-500/10 mb-6">
            <CheckCircle2 className="w-12 h-12 text-emerald-500" />
          </div>
          
          <h1 className="text-4xl font-bold text-white mb-4">
            Thank You for Your Order!
          </h1>
          
          <p className="text-xl text-gray-400 mb-2">
            Order Number: #{orderNumber}
          </p>
          
          <p className="text-gray-400 mb-8">
            We'll send you an email confirmation with tracking details once your custom grip ships.
          </p>

          <div className="space-y-4">
            <Button
              onClick={() => navigate('/')}
              className="w-full sm:w-auto"
            >
              Return Home
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}