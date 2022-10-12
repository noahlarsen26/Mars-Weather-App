import React, { useContext } from "react";
import { TempScaleContext } from "../TempScale";

function CelsiusBtn(props) {
  const tempScale = useContext(TempScaleContext);
  const isDisabled = useContext(TempScaleContext);

  // disable button when the other is active
  const scaleToggle = tempScale ? "disabled" : "active";
  const disableToggle = isDisabled ? "" : "disabled";
  return (
    <button
      disabled={disableToggle}
      onClick={props.click}
      data-status={scaleToggle}
      className="btn"
    >
      C
    </button>
  );
}

export default CelsiusBtn;
