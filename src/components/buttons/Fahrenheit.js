import React, { useContext } from "react";
import { TempContext } from "../DailyWeather";

function Fahrenheit(props) {
  const scaleTemp = useContext(TempContext);
  const disabled = useContext(TempContext);
  const temperature = scaleTemp ? "active" : "disabled";
  const disableToggle = disabled ? "disabled" : "";

  return (
    <button
      className="btn"
      disabled={disableToggle}
      onClick={props.click}
      data-status={temperature}
    >
      F
    </button>
  );
}
export default Fahrenheit;
