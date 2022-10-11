import React, { useContext } from "react";
import { ScaleContext } from "./TempScale";

function FahrenheitBtn(props) {
  const tempScale = useContext(ScaleContext);
  const isDisabled = useContext(ScaleContext);
  const scaleToggle = tempScale ? "active" : "disabled";
  const disableToggle = isDisabled ? "disabled" : "";
  return (
    <button
      disabled={disableToggle}
      onClick={props.click}
      data-status={scaleToggle}
      className="fahrenheit btn"
    >
      F
    </button>
  );
}
export default FahrenheitBtn;
