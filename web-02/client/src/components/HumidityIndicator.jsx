import React from 'react';

import {
  LinearGauge, Scale, MinorTick, Export, Title, Font, Label, ValueIndicator,
} from 'devextreme-react/linear-gauge';


function HumidityIndicator (props) {
  return (
    <LinearGauge
      id="gauge"
      value={props.humidity}
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
      <Title text="Humidity">
        <Font size={28} />
      </Title>
    </LinearGauge>
  );
}

export default HumidityIndicator;
