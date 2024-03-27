import React from 'react';

import { useEffect } from 'react';

import {
  LinearGauge, Scale, MinorTick, Export, Title, Font, Label, ValueIndicator,
} from 'devextreme-react/linear-gauge';


import '../font.css';

import '../fonts/JuliusSansOne-Regular.ttf';

function HumidityIndicator (props) {

  const [humidity, setHum] = React.useState({});

  async function fetchHum() {
      /* The logic for this function is hard coded for this case
      *  In a real application, this function should be more generic 
      and not rely on the page number to fetch the data, but it 
      allows automated fetching of the data for the pre-defined 
      three sensors. A regex / standard of api naming endpoints
      would allow this to simply deduce the endpoint from the
      page number.
      */

      if(props.sensor == 1) {
          const response = await fetch("/sensors");
          const json = await response.json();
          setHum(json);
      } else if(props.sensor == 2) {
          const response = await fetch("/sensors2");
          const json = await response.json();
          setHum(json);
      } 
  }
      /* This sets the auto-update interval for the sensor data.
      We have used 30 seconds as it is fetched every 30 seconds from 
      the sensors in our demonstration, but this would most likely
      be significantly reduced in the future for energy efficiency.
      */
      useEffect(() => {
        fetchHum();
          let timerId = setInterval(() => {
              fetchHum(); 
          }, 30000);
  
      return () => clearInterval(timerId);
  
  }, []); 



  return (
    <LinearGauge
      id="gauge"
      value={Number(humidity.rh)}
    >

    <ValueIndicator
      color={"#FF0000"}
    />
  
      <Scale
        startValue={0}
        endValue={100}
        tickInterval={5}
        minorTickInterval={0.625}
      >
  

      
        <MinorTick visible={true} />
      </Scale>
      <Export enabled={false} />
      <Title text={"Humidity: " + humidity.rh + "%"}>
        <Font size={28} family='Julius Sans One'/>
      </Title>
    </LinearGauge>
  );
}

export default HumidityIndicator;
