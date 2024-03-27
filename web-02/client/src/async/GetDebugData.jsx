import React from "react";


export default function GetData2() {
    const [data, setData] = React.useState(null);

    const [vals, setVals] = React.useState({});

    const [vals2, setVals2] = React.useState({});

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

      

      // async function fetchBestMatch() {
      //   const response = await fetch("/get-best-match");
      //   const json = await response.json();
      //   setPlantVals({items: plantvals});
       
      // }

      async function fetchBestMatch() {
        try {
          const response = await fetch("/get-all-matches");
          const json = await response.json();
          setPlantVals({items: json}); // Use `json` here instead of `plantvals`
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