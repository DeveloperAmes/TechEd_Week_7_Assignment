export default function NewRecipeForm() {
  return (
    <section>
      <h2>Add a new recipe</h2>
      <form>
        <label htmlFor="recipe_name">Recipe Name:</label>
        <input
          type="text"
          name="recipe_name"
          required
          placeholder="e.g., Chicken Fajitas"
        ></input>
        <label htmlFor="ingredients">Ingredients:</label>
        <input
          type="text"
          name="ingredients"
          required
          placeholder="500g chicken breast, 1 onion, 2 bell peppers..."
        ></input>
        <label htmlFor="instructions">Instructions:</label>
        <input
          type="text"
          name="instructions"
          required
          placeholder="1) Heat some oil in a pan..."
        ></input>
      </form>
    </section>
  );
}
