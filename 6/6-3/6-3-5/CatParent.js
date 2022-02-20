import React from "react";
import Cat from "./Cat";

export default function CatParent() {
  console.log("부모 컴포넌트 CatParent");

  return (
    <div>
      <h4> 고양이가 세상을 구한다 ️</h4>
      <div>
        <Cat />
      </div>
    </div>
  );
}
