import { Link } from "react-router";

export default function Header() {
  return (
    <header>
      <h1>Header</h1>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/all-recipes"}>Show all recipes</Link>
        <Link to={"/new-recipe"}>Add your own</Link>
      </nav>
    </header>
  );
}
