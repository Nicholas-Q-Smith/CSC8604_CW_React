import React from "react";

export default function AutoGetData2(autoUpdate) {
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
        const response = await fetch("/get-best-match");
        const json = await response.json();
        setPlantVals({ items: json }); // Corrected to use `json` directly
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    // Function to fetch all data
    function fetchAllData() {
      fetchStatus();
      fetchSensors();
      fetchBestMatch();
    }

    // Initial fetch
    fetchAllData();

    let interval = null;
    if (autoUpdate) {
      // Set an interval to fetch data every 30 seconds
      interval = setInterval(fetchAllData, 30000);
    }

    // Cleanup function to clear the interval when the component unmounts
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, []); // Depend on the `autoUpdate` prop so it re-runs if this prop changes

  console.log("Returning:", data, vals, plantvals);
  return { data, vals, plantvals };
}