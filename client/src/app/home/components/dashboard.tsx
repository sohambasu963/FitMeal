import React from 'react';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MealPlan } from './meal-plan';
import { Macros } from './macros';
import { getGreeting, getTodayDate } from '@/lib/utils';

export default function Dashboard() {
  const greeting = getGreeting();
  const todayDate = getTodayDate();

  return (
    <div style={{ marginTop: '-12px' }}>
      <div className="md:hidden">
        <Image
          src="/examples/dashboard-light.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="block dark:hidden"
        />
        <Image
          src="/examples/dashboard-dark.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden flex-col md:flex">
        <div className="border-b"></div>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">
              {`${greeting}, Soham!`}
            </h2>
            <div className="flex items-center space-x-2">
              <h2 className="text-xl font-bold tracking-tight">{todayDate}</h2>
            </div>
          </div>
          <Tabs defaultValue="Meal Plan" className="space-y-4">
            <TabsList>
              <TabsTrigger value="Meal Plan">Meal Plan</TabsTrigger>
              <TabsTrigger value="Macros">Macros</TabsTrigger>
            </TabsList>
            <TabsContent value="Meal Plan" className="space-y-4">
              <MealPlan />
            </TabsContent>
            <TabsContent value="Macros" className="space-y-4">
              <Macros />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
