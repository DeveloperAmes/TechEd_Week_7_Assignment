import { Outlet, Link } from "react-router";
import { useEffect, useState } from "react";

export default function AllRecipes() {
  const [allRecipes, setAllRecipes] = useState([]);
  useEffect(() => {
    async function getAllRecipes() {
      const response = await fetch("http://localhost:8080/all-recipes");
      const data = await response.json();
      setAllRecipes(data.rows);
    }
    getAllRecipes();
  }, []);
  return (
    <>
      <section>
        <h2>All Recipes</h2>
        <Outlet />
        {allRecipes.map((recipe, index) => {
          return (
            <h4 key={index} className="recipe-card">
              {recipe.recipe_name}
            </h4>
          );
        })}
      </section>
    </>
  );
}
