import { useEffect, useState } from "react";
import "./App.css"
function App() {
   const [countries,setCountries] = useState([]);
   const [filtered,setFiltered] =useState([]);
   const [searchStr,setSearchStr] =useState("");
  useEffect(()=>{
      const getCountry= async()=>{
          
        try {
          const data = await fetch(' https://restcountries.com/v3.1/all');
          const json = await data.json();
          console.log(json)
          setCountries(json);
        } catch (error) {
          console.error(error.message)
        }
      }
    getCountry();
  },[])

  useEffect(()=>{
        
    const data = countries.filter((country)=>{
         return country.name.common.toLowerCase().includes(searchStr)
    })
    setFiltered(data)
  },[searchStr])
  
   const handleChange =(e)=>{
      
    const search = e.target.value;
    setSearchStr(search)
   }
  return (
    <>
      <input type="text" placeholder="Search for the Country" onChange={handleChange} />
      <div className="App">
        {searchStr === ""
          ? countries.map((country,ind) => {
              return (
                <div className="countryCard" key={ind}>
                  <img src={country.flags.png} alt={country.flag}></img>
                  <p>{country.name.common}</p>
                </div>
              );
            })
          : filtered.map((country,ind) => {
              return (
                <div className="countryCard" key={ind} >
                  <img src={country.flags.png} alt={country.flag}></img>
                  <p>{country.name.common}</p>
                </div>
              );
            })}
      </div>
    </>
  );
}

export default App;
