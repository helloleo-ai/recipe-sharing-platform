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
      <div className="container mx-auto px-4 py-2 flex items-center space-x-4">
        <img src="https://gibbonsgazette.org/wp-content/uploads/2022/11/Alfredo-Linguini-from-the-movie-Ratatouille-3.webp" alt="Profile" className="w-12 h-12 rounded-full border-2 border-orange-500 object-cover" />
        <div>
          <h2 className="font-bold text-xl text-gray-800">Alfredo Linguini</h2>
          <p className="text-sm text-gray-600">@linguini_chef</p>
        </div>
      </div>
      <main className="container mx-auto p-8 flex-grow max-w-4xl">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-4 text-orange-500">Recipe Sharing Platform</h1>
<div className="mb-6 flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-orange-400 to-orange-600 text-white px-4 py-2 rounded-full shadow-md hover:from-orange-500 hover:to-orange-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50">
                <span className="text-xl mr-2">🍝</span>
                <span className="font-semibold">Pasta</span>
              </button>
              <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-4 py-2 rounded-full shadow-md hover:from-yellow-500 hover:to-yellow-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50">
                <span className="text-xl mr-2">🍛</span>
                <span className="font-semibold">Curry</span>
              </button>
              <button className="bg-gradient-to-r from-red-400 to-red-600 text-white px-4 py-2 rounded-full shadow-md hover:from-red-500 hover:to-red-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                <span className="text-xl mr-2">🥩</span>
                <span className="font-semibold">Beef</span>
              </button>
              <button className="bg-gradient-to-r from-green-400 to-green-600 text-white px-4 py-2 rounded-full shadow-md hover:from-green-500 hover:to-green-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                <span className="text-xl mr-2">🥦</span>
                <span className="font-semibold">Veggie</span>
              </button>
              <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-4 py-2 rounded-full shadow-md hover:from-blue-500 hover:to-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                <span className="text-xl mr-2">🥞</span>
                <span className="font-semibold">Pancakes</span>
              </button>
            </div>
            <input
        type="text"
        placeholder="Search recipes..."
        value={search}
        onChange={handleSearch}
        className="border p-2 mb-4 w-full rounded-lg"
      />
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecipes.map(recipe => (
          <Link key={recipe.id} href={`/recipes/${recipe.id}`} legacyBehavior>
            <a className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative">
                <img src={recipe.image} alt={recipe.title} className="w-full h-56 object-cover" />
                <div className="absolute top-0 left-0 bg-orange-500 text-white px-3 py-1 rounded-br-lg">
                  {recipe.ingredients.length} ingredients
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">{recipe.title}</h2>
                <p className="text-gray-600 mb-4">{recipe.ingredients.slice(0, 3).join(', ')}...</p>
                <div className="flex justify-between items-center">
                  <span className="text-orange-500 font-semibold">View Recipe</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
      </div>
            </main>
            <section className="container mx-auto p-4">
              <h2 className="text-3xl font-bold mb-4">Yummy Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {recipes.map(recipe => (
                  <div key={recipe.id} className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105">
                    <h3 className="text-2xl font-bold mb-2 text-orange-500">{recipe.title}</h3>
                    <p className="mb-2">{recipe.ingredients.join(', ')}</p>
                    <Link href={`/recipes/${recipe.id}`} legacyBehavior>
                      <a className="text-orange-500 hover:underline">Read more</a>
                    </Link>
                  </div>
                ))}
              </div>
            </section>
      <Footer />
    </div>
  );
}
