import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./countries.css";
const Countries = () => {
  const [countries, setCountries] = useState([]);

  const [visitedcountry, setVisitedcountry] = useState([]);

  const [visitedFlag, setVisitedFlag] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedContry = (country) => {
    const newVisitedCountry = [...visitedcountry, country];
    setVisitedcountry(newVisitedCountry);
  };

  const handleVisitedFlag = (flag) => {
    const newFlag = [...visitedFlag, flag];
    setVisitedFlag(newFlag);
  };

  return (
    <div>
      <h2>Countries: {countries.length}</h2>
      <div className="country-visit">
        <h2>Visited Countries: {visitedcountry.length}</h2>

        <ul>
          {visitedcountry.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      </div>

      <div className="flag-container">
        <h2>Visited Countries Flag: </h2>
        {visitedFlag.map((flag, idx) => (
          <img key={idx} className="visited-flag" src={flag}></img>
        ))}
      </div>

      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            handleVisitedContry={handleVisitedContry}
            handleVisitedFlag={handleVisitedFlag}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
