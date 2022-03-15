import React from "react";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <div>
      <h1>MainPage</h1>
      <Link to="/blog">Blog</Link> | <Link to="/tech">Tech</Link>
    </div>
  );
}
