// Render data from database
import { useParams } from "react-router";
import { useEffect, useState } from "react";

export default function RecipePosts() {
  let { recipeName } = useParams();
  const [recipe, setRecipe] = useState([]);
  useEffect(() => {
    async function getRecipeInfo() {
      const response = await fetch(
        "http://localhost:8080/all-recipes/:recipeName",
      );
      const data = await response.json();
      setRecipe(data.rows);
    }
    getRecipeInfo();
  }, []);
  return (
    <>
      <section className="recipe-info">
        <h2>{recipeName}</h2>
        <h3>Ingredients:</h3>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <h3>Instructions:</h3>
        <ol>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ol>
      </section>
      <section className="comments-section">
        <h4>Commenter name</h4>
        <p>Comment</p>
      </section>
    </>
  );
}
