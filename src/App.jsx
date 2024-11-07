import { useState } from 'react';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import './App.css';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch recipes based on ingredient
  const fetchRecipes = async (ingredient) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      console.log(data);
      setRecipes(data.meals || []); // If no recipes found, set an empty array
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
    setLoading(false);
  };

  return (
    <div className="App bg-black text-white min-h-screen ">
      <h1 className="text-2xl font-sans">Welcome, Taylor!</h1>
      <p className="text-lg mt-2 font-serif">
        Search for recipes based on the ingredients you have.
      </p>
      <div className="m-10">
        <SearchBar fetchRecipes={fetchRecipes} />
        {loading ? <p>Loading recipes...</p> : <RecipeList recipes={recipes} />}
      </div>
    </div>
  );
};

export default App;
