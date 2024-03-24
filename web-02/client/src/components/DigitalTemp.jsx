import React, { useEffect } from 'react';
import './DigitalTemp.css';

import "../fonts/HammersmithOne-Regular.ttf";

function DigitalTemp(props) {

    const [temp, setTemp] = React.useState({});

    async function fetchTemp(page) {
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
            setTemp(json);
        } else if(page == 2) {
            const response = await fetch("/sensors2");
            const json = await response.json();
            setTemp(json);
        } 
    }
        /* This sets the auto-update interval for the sensor data.
        We have used 30 seconds as it is fetched every 30 seconds from 
        the sensors in our demonstration, but this would most likely
        be significantly reduced in the future for energy efficiency.
        */
        useEffect(() => {
            fetchTemp(Number(props.sensor));
            let timerId = setInterval(() => {
                fetchTemp(Number(props.sensor)); 
            }, 30000);
    
        return () => clearInterval(timerId);
    
    }, []); 
    
    /*
    Custom label setting if desired
    */

    let label = 'Ambient Temperature';

    return (
        <>
        <div className={'tempBoxL'}>
        <p className={'sensorLocL'}>{label}</p>
        <p style={{color: '#21437D'}} className={'tempIndicL'}>{temp.tmp}°</p>
        </div>
        </>
    );
}

export default DigitalTemp;