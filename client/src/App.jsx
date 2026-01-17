// Set up a routing system and import relevant components
// Have a component for your root route
import "./App.css";
import { Routes, Route } from "react-router";
import HomePage from "./components/HomePage";
import NewRecipeForm from "./components/NewRecipeForm";
import RecipePosts from "./components/RecipePosts";
import NotFoundPage from "./components/NotFoundPage";
import AllRecipes from "./components/AllRecipes";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/new-recipe"} element={<NewRecipeForm />} />
        <Route path={"/all-recipes"} element={<AllRecipes />}>
          <Route path={":recipeName"} element={<RecipePosts />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
