import CurrentWeather from "./CurrentWeather";
function Header(props) {
  const lastElement = props.sols[props.sols.length - 1];
  return (
    <main className="mars">
      <article className="header-cont">
        <h1>latest weather from mars</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          facilis commodi blanditiis laborum tempora vel, aut tenetur corporis
          nihil voluptatem reprehenderit voluptatum, nobis sit itaque quidem
          natus laudantium soluta et! Atque consectetur quos ea facilis?
        </p>
      </article>
      <CurrentWeather
        sol={lastElement.id}
        date={lastElement.First_UTC?.split("T")[0] || "No data"}
        high_temp={lastElement.AT?.mx || "No data"}
        low_temp={lastElement.AT?.mn || "No data"}
      ></CurrentWeather>
    </main>
  );
}

export default Header;
