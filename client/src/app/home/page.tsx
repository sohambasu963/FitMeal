'use client';
import React, { useState } from 'react';
import { Navbar } from './components/navbar';
import { Topbar } from './components/topbar';
import DashboardPage from './components/dashboard-page';
import FitnessPage from './components/fitness-page';
import MealsPage from './components/meals-page';

export default function HomePage() {
  const [currentComponent, setCurrentComponent] = useState('/dashboard');

  const handleNavigation = (component: string) => {
    setCurrentComponent(component);
  };

  let Component = DashboardPage;
  switch (currentComponent) {
    case '/dashboard':
      Component = DashboardPage;
      break;
    case '/fitness':
      Component = FitnessPage;
      break;
    case '/meals':
      Component = MealsPage;
      break;
    default:
      Component = DashboardPage;
      console.log(currentComponent);
      break;
  }

  return (
    <div className="hidden md:block">
      <Topbar />
      <div className="border-t">
        <div className="grid lg:grid-cols-7">
          <Navbar
            className="hidden lg:block"
            navigateTo={handleNavigation}
            currentComponent={currentComponent}
          />
          <div className="col-span-6 lg:border-l">
            <Component />
          </div>
        </div>
      </div>
    </div>
  );
}
