"use client";
import React, { useState } from 'react'
import { Navbar } from './components/navbar'
import { Topbar } from './components/topbar'
import Dashboard from './components/dashboard'
import Fitness from './components/fitness'

export default function HomePage() {
  const [currentComponent, setCurrentComponent] = useState('dashboard');

  const handleNavigation = (component: string) => {
    setCurrentComponent(component);
  };

  let Component = Dashboard; // default component
  switch (currentComponent) {
    case '/dashboard':
      Component = Dashboard;
      break;
    case '/fitness':
      Component = Fitness;
      break;
    default:
      Component = Dashboard; // default component
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