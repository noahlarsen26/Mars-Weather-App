import CurrentWeather from "./CurrentWeather";
function Header(props) {
  // get last value from sols array
  const lastEl = props.sols[props.sols.length - 1];

  return (
    <main className="mars-header">
      <article className="header-cont">
        <h1>latest weather from mars</h1>
        <p>
          NASA's InSight Mars Lander is takes measurements on the surface of
          Mars at Elysium Planitia, a flat, smooth plain near Mars' equator.
          Please note that there are sometimes problems with the sensors on Mars
          that result in missing data! Summaries of these data are available at{" "}
          <a href="https://mars.nasa.gov/insight/weather/">
            https://mars.nasa.gov/insight/weather/
          </a>
          .
        </p>
      </article>
      {/* render most recent weather */}
      <CurrentWeather
        sol={lastEl.id}
        date={lastEl.First_UTC?.split("T")[0] || "No data"}
        high_temp={lastEl.AT?.mx || "No data"}
        low_temp={lastEl.AT?.mn || "No data"}
      ></CurrentWeather>
    </main>
  );
}

export default Header;
