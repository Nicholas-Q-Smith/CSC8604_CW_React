

import HumidityIndicator from '../components/HumidityIndicator';
import SoilMoistureIndicator from '../components/SoilMoistureIndicator';
import DigitalTemp from '../components/DigitalTemp';

import React, { useState, useEffect, useCallback } from "react";

export function FetchSensors(updateInterval = 30000) {
  const [vals, setVals] = useState({});

  // Using useCallback to ensure a stable reference
  const fetchSensors = useCallback(async () => {
    try {
      const response = await fetch("/sensors2");
      const json = await response.json();
      setVals(json);
    } catch (error) {
      console.error("Error fetching sensors:", error);
    }
  }, []); // Empty dependency array means this function is created once per component instance

  useEffect(() => {
    fetchSensors(); // Fetch immediately on mount
    const interval = setInterval(fetchSensors, updateInterval); // Set up auto-update
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [fetchSensors, updateInterval]); // fetchSensors is now stable and won't cause re-setup

    return (
        <>
        <HumidityIndicator humidity={Number(vals.rh)}/>

        <hr class="rounded"></hr>

        <SoilMoistureIndicator moisture={Number(vals.sm)}/>

        <hr class="rounded"></hr>

        <DigitalTemp temp={Number(vals.tmp)}/>

        <hr class="rounded"></hr>
        </>
    );
  }
  