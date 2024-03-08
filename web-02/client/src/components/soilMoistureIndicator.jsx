import React from 'react';

import {
  LinearGauge, Scale, MinorTick, Export, Title, Font, Label,
} from 'devextreme-react/linear-gauge';

function SoilMoistureIndicator () {
  return (
    <LinearGauge
      id="gauge"
      value={10}
    >
      <Scale
        startValue={0}
        endValue={100}
        tickInterval={5}
        minorTickInterval={0.625}
      >
  

      
        <MinorTick visible={true} />
      </Scale>
      <Export enabled={false} />
      <Title text="Soil Moisture">
        <Font size={28} />
      </Title>
    </LinearGauge>
  );
}

export default SoilMoistureIndicator;
