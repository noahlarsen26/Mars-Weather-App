import React, { useState } from "react";
import FahrenheitBtn from "./buttons/FahrenheitBtn";
import CelsiusBtn from "./buttons/CelsiusBtn";

// export const TempScaleContext = React.createContext();

function TempScale(props) {
  // toggle between fahrenheit and celsius
  const [tempScale, toggleScale] = useState(true);
  const [isDisabled, setDisabled] = useState(false);
  const [highTemperature, highTempHandler] = useState(props.high_temp);
  const [lowTemperature, lowTempHandler] = useState(props.low_temp);

  // change temp to celsius
  function changeCelsTemp() {
    toggleScale((prevScale) => !prevScale);
    setDisabled((prevDis) => !prevDis);
    highTempHandler((prevHighTemp) => ((prevHighTemp - 32) * 5) / 9);
    lowTempHandler((prevLowTemp) => ((prevLowTemp - 32) * 5) / 9);
  }
  // change temp to fahrenheit
  function changeFahrTemp() {
    toggleScale((prevScale) => !prevScale);
    setDisabled((prevDis) => !prevDis);
    highTempHandler((prevHighTemp) => (prevHighTemp * 9) / 5 + 32);
    lowTempHandler((prevLowTemp) => (prevLowTemp * 9) / 5 + 32);
  }

  return (
    <div className="current-temp">
      <div className="current-cont">
        <h2>high: {highTemperature.toFixed(0)}°</h2>
        <FahrenheitBtn
          tempScale={tempScale}
          isDisabled={isDisabled}
          click={changeFahrTemp}
        ></FahrenheitBtn>
        <span>|</span>
        <CelsiusBtn
          tempScale={tempScale}
          isDisabled={isDisabled}
          click={changeCelsTemp}
        ></CelsiusBtn>
      </div>
      <div className="current-cont">
        <h2>low: {lowTemperature.toFixed(0)}°</h2>
        <FahrenheitBtn
          tempScale={tempScale}
          isDisabled={isDisabled}
          click={changeFahrTemp}
        ></FahrenheitBtn>
        <span>|</span>
        <CelsiusBtn
          tempScale={tempScale}
          isDisabled={isDisabled}
          click={changeCelsTemp}
        ></CelsiusBtn>
      </div>
    </div>
  );
}

export default TempScale;
