const getCategoryEmoji = (category) => {
  switch (category.toLowerCase()) {
    case 'pasta':
      return '🍝';
    case 'curry':
      return '🍛';
    case 'beef':
      return '🥩';
    case 'veggie':
      return '🥦';
    case 'pancakes':
      return '🥞';
    default:
      return '🍽️';
  }
};
import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    // Fetch recipes from API
    axios.get('/api/recipes').then(response => {
      setRecipes(response.data);
    });
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category === selectedCategory ? '' : category);
  };

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(search.toLowerCase()) &&
    (selectedCategory === '' || recipe.category === selectedCategory)
  );

  const categories = ['Pasta', 'Curry', 'Beef', 'Veggie', 'Pancakes'];

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="fixed top-4 left-4 z-50">
        <div className="bg-white p-2 rounded-full shadow-lg">
          <Image
            src="https://gibbonsgazette.org/wp-content/uploads/2022/11/Alfredo-Linguini-from-the-movie-Ratatouille-3.webp"
            alt="Chef Linguini"
            width={64}
            height={64}
            className="rounded-full object-cover"
          />
        </div>
      </div>
      <div className="flex justify-between items-center max-w-6xl mx-auto px-4 py-4">
        <Header />
      </div>
      <main className="container mx-auto p-8 flex-grow max-w-4xl">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-2 text-orange-500">Recipe Sharing Platform</h1>
          <p className="text-xl text-gray-600 mb-6">Discover, share, and enjoy delicious recipes from around the world</p>
          <div className="mb-6 flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategorySelect(category)}
                className={`px-4 py-2 rounded-full shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                  selectedCategory === category
                    ? 'bg-orange-500 text-white'
                    : 'bg-white text-gray-800 hover:bg-gray-100'
                }`}
              >
                <span className="text-xl mr-2">{getCategoryEmoji(category)}</span>
                <span className="font-semibold">{category}</span>
              </button>
            ))}
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
      <section className="container mx-auto p-8 bg-gray-100 rounded-xl shadow-inner">
        <h2 className="text-4xl font-bold mb-2 text-center text-gray-800">Nutrition Information</h2>
        <p className="text-xl text-center text-gray-600 mb-8">Our platform provides detailed nutrition information for each recipe, helping you make informed dietary choices.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-gray-800">Calories</h3>
              <p className="text-gray-600 mb-4">Each recipe includes the total calorie count, so you can manage your daily intake effectively.</p>
            </div>
          </div>
          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-gray-800">Macronutrients</h3>
              <p className="text-gray-600 mb-4">We break down the macronutrient content (protein, carbs, fat) for each recipe, helping you balance your diet.</p>
            </div>
          </div>
          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-gray-800">Micronutrients</h3>
              <p className="text-gray-600 mb-4">Our recipes also provide information on essential vitamins and minerals, ensuring you get a well-rounded diet.</p>
            </div>
          </div>
        </div>
      </section>
      <h2 className="text-4xl font-bold mb-2 text-center text-gray-800">Culinary Inspiration</h2>
      <p className="text-xl text-center text-gray-600 mb-8">Discover new flavors and cooking techniques</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map(recipe => (
          <div key={recipe.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="relative">
              <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
              <div className="absolute top-0 right-0 bg-orange-500 text-white px-3 py-1 rounded-bl-lg">
                {recipe.ingredients.length} ingredients
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-gray-800">{recipe.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-3">{recipe.steps[0]}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img src="https://i.pravatar.cc/40" alt="Author" className="w-8 h-8 rounded-full mr-2" />
                  <span className="text-sm text-gray-500">Chef Linguini</span>
                </div>
                <Link href={`/recipes/${recipe.id}`} legacyBehavior>
                  <a className="text-orange-500 hover:text-orange-600 font-semibold flex items-center">
                    Read more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
