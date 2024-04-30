import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch("https://restcountries.com/v3.1/all");
        const data = await resp.json();
        setCountries(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const data = countries.filter((country) =>
      country.name.common.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(data);
  }, [search]);

  return (
    <div>
      <div className="inp">
        <input
          type="text"
          placeholder="Enter a country"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="App">
        {search === ""
          ? countries.map((country) => {
              return (
                <div className="countryCard">
                  <img src={country.flags.png} alt={country.flag}></img>
                  <p>{country.name.common}</p>
                </div>
              );
            })
          :  filtered.length===0?<div>No data found</div>:filtered.map((country) => {
              return (
                <div className="countryCard">
                  <img src={country.flags.png} alt={country.flag}></img>
                  <p>{country.name.common}</p>
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default App;