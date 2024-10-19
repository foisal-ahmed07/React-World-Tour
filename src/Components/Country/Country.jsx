import { useState } from "react";
import "./country.css";
const Country = ({ country, handleVisitedContry }) => {
  const { name, flags, area, region, population } = country;
  console.log(country);
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };

  console.log(handleVisitedContry);
  return (
    <div className={`country ${visited ? "visited" : "non-visited"}`}>
      <h2>Name: {name?.common} </h2>
      <img src={flags.png} alt="" />
      <h3>Area: {area}</h3>
      <h3>Nationlaty: {region}</h3>
      <h3>population: {population}</h3>
      <button>
        Mark as visited
      </button>
      <button onClick={handleVisited}>{visited ? "Visited" : "visit"}</button>
      {visited ? "I have visited this country." : "I want to visit"}
    </div>
  );
};

export default Country;
