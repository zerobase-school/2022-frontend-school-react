import React from "react";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Main</h1>
      <button onClick={() => navigate("/detail")}>Go Detail Page</button>
    </div>
  );
}
