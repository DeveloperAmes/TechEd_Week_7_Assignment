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

app.get(
  "https://teched-week-7-assignment-server.onrender.com/recipes",
  async (req, res) => {
    try {
      const recipesData = await dbPool.query("SELECT * FROM wk7posts_recipes");
      res.json(recipesData);
    } catch (error) {
      console.error(error);
    }
  },
);

app.post(
  "https://teched-week-7-assignment-server.onrender.com/new-recipe",
  (req, res) => {
    try {
      const newRecipeData = req.body;
      const query = dbPool.query(
        `INSERT INTO wk7posts_recipes (recipe_name, ingredients, instructions) VALUES ($1, $2, $3)`,
        [
          newRecipeData.recipe_name,
          newRecipeData.ingredients,
          newRecipeData.instructions,
        ],
      );
    } catch (error) {
      console.error(error);
    }
  },
);
