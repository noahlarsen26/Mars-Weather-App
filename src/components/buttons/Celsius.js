import React, { useContext } from "react";
import { TempContext } from "../DailyWeather";

function Celsius(props) {
  const scaleTemp = useContext(TempContext);
  const disabled = useContext(TempContext);

  // disable button when the other is active
  const temperature = scaleTemp ? "disabled" : "active";
  const disableToggle = disabled ? "" : "disabled";

  return (
    <button
      className="btn"
      disabled={disableToggle}
      onClick={props.click}
      data-status={temperature}
    >
      C
    </button>
  );
}

export default Celsius;
