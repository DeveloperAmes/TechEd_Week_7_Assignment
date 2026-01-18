// Render data from database
// import { useParams } from "react-router";
import { useEffect, useState } from "react";

export default function RecipePosts() {
  // let { RecipePosts } = useParams();
  const [recipe, setRecipe] = useState([]);
  useEffect(() => {
    async function getRecipeInfo() {
      const response = await fetch(
        "https://teched-week-7-assignment-server.onrender.com/all-recipes/:recipeName",
      );
      const data = await response.json();
      setRecipe(data.rows);
    }
    getRecipeInfo();
  }, []);
  return (
    <>
      <section className="recipe-info">
        {recipe.map((info, index) => {
          return (
            <>
              <h2 key={index}>{info.recipe_name}</h2>
              <h3 key={index}>{info.ingredients}</h3>
              <h3 key={index}>{info.instructions}</h3>
            </>
          );
        })}
      </section>
      <section className="comments-section">
        <h4>Commenter name</h4>
        <p>Comment</p>
      </section>
    </>
  );
}
