import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <>
      <h2>The webpage you requested could not be found.</h2>
      <Link to="/">Go back to Home page</Link>
    </>
  );
}
