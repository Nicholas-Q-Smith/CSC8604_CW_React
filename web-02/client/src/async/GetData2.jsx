import React from "react";


/*
Getting sensor data specifically for plot 2.
*/

export default function GetData2() {


    // for getting api verification
    const [data, setData] = React.useState(null);


    // for getting sensor data JSON object
    const [vals, setVals] = React.useState({});

    // for getting plant data JSON object
    const [plantvals, setPlantVals] = React.useState({});

    React.useEffect(() => {


      //api verification
      async function fetchStatus() {
        const response = await fetch("/api");
        const json = await response.json();
        setData(json.message);
      }

      
      //sensor data
      async function fetchSensors() {
        const response = await fetch("/sensors2");
        const json = await response.json();
        setVals(json);
      }

      //plant data
      async function fetchBestMatch() {
        try {
          const response = await fetch("/get-best-match2");
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
    
    //returning all data together
    return {data, vals, plantvals};
}