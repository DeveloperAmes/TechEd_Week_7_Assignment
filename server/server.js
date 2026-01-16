import express from "express";
import cors from "cors";
import { dbPool } from "./dbConnect.js";

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.json({ message: "Server is up and running!" });
});

app.get("/recipes", async (req, res) => {
  const recipesData = await dbPool.query("SELECT * FROM wk7posts_recipes");
  res.json({ recipesData });
});

app.post("/new-recipe", (req, res) => {
  const newRecipeData = req.body.formValues;
  const query = dbPool.query(
    `INSERT INTO wk7posts_recipes (recipe_name, ingredients, instructions) VALUES ($1, $2, $3)`,
    [newRecipeData.name, newRecipeData.ingredients, newRecipeData.instructions]
  );
});
