import React from 'react';

interface AnimatedGradientProps {
  colorFrom: string;
  colorTo: string;
  className?: string;
}

export default function AnimatedGradient({ 
  colorFrom, 
  colorTo,
  className = ''
}: AnimatedGradientProps) {
  return (
    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30 ${className}`}>
      <div 
        className={`absolute inset-0 rounded-full bg-gradient-to-r from-${colorFrom} to-${colorTo} blur-[100px] animate-gradient-shift`}
      />
    </div>
  );
}