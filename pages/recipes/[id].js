import { useRouter } from 'next/router';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

export default function RecipeDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    if (id) {
      // Fetch recipe details from API
      axios.get(`/api/recipes/${id}`).then(response => {
        setRecipe(response.data);
      });
    }
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  const macronutrientData = {
    labels: ['Protein', 'Carbs', 'Fat'],
    datasets: [
      {
        data: [recipe.nutrition.protein, recipe.nutrition.carbs, recipe.nutrition.fat],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
      }
    ]
  };

  const nutritionData = {
    labels: ['Calories', 'Protein', 'Carbs', 'Fat', 'Fiber', 'Sugar'],
    datasets: [
      {
        label: 'Amount',
        data: [
          recipe.nutrition.calories,
          recipe.nutrition.protein,
          recipe.nutrition.carbs,
          recipe.nutrition.fat,
          recipe.nutrition.fiber,
          recipe.nutrition.sugar
        ],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex flex-col md:flex-row">
        <div className="w-full md:hidden">
          <div className="relative h-64">
            <img 
              src={recipe.image} 
              alt={recipe.title} 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end">
              <div className="text-white p-4">
                <h2 className="text-2xl font-bold mb-2">{recipe.title}</h2>
                <p className="text-sm">{recipe.ingredients.length} ingredients | {recipe.steps.length} steps</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4 md:p-8 overflow-y-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-orange-500">{recipe.title}</h1>
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-6">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">Ingredients</h2>
            <ul className="list-disc list-inside mb-4 space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="text-gray-700">{ingredient}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-6">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">Preparation Steps</h2>
            <ol className="list-decimal list-inside space-y-4">
              {recipe.steps.map((step, index) => (
                <li key={index} className="text-gray-700">
                  <span className="font-semibold">Step {index + 1}:</span> {step}
                </li>
              ))}
            </ol>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-6">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">Nutrition Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Macronutrients</h3>
                <Doughnut data={macronutrientData} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Nutrition Breakdown</h3>
                <Bar
                  data={nutritionData}
                  options={{
                    scales: {
                      y: {
                        beginAtZero: true
                      }
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block w-1/2 relative">
          <img 
            src={recipe.image} 
            alt={recipe.title} 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end">
            <div className="text-white p-8">
              <h2 className="text-3xl font-bold mb-2">{recipe.title}</h2>
              <p className="text-lg">{recipe.ingredients.length} ingredients | {recipe.steps.length} steps</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
