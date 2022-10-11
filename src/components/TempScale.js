import React, { useState } from "react";
import FahrenheitBtn from "./FahrenheitBtn";
import CelsiusBtn from "./CelsiusBtn";

export const ScaleContext = React.createContext();

function TempScale(props) {
  const [tempScale, toggleScale] = useState(true);
  const [isDisabled, setDisabled] = useState(false);
  const [highTemperature, highTempHandler] = useState(props.high_temp);
  const [lowTemperature, lowTempHandler] = useState(props.low_temp);

  function tempScaleChange() {
    toggleScale((prevScale) => !prevScale);
    setDisabled((prevDis) => !prevDis);
    highTempHandler((prevHighTemp) => ((prevHighTemp - 32) * 5) / 9);
    lowTempHandler((prevLowTemp) => ((prevLowTemp - 32) * 5) / 9);
  }

  function changeFahrTemp() {
    toggleScale((prevScale) => !prevScale);
    setDisabled((prevDis) => !prevDis);
    highTempHandler((prevHighTemp) => (prevHighTemp * 9) / 5 + 32);
    lowTempHandler((prevLowTemp) => (prevLowTemp * 9) / 5 + 32);
  }

  return (
    <div className="current-temp">
      <h2>high: {highTemperature.toFixed(0)}°</h2>
      <ScaleContext.Provider value={(tempScale, isDisabled)}>
        <FahrenheitBtn click={changeFahrTemp}></FahrenheitBtn>
        <span>|</span>
        <CelsiusBtn click={tempScaleChange}></CelsiusBtn>
        <h2>low: {lowTemperature.toFixed(0)}°</h2>
        <FahrenheitBtn click={changeFahrTemp}></FahrenheitBtn>
        <span>|</span>
        <CelsiusBtn click={tempScaleChange}></CelsiusBtn>
      </ScaleContext.Provider>
    </div>
  );
}

export default TempScale;
