import { useState } from "react";
import "./country.css";

const Country = ({ country, handleVisitedContry, handleVisitedFlag }) => {

  const { name, flags, area, region, population } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };


  return (
    <div className={`country ${visited ? "visited" : "non-visited"}`}>

      <h2>Name: {name?.common} </h2>

      <img className="country-flag" src={flags.png} alt="" />

      <h3>Area: {area}</h3>

      <h3>Nationlaty: {region}</h3>

      <h3>population: {population}</h3>

      <button onClick={()=> handleVisitedContry(country)}>Mark as visited</button> <br /> <br />

      <button onClick={()=> handleVisitedFlag(country.flags.png)}>Add Visited Flag</button>  <br /> <br />

      <button onClick={handleVisited}>{visited ? "Visited" : "visit"}</button>  <br /> <br />

      {visited ? "I have visited this country." : "I want to visit"}

    </div>
  );
};

export default Country;
