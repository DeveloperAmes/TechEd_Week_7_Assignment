// Set up a routing system and import relevant components
// Have a component for your root route
import "./App.css";
import { Routes, Route } from "react-router";
import HomePage from "./components/HomePage";
import NewRecipeForm from "./components/NewRecipeForm";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new-recipe" element={<NewRecipeForm />} />
      </Routes>
    </>
  );
}

export default App;
