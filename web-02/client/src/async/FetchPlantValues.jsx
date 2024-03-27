export function FetchPlantVals(updateInterval = 30000) { // Default update interval set to 30 seconds
    const [plantvals, setPlantVals] = React.useState({});
  
    React.useEffect(() => {
      const fetchBestMatch = async () => {
        try {
          const response = await fetch("/get-best-match");
          const json = await response.json();
          setPlantVals({ items: json });
        } catch (error) {
          console.error("Error fetching plant values:", error);
        }
      };
  
      fetchBestMatch(); // Fetch immediately on mount
  
      const interval = setInterval(fetchBestMatch, updateInterval); // Set up auto-update
  
      return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [updateInterval]); // Re-run if updateInterval changes
  
    return plantvals;
  }
  