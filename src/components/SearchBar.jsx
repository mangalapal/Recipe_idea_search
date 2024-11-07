import { useState } from 'react';

const SearchBar = ({ fetchRecipes }) => {
  const [ingredient, setIngredient] = useState('');

  const handleSearch = () => {
    console.log(ingredient);
    if (ingredient.trim()) {
      fetchRecipes(ingredient);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter an ingredient..."
        name="search"
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
        className="text-black rounded-lg shadow-lg p-6"
      />

      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white px-5 rounded-md font-serif text-lg hover:bg-blue-700 transition-all shadow-lg"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
