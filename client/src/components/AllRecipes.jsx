import { Outlet } from "react-router";
import RecipePosts from "./RecipePosts";

export default function AllRecipes() {
  return (
    <>
      <h2>All Recipes</h2>
      <Outlet />
    </>
  );
}
