import React, { useContext } from "react";
import { ScaleContext } from "../TempScale";

function CelsiusBtn(props) {
  const tempScale = useContext(ScaleContext);
  const isDisabled = useContext(ScaleContext);
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
