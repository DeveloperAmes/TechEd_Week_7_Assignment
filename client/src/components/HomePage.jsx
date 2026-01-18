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
    <section>
      <h3>Check out some of our most popular recipes:</h3>
      <div>
        {recipes.map((recipe, index) => {
          return <h4 key={`recipe${index}`}>{recipe.recipe_name}</h4>;
        })}
      </div>
      <div>Filter & results section</div>
    </section>
  );
}
