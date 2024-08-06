export const recipes = [
  {
    id: 1,
    title: 'Spaghetti Carbonara',
    ingredients: ['Spaghetti', 'Eggs', 'Pancetta', 'Parmesan Cheese', 'Black Pepper'],
    steps: [
      'Boil the spaghetti.',
      'Fry the pancetta.',
      'Mix eggs and cheese.',
      'Combine all ingredients.',
      'Serve with black pepper.'
    ],
    image: 'https://images.pexels.com/photos/2703468/pexels-photo-2703468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    nutrition: {
      calories: 600,
      protein: 25,
      carbs: 70,
      fat: 30,
      fiber: 3,
      sugar: 2
    }
  },
  {
    id: 2,
    title: 'Chicken Curry',
    ingredients: ['Chicken', 'Curry Powder', 'Coconut Milk', 'Onions', 'Garlic', 'Ginger'],
    steps: [
      'Fry onions, garlic, and ginger.',
      'Add chicken and curry powder.',
      'Pour in coconut milk.',
      'Simmer until chicken is cooked.',
      'Serve with rice.'
    ],
    image: 'https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    nutrition: {
      calories: 450,
      protein: 35,
      carbs: 20,
      fat: 25,
      fiber: 5,
      sugar: 3
    }
  },
  // ... (update other recipes with nutrition information)
];
