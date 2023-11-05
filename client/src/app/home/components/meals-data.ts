const breakfastMeals = [
  {
    title: 'Eggs Benedict',
    description: 'Poached eggs with hollandaise sauce',
    nutritionalInfo: {
      calories: 400,
      protein: 20,
      carbs: 30,
      fat: 25,
    },
  },
  {
    title: 'French Toast',
    description: 'French toast with berries and cream',
    nutritionalInfo: {
      calories: 350,
      protein: 12,
      carbs: 45,
      fat: 15,
    },
  },
  {
    title: 'Pancakes',
    description: 'Pancakes with maple syrup and bacon',
    nutritionalInfo: {
      calories: 520,
      protein: 15,
      carbs: 90,
      fat: 15,
    },
  },
];

const lunchMeals = [
  {
    title: 'Spaghetti Carbonara',
    description: 'Creamy pasta with parmesan and egg',
    nutritionalInfo: {
      calories: 600,
      protein: 25,
      carbs: 75,
      fat: 30,
    },
  },
  {
    title: 'Grilled Salmon',
    description: 'Salmon fillet with a lemon herb butter sauce',
    nutritionalInfo: {
      calories: 500,
      protein: 45,
      carbs: 0,
      fat: 30,
    },
  },
  {
    title: 'Chicken Caesar Salad',
    description: 'Chicken with lettuce, parmesan and croutons',
    nutritionalInfo: {
      calories: 350,
      protein: 30,
      carbs: 15,
      fat: 15,
    },
  },
];

const dinnerMeals = [
  {
    title: 'Chicken Tikka Masala',
    description: 'Chicken in a creamy tomato sauce',
    nutritionalInfo: {
      calories: 570,
      protein: 35,
      carbs: 50,
      fat: 25,
    },
  },
  {
    title: 'Beef Stroganoff',
    description: 'Beef in a creamy mushroom sauce',
    nutritionalInfo: {
      calories: 700,
      protein: 40,
      carbs: 60,
      fat: 35,
    },
  },
  {
    title: 'Steak and Chips',
    description: 'Sirloin steak with chips and peppercorn sauce',
    nutritionalInfo: {
      calories: 800,
      protein: 50,
      carbs: 70,
      fat: 40,
    },
  },
];

const snacksMeals = [
  {
    title: 'Cookies',
    description: '2 large chocolate chip cookies',
    nutritionalInfo: {
      calories: 150,
      protein: 2,
      carbs: 20,
      fat: 7,
    },
  },
  {
    title: 'Ice Cream',
    description: 'Vanilla ice cream with chocolate sauce',
    nutritionalInfo: {
      calories: 200,
      protein: 4,
      carbs: 25,
      fat: 10,
    },
  },
  {
    title: 'Chocolate Brownie',
    description: 'Chocolate brownie with ice cream',
    nutritionalInfo: {
      calories: 400,
      protein: 5,
      carbs: 50,
      fat: 20,
    },
  },
];

const mealsData = {
  breakfast: breakfastMeals,
  lunch: lunchMeals,
  dinner: dinnerMeals,
  snacks: snacksMeals,
};

export default mealsData;
