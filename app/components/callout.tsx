import React from 'react';

export function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-8 flex rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 p-4 dark:bg-neutral-900/30">
      <div className="flex w-4 items-center">
        <div className="h-full w-0.5 bg-white/50 dark:bg-neutral-500" />
      </div>
      <div className="flex-grow px-4">{children}</div>
    </div>
  );
} 