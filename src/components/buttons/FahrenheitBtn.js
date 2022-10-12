import React, { useContext } from "react";
import { TempScaleContext } from "../TempScale";

function FahrenheitBtn(props) {
  const tempScale = useContext(TempScaleContext);
  const isDisabled = useContext(TempScaleContext);

  // disable button when the other is active
  const scaleToggle = tempScale ? "active" : "disabled";
  const disableToggle = isDisabled ? "disabled" : "";
  return (
    <button
      disabled={disableToggle}
      onClick={props.click}
      data-status={scaleToggle}
      className="btn"
    >
      F
    </button>
  );
}
export default FahrenheitBtn;
