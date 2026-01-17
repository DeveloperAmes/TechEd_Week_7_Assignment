import { Link } from "react-router";

export default function SiteInfo() {
  return (
    <section>
      <h2>How To Use This Site</h2>
      <ul>
        <li>
          Use the filters on the <Link to={"/"}>homepage</Link> to search for
          recipes.
        </li>
        <li>
          If you want to browse all our recipes, click this link
          <Link to={"/all-recipes"}> show all recipes</Link>
        </li>
        <li>
          If you have an amazing recipe of your own that you would like to
          share,{" "}
          <Link to={"/new-recipe"}>follow this link to add your own.</Link>
        </li>
      </ul>
    </section>
  );
}
