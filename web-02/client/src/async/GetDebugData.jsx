import React from "react";


/*
Returns all the debug data from the server
Fulfils the /get-all-matches endpoint
The live data is fetched from 
sensor 2 for the humidity, soil moisture and temperature
simply for the sake of demonstration.
Plantvals returns all plants in the database.
*/

export default function GetDebugData() {
    const [data, setData] = React.useState(null);

    const [vals, setVals] = React.useState({});

    const [plantvals, setPlantVals] = React.useState({});

    React.useEffect(() => {
      async function fetchStatus() {
        const response = await fetch("/api");
        const json = await response.json();
        setData(json.message);
      }

      async function fetchSensors() {
        const response = await fetch("/sensors2");
        const json = await response.json();
        setVals(json);
      }

      async function fetchBestMatch() {
        try {
          const response = await fetch("/get-all-matches");
          const json = await response.json();
          setPlantVals({items: json}); 
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }

      fetchStatus();
      fetchSensors();
      fetchBestMatch();
    } , []);
    console.log("Returning: " + data, vals, plantvals);
    return {data, vals, plantvals};
}