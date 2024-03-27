import React from 'react';

import { useEffect } from 'react';

import {
  LinearGauge, Scale, MinorTick, Export, Title, Font, Label, ValueIndicator,
} from 'devextreme-react/linear-gauge';

import '../font.css';



function SoilMoistureIndicator (props) {

    const [SM, setSM] = React.useState({});

    let colour = '#000000';

    if(SM.sm < 20) {
        colour = '#fa3f32';
    } else if(SM.sm <= 50) {
        colour = '#f7b731';
    } else if(SM.sm <= 75) {
        colour = '#b3ff00';
    } else if(SM.sm <= 100) {
        colour = '#00c417';
    }

    async function fetchSM(page) {
        /* The logic for this function is hard coded for this case
        *  In a real application, this function should be more generic 
        and not rely on the page number to fetch the data, but it 
        allows automated fetching of the data for the pre-defined 
        three sensors. A regex / standard of api naming endpoints
        would allow this to simply deduce the endpoint from the
        page number.
        */

        if(page == 1) {
            const response = await fetch("/sensors");
            const json = await response.json();
            setSM(json);
        } else if(page == 2) {
            const response = await fetch("/sensors2");
            const json = await response.json();
            setSM(json);
        } 
    }


    useEffect(() => {

        fetchSM(Number(props.sensor));
        
        if(props.isAutoUpdating) {
            console.log("SM updating")
        } else {
            console.log("SM not updating")
        }

        let timerId;
        if(props.isAutoUpdating) {
            timerId = setInterval(() => {
                fetchSM(Number(props.sensor)); 
            }, 30000);

        }
        return () => clearInterval(timerId);


      }, [props.isAutoUpdating, props.sensor]); 

    

    return (
        <LinearGauge
            id="gauge"
            value={SM.sm}
        >

        <ValueIndicator color={colour} />
            <Scale
                startValue={0}
                endValue={100}
                tickInterval={5}
                minorTickInterval={0.625}
            >


            
                <MinorTick visible={true} />
            </Scale>
            <Export enabled={false} />
            <Title text={"Soil Moisture: " + SM.sm + "%"}>
                <Font size={28} family='Julius Sans One' />
            </Title>
        </LinearGauge>
    );
    }

export default SoilMoistureIndicator;
