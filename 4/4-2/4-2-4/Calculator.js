import React from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

export default function Calculator() {
  return (
    <>
      <TemperatureInput scale={"c"} />
      <TemperatureInput scale={"f"} />
    </>
  );
}
