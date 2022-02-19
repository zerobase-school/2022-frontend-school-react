import React, { useState } from "react";
import BoilingVerdict from "./BoilingVerdict";

const scaleNames = {
  c: "Celsius", // 섭씨
  f: "Fahrenheit", // 화씨
};

export default function TemperatureInput(props) {
  const [temperature, setTemperature] = useState(0);

  function handleChange(e) {
    setTemperature(e.target.value);
  }

  const scale = scaleNames[props.scale];

  return (
    <fieldset>
      <legend>Enter temperature in {scale}:</legend>
      <input value={temperature} onChange={handleChange} />
      <BoilingVerdict
        scale={props.scale}
        temperature={parseFloat(temperature)}
      />
    </fieldset>
  );
}
