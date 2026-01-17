// Render data from database
import { useParams } from "react-router";

export default function RecipePosts() {
  let { recipeName } = useParams();
  return (
    <>
      <h2>Recipe Name {recipeName}</h2>
    </>
  );
}
