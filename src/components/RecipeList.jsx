import React from 'react';

const RecipeList = ({ recipes }) => {
  return (
    <div className="recipe-list">
      {recipes.length === 0 ? (
        <p className="font-serif font-semibold">
          No recipes found. Try a different ingredient!
        </p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.idMeal} className="recipe-card">
            <h2>{recipe.strMeal}</h2>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
