import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

import Header from '../components/Header';
import Footer from '../components/Footer';

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
    <div className="bg-gray-100 min-h-screen flex flex-col">
          <Header />
          <main className="container mx-auto p-4 flex-grow">
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
            <a className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105">
              <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover mb-4 rounded-lg" />
                            <h2 className="text-2xl font-bold mb-2">{recipe.title}</h2>
              <p>{recipe.ingredients.join(', ')}</p>
            </a>
          </Link>
        ))}
      </div>
      </main>
            <section className="container mx-auto p-4">
              <h2 className="text-3xl font-bold mb-4">Yummy Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {recipes.map(recipe => (
                  <div key={recipe.id} className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105">
                    <h3 className="text-2xl font-bold mb-2">{recipe.title}</h3>
                    <p className="mb-2">{recipe.ingredients.join(', ')}</p>
                    <Link href={`/recipes/${recipe.id}`} legacyBehavior>
                      <a className="text-blue-500 hover:underline">Read more</a>
                    </Link>
                  </div>
                ))}
              </div>
            </section>
      <Footer />
    </div>
  );
}
