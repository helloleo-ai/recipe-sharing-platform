import { useRouter } from 'next/router';
import axios from 'axios';
import { useState, useEffect } from 'react';

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
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-auto mb-4" />
      <h2 className="text-2xl font-bold mb-2">Ingredients</h2>
      <ul className="list-disc list-inside mb-4">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-bold mb-2">Preparation Steps</h2>
      <ol className="list-decimal list-inside">
        {recipe.steps.map((step, index) => (
          <li key={index} className="mb-2">{step}</li>
        ))}
      </ol>
    </div>
  );
}
