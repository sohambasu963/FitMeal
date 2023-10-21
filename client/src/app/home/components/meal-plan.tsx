import { ChevronDownIcon } from '@radix-ui/react-icons';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import mealsData from './meals-data';
import CoffeeIcon from '@mui/icons-material/Coffee';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';

export function MealPlan() {
  const meals = [
    {
      title: 'Spaghetti Carbonara',
      description: 'Creamy pasta with parmesan and egg',
      chef: 'Sofia Davis',
      email: 'm@example.com',
      avatar: '/avatars/01.png',
    },
    {
      title: 'Grilled Salmon',
      description: 'Salmon fillet with a lemon herb butter sauce',
      chef: 'Jackson Lee',
      email: 'p@example.com',
      avatar: '/avatars/02.png',
    },
    // ... Add two more meal options similarly
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-xl font-bold">Breakfast</CardTitle>
          <CoffeeIcon />
        </CardHeader>
        <CardContent className="pt-4">
          {mealsData.breakfast.map((meal, index) => (
            <div
              key={index}
              className="relative group hover:bg-gray-100 rounded transition"
              style={{ minHeight: '90px' }}
            >
              <h6 className="text-lg font-semibold">{meal.title}</h6>
              <p className="text-gray-500 mb-4">{meal.description}</p>
            </div>
          ))}
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-xl font-bold">Lunch</CardTitle>
          <LunchDiningIcon />
        </CardHeader>
        <CardContent className="pt-4">
          {mealsData.lunch.map((meal, index) => (
            <div
              key={index}
              className="relative group hover:bg-gray-100 rounded transition"
              style={{ minHeight: '90px' }}
            >
              <h6 className="text-lg font-semibold">{meal.title}</h6>
              <p className="text-gray-500 mb-4">{meal.description}</p>
            </div>
          ))}
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-xl font-bold">Dinner</CardTitle>
          <DinnerDiningIcon />
        </CardHeader>
        <CardContent className="pt-4">
          {mealsData.dinner.map((meal, index) => (
            <div
              key={index}
              className="relative group hover:bg-gray-100 rounded transition"
              style={{ minHeight: '90px' }}
            >
              <h6 className="text-lg font-semibold">{meal.title}</h6>
              <p className="text-gray-500 mb-4">{meal.description}</p>
            </div>
          ))}
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-xl font-bold">Snacks</CardTitle>
          <BakeryDiningIcon />
        </CardHeader>
        <CardContent className="pt-4">
          {mealsData.snacks.map((meal, index) => (
            <div
              key={index}
              className="relative group hover:bg-gray-100 rounded transition"
              style={{ minHeight: '90px' }}
            >
              <h6 className="text-lg font-semibold">{meal.title}</h6>
              <p className="text-gray-500 mb-4">{meal.description}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
