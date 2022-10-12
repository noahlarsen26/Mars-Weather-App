import React from "react";
import Fahrenheit from "./buttons/Fahrenheit";
import Celsius from "./buttons/Celsius";
import { useState } from "react";

export const TempContext = React.createContext();

function DailyWeather(props) {
  // toggle between fahrenheit and celsius
  const [scaleTemp, toggleHandler] = useState(true);
  const [disabled, disabledHandler] = useState(false);
  const [highTemperature, highTempHandler] = useState(props.high_temp);
  const [lowTemperature, lowTempHandler] = useState(props.low_temp);

  // change temp to celsius
  function changeCelsTemp() {
    toggleHandler((prevScale) => !prevScale);
    disabledHandler((prevDis) => !prevDis);
    highTempHandler((prevHighTemp) => ((prevHighTemp - 32) * 5) / 9);
    lowTempHandler((prevLowTemp) => ((prevLowTemp - 32) * 5) / 9);
  }
  // change temp to fahrenheit
  function changeFahrTemp() {
    toggleHandler((prevScale) => !prevScale);
    disabledHandler((prevDis) => !prevDis);
    highTempHandler((prevHighTemp) => (prevHighTemp * 9) / 5 + 32);
    lowTempHandler((prevLowTemp) => (prevLowTemp * 9) / 5 + 32);
  }

  return (
    <TempContext.Provider value={(scaleTemp, disabled)}>
      <li className="weather">
        <div>
          <h4>sol {props.sol}</h4>
        </div>
        <div>
          <h5>{props.date}</h5>
        </div>
        <div>
          <h5>high {highTemperature.toFixed(0)}°</h5>
          <Fahrenheit click={changeFahrTemp}></Fahrenheit>
          <span>|</span>
          <Celsius click={changeCelsTemp}></Celsius>
        </div>
        <div>
          <h5>low {lowTemperature.toFixed(0)}°</h5>
          <Fahrenheit click={changeFahrTemp}></Fahrenheit>
          <span>|</span>
          <Celsius click={changeCelsTemp}></Celsius>
        </div>
      </li>
    </TempContext.Provider>
  );
}

export default DailyWeather;
