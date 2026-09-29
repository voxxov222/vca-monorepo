import React from 'react';
import { Wifi } from 'lucide-react';

interface HolographicLabelProps {
  grade?: number | string;
  gradeText?: string;
  serialNumber?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const HolographicLabel: React.FC<HolographicLabelProps> = ({
  grade = 10,
  gradeText = 'GEM MINT',
  serialNumber = 'VCA-000-000-001',
  size = 'md',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'px-2.5 py-1 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3.5 text-base'
  }[size];

  const logoSize = {
    sm: 'text-base font-black tracking-tighter',
    md: 'text-2xl font-black tracking-tighter',
    lg: 'text-3xl font-black tracking-tighter'
  }[size];

  const gradeNumSize = {
    sm: 'text-sm font-black',
    md: 'text-xl font-black',
    lg: 'text-2xl font-black'
  }[size];

  return (
    <div
      className={`relative inline-flex items-center justify-between rounded-md border border-amber-300/40 shadow-lg select-none overflow-hidden bg-holographic-brushed ${sizeClasses} ${className}`}
      style={{
        boxShadow: '0 4px 20px rgba(34, 211, 238, 0.2), inset 0 1px 0 rgba(255,255,255,0.6)'
      }}
    >
      {/* Iridescent shimmer overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-amber-300/20 pointer-events-none mix-blend-color-dodge opacity-80" />

      {/* Brand logo & vertical divider */}
      <div className="relative z-10 flex items-center gap-3">
        <span className={`font-display text-slate-950 ${logoSize}`}>
          VCA
        </span>
        <div className="h-6 w-[2px] bg-slate-900/80 rounded-full" />
      </div>

      {/* Grade & NFC Icon */}
      <div className="relative z-10 flex items-center gap-3">
        <div className="flex flex-col text-right">
          <div className="flex items-baseline justify-end gap-1 leading-none">
            <span className="text-[10px] font-bold text-slate-900 uppercase">#</span>
            <span className={`font-display text-slate-950 leading-none ${gradeNumSize}`}>
              {grade}
            </span>
          </div>
          <span className="text-[9px] font-extrabold tracking-widest text-slate-900/90 uppercase leading-tight">
            {gradeText}
          </span>
        </div>

        {/* Circular NFC Broadcast Symbol */}
        <div className="flex items-center justify-center w-7 h-7 rounded-full border-2 border-slate-900/90 bg-slate-900/10 backdrop-blur-xs text-slate-950">
          <Wifi className="w-4 h-4 rotate-90 stroke-[2.5]" />
        </div>
      </div>

      {/* Micro serial label at bottom if needed */}
      {serialNumber && (
        <div className="absolute bottom-[2px] left-3 z-10 text-[8px] font-mono tracking-wider text-slate-900/70 font-bold uppercase">
          {serialNumber}
        </div>
      )}
    </div>
  );
};
