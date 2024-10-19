import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./countries.css";
const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedcountry, setVisitedcountry] = useState([])
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedContry = (country) => {
    console.log(country);
  }




  return (
    <div>
      <h2>Countries: {countries.length}</h2>
      <div>
      <h5>Visited Countries: </h5>
      <ul>

      </ul>
      </div>
      <div className="country-container">
        {countries.map((country) => (
          <Country  key={country.cca3} country={country} handleVisitedContry={handleVisitedContry}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
