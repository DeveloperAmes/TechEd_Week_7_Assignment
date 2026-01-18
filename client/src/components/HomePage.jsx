import { useEffect, useState } from "react";

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    async function getRecipesData() {
      const response = await fetch("http://localhost:8080");
      const data = await response.json();
      setRecipes(data.rows);
    }
    getRecipesData();
  }, []);

  return (
    <>
      <section className="popular-recipes-section">
        <h3>Check out some of our most popular recipes:</h3>
        <div className="popular-recipes-container">
          {recipes.map((recipe, index) => {
            return <h4 key={index}>{recipe.recipe_name}</h4>;
          })}
        </div>
      </section>
      <section className="filter-section">Filter & results section</section>
    </>
  );
}
