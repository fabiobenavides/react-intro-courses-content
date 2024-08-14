import "./App.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <nav>
        <link to="/about">About</link>
        <link to="/contact">Contact</link>
      </nav>
      <h1>My Website</h1>
    </div>
  );
}

export function About() {
  return (
    <div>
      <h1>About Us</h1>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
    </div>
  );
}

export function App() {
  return <Home />;
}
