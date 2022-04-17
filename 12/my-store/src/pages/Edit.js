import React, { useState } from "react";

export default function Edit() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h1>Edit</h1>
      <h3>현재 닉네임: {"hwarari"}</h3>
      <form onSubmit={handleSubmit}>
        <label>
          변경할 닉네임:
          <input type="text" value={inputValue} onChange={handleChange} />
        </label>
      </form>
    </>
  );
}
