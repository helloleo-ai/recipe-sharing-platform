import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    // Fetch recipes from API
    axios.get('/api/recipes').then(response => {
      setRecipes(response.data);
    });
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Recipe Sharing Platform</h1>
      <input
        type="text"
        placeholder="Search recipes..."
        value={search}
        onChange={handleSearch}
        className="border p-2 mb-4 w-full"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredRecipes.map(recipe => (
<Link key={recipe.id} href={`/recipes/${recipe.id}`} legacyBehavior>
            <a className="border p-4 rounded shadow hover:shadow-lg transition">
              <h2 className="text-2xl font-bold">{recipe.title}</h2>
              <p>{recipe.ingredients.join(', ')}</p>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
