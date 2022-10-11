import DailyWeather from "./DailyWeather";

function Weather(props) {
  return (
    <ul className="weather-cont">
      {props.sols.map((sol) => (
        <DailyWeather
          key={sol.id}
          sol={sol.id}
          date={sol.First_UTC?.split("T")[0] || "No data"}
          high_temp={sol.AT?.mx || "No data"}
          low_temp={sol.AT?.mn || "No data"}
        ></DailyWeather>
      ))}
    </ul>
  );
}

export default Weather;
