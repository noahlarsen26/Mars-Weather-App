import Header from "./components/Header";
import Weather from "./components/Weather";
import { useState, useEffect } from "react";
function App() {
  // loading state
  const [isLoading, setIsLoading] = useState(true);
  // state to load the data
  const [loadedData, setLoadedData] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    // get data from nasa api
    fetch(
      "https://mars.nasa.gov/rss/api/?feed=weather&category=insight_temperature&feedtype=json&ver=1.0"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // turn the data into an array
        const sols = [];

        for (const key in data) {
          const sol = {
            id: key,
            ...data[key],
          };
          sols.push(sol);
          // get rid of unneeded items
          sols.splice(7, 2);
        }
        setIsLoading(false);
        setLoadedData(sols);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <div className="bg-img">
      <Header sols={loadedData}></Header>
      <Weather sols={loadedData}></Weather>
    </div>
  );
}

export default App;
