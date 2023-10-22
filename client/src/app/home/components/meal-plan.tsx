import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import mealsData from './meals-data';
import { NutritionalInfo } from './nutritional-info';
import CoffeeIcon from '@mui/icons-material/Coffee';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';

interface MealItemsProps {
  data: any;
  onMealSelect: (meal: any) => void;
}

function MealItems({ data, onMealSelect }: MealItemsProps) {
  const [selectedMeal, setSelectedMeal] = useState(data[0]);

  const handleMealSelect = (meal: any) => {
    setSelectedMeal(meal);
    onMealSelect(meal);
  };

  return (
    data.map((meal: any, index: number) => (
      <button
        key={index}
        className={`relative group rounded transition h-32 w-full px-1 border-b py-2 ${selectedMeal === meal ? 'bg-primary text-white' : 'hover:bg-gray-100 text-black'} `}
        onClick={() => setSelectedMeal(meal)}
      >
        <div className="flex justify-between items-center space-x-4">
          <div className="text-left flex-1">
            <h6 className={`text-lg font-semibold ${selectedMeal === meal ? 'text-white' : 'text-black'}`}>{meal.title}</h6>
            <p className={`text-gray-500 text-sm ${selectedMeal === meal ? 'text-white' : 'text-black'}`}>{meal.description}</p>
          </div>
          <NutritionalInfo info={meal.nutritionalInfo} />
        </div>
      </button>
    ))
  );
}


export function MealPlan() {
  const [mealCalories, setMealCalories] = useState({ breakfast: 0, lunch: 0, dinner: 0, snacks: 0 });

  const handleMealSelect = (mealType: string, meal: any) => {
    setMealCalories(prev => ({ ...prev, [mealType]: meal.calories }));
  };

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-xl font-bold">Breakfast</CardTitle>
          <CoffeeIcon />
        </CardHeader>
        <CardContent className="pt-4 my-2">
          <MealItems data={mealsData.breakfast} onMealSelect={(meal) => handleMealSelect('breakfast', meal)} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-xl font-bold">Lunch</CardTitle>
          <LunchDiningIcon />
        </CardHeader>
        <CardContent className="pt-4 my-2">
        <MealItems data={mealsData.lunch} onMealSelect={(meal) => handleMealSelect('lunch', meal)} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-xl font-bold">Dinner</CardTitle>
          <DinnerDiningIcon />
        </CardHeader>
        <CardContent className="pt-4 my-2">
        <MealItems data={mealsData.dinner} onMealSelect={(meal) => handleMealSelect('dinner', meal)} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-xl font-bold">Snacks</CardTitle>
          <BakeryDiningIcon fontSize='large'/>
        </CardHeader>
        <CardContent className="pt-4">
        <MealItems data={mealsData.snacks} onMealSelect={(meal) => handleMealSelect('snacks', meal)} />
        </CardContent>
      </Card>
    </div>
  );
}
