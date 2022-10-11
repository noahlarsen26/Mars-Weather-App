import TempScale from "./TempScale";

function CurrentWeather(props) {
  return (
    <div className="hero-weather-cont">
      <div className="current">
        <div className="current-date">
          <h2>sol {props.sol}</h2>
          <h2>{props.date}</h2>
        </div>
        <TempScale
          high_temp={props.high_temp}
          low_temp={props.low_temp}
        ></TempScale>
      </div>
    </div>
  );
}

export default CurrentWeather;
