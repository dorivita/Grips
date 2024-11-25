import React from 'react';
import { Target } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center">
      <span className="text-2xl font-bold">G</span>
      <Target className="w-7 h-7 text-amber-500 mx-[-2px]" />
      <span className="text-2xl font-bold">ldenGrip</span>
    </div>
  );
}