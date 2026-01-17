import { useState } from "react";

export default function NewRecipeForm() {
  const [formValues, setFormValues] = useState({
    recipe_name: "",
    ingredients: "",
    instructions: "",
  });
  function handleSubmit(event) {
    event.preventDefault();
    console.log(`The form values are ${formValues}`);
    fetch("https://teched-week-7-assignment-server.onrender.com/new-recipe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formValues),
    });
  }
  function handleChange(event) {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  }
  return (
    <section>
      <h2>Add a new recipe</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="recipe_name">Recipe Name:</label>
        <input
          type="text"
          name="recipe_name"
          required
          placeholder="e.g., Chicken Fajitas"
          value={formValues.recipe_name}
          onChange={handleChange}
        ></input>
        <label htmlFor="ingredients">Ingredients:</label>
        <input
          type="text"
          name="ingredients"
          required
          placeholder="500g chicken breast, 1 onion, 2 bell peppers..."
          value={formValues.ingredients}
          onChange={handleChange}
        ></input>
        <label htmlFor="instructions">Instructions:</label>
        <input
          type="text"
          name="instructions"
          required
          placeholder="1) Heat some oil in a pan..."
          value={formValues.instructions}
          onChange={handleChange}
        ></input>
        <button>Add recipe</button>
      </form>
    </section>
  );
}
