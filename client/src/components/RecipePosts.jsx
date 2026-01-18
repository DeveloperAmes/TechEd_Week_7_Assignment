// Render data from database
// import { useParams } from "react-router";
// import { useEffect, useState } from "react";

// export default function RecipePosts() {
//   let { RecipePosts } = useParams();
//   const [recipe, setRecipe] = useState([]);
//   useEffect(() => {
//     async function getRecipeInfo() {
//       const response = await fetch(
//         "https://teched-week-7-assignment-server.onrender.com/all-recipes/:recipeName",
//       );
//       const data = await response.json();
//       setRecipe(data.rows);
//     }
//     getRecipeInfo();
//   }, []);
//   return (
//     <>
//       <section className="recipe-info">
//         <h2>{RecipePosts}</h2>
//         <h3>Ingredients:</h3>
//         <ul>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//         </ul>
//         <h3>Instructions:</h3>
//         <ol>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//         </ol>
//       </section>
//       <section className="comments-section">
//         <h4>Commenter name</h4>
//         <p>Comment</p>
//       </section>
//     </>
//   );
// }
