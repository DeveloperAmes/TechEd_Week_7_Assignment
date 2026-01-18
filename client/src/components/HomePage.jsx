import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    async function getRecipesData() {
      const response = await fetch("http://localhost:8080/recipes");
      const data = await response.json();
      const apiData = data.rows;
      console.log(apiData);
      return apiData;
    }
    getRecipesData();
  }, []);

  return (
    <section>
      <h3>Check out some of our most popular recipes:</h3>
      <div>
        <h4>Recipe 1</h4>
        <h4>Recipe 2</h4>
        <h4>Recipe 3</h4>
      </div>
      <div>Filter & results section</div>
    </section>
  );
}
