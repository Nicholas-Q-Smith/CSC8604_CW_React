import React from 'react';

import {
  LinearGauge, Scale, MinorTick, Export, Title, Font,
} from 'devextreme-react/linear-gauge';

function HumidityIndicator () {
  return (
    <LinearGauge
      id="gauge"
      value={4.3}
    >
      <Scale
        startValue={0}
        endValue={100}
        tickInterval={5}
        minorTickInterval={0.625}
      >
        <MinorTick visible={true} />
      </Scale>
      <Export enabled={true} />
      <Title text="Humidity">
        <Font size={28} />
      </Title>
    </LinearGauge>
  );
}

export default HumidityIndicator;
