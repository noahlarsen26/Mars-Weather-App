// import React, { useContext } from "react";
// import { TempScaleContext } from "../TempScale";

function FahrenheitBtn(props) {
  // const tempScale = useContext(TempScaleContext);
  // const isDisabled = useContext(TempScaleContext);

  const tempScale = props.tempScale;
  const isDisabled = props.isDisabled;

  // disable button when the other is active
  const temperature = tempScale ? "disabled" : "active";
  const disableToggle = isDisabled ? "disabled" : "";
  return (
    <button
      disabled={disableToggle}
      onClick={props.click}
      data-status={temperature}
      className="btn"
    >
      F
    </button>
  );
}
export default FahrenheitBtn;
