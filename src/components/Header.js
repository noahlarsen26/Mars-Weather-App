import CurrentWeather from "./CurrentWeather";
function Header(props) {
  // get last value from sols array
  const lastEl = props.sols[props.sols.length - 1];

  return (
    <main className="mars-header">
      <article className="header-cont">
        <h1>latest weather from mars</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          facilis commodi blanditiis laborum tempora vel, aut tenetur corporis
          nihil voluptatem reprehenderit voluptatum, nobis sit itaque quidem
          natus laudantium soluta et! Atque consectetur quos ea facilis?
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
