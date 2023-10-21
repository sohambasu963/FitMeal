import React, { useState } from 'react';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MealPlan } from './meal-plan';
import { getGreeting, getTodayDate } from '@/lib/utils';

export default function Dashboard() {
  const [selectedTab, setSelectedTab] = useState('Meal Plan');
  const greeting = getGreeting();
  const todayDate = getTodayDate();

  const handleTabChange = (e: React.FormEvent<HTMLDivElement>) => {
    const value = (e.target as HTMLInputElement).value;
    console.log(value);
    setSelectedTab(value);
  };

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
          <Tabs
            defaultValue="Meal Plan"
            className="space-y-4"
            onChange={handleTabChange}
          >
            <TabsList>
              <TabsTrigger value="Meal Plan">Meal Plan</TabsTrigger>
              <TabsTrigger value="Macros">Macros &amp; Calories</TabsTrigger>
              <TabsTrigger value="Weight">Weight &amp; Muscle</TabsTrigger>
            </TabsList>
            <TabsContent value="Meal Plan" className="space-y-4">
              {selectedTab === 'Meal Plan' && <MealPlan />}
              {selectedTab === 'Macros' && <div>Macros</div>}
              {selectedTab === 'Weight' && <div>Weight</div>}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
