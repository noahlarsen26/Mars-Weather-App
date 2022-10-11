import React from "react";
import Fahrenheit from "./Fahrenheit";
import Celsius from "./Celsius";
import { useState } from "react";

export const TempContext = React.createContext();

function DailyWeather(props) {
  const [scaleTemp, toggleHandler] = useState(true);
  const [disabled, disabledHandler] = useState(false);
  const [highTemperature, highTempHandler] = useState(props.high_temp);
  const [lowTemperature, lowTempHandler] = useState(props.low_temp);

  function changeTemp() {
    toggleHandler((prevScale) => !prevScale);
    disabledHandler((prevDis) => !prevDis);
    highTempHandler((prevHighTemp) => ((prevHighTemp - 32) * 5) / 9);
    lowTempHandler((prevLowTemp) => ((prevLowTemp - 32) * 5) / 9);
  }

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
          <h4 className="sol">sol {props.sol}</h4>
        </div>
        <div>
          <h5 className="date">{props.date}</h5>
        </div>
        <div className="underline"></div>
        <div>
          <h5 className="high">high {highTemperature.toFixed(0)}°</h5>
          <Fahrenheit click={changeFahrTemp}></Fahrenheit>
          <span>|</span>
          <Celsius click={changeTemp}></Celsius>
        </div>
        <div>
          <h5 className="low">low {lowTemperature.toFixed(0)}°</h5>
          <Fahrenheit click={changeFahrTemp}></Fahrenheit>
          <span>|</span>
          <Celsius click={changeTemp}></Celsius>
        </div>
      </li>
    </TempContext.Provider>
  );
}

export default DailyWeather;
