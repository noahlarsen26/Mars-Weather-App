import React from "react";
import FahrenheitBtn from "./buttons/FahrenheitBtn";
import CelsiusBtn from "./buttons/CelsiusBtn";
import { useState } from "react";

function DailyWeather(props) {
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
    <li className="weather">
      <div>
        <h4>sol {props.sol}</h4>
      </div>
      <div>
        <h5>{props.date}</h5>
      </div>
      <div>
        <h5>high {highTemperature.toFixed(0)}°</h5>
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
      <div>
        <h5>low {lowTemperature.toFixed(0)}°</h5>
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
    </li>
  );
}

export default DailyWeather;
