import { useRouter } from 'next/router';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

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
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">Preparation Steps</h2>
            <ol className="list-decimal list-inside space-y-4">
              {recipe.steps.map((step, index) => (
                <li key={index} className="text-gray-700">
                  <span className="font-semibold">Step {index + 1}:</span> {step}
                </li>
              ))}
            </ol>
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
