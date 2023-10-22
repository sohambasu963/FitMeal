import React from 'react';
import { Progress } from '@/components/ui/progress';
import { PieChart } from './pie-chart';

export function Macros() {
  return (
    <div className="flex">
      {/* Right Half: Macros */}
      <div className="w-1/2 p-4">
        <h1 className="text-xl font-bold mb-4">Macros</h1>
        <div className="mt-4">
          <label className="block font-medium">Protein</label>
          <Progress value={70} />
        </div>
        <div className="mt-4">
          <label className="block font-medium">Fats</label>
          <Progress value={50} />
        </div>
        <div className="mt-4">
          <label className="block font-medium">Carbohydrates</label>
          <Progress value={30} />
        </div>
      </div>

      {/* Left Half: Pie Chart */}
      <div className="w-1/2 p-4">
        <h1 className="text-xl font-bold mb-4">Calories by Meal</h1>
        <PieChart />
      </div>
    </div>
  );
}
