import React from 'react';
import { Logo } from '@/components/ui/logo';

export function Topbar() {
  return (
    <div className="relative hidden h-full flex-col p-5  text-white dark:border-r lg:flex">
      <div className="relative z-20 flex items-center text-black text-lg font-medium">
        <Logo />
        FitMeal AI
      </div>
    </div>
  );
}
