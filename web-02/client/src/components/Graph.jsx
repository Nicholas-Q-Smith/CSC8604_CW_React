import React from "react";

export default function Graph(props) {

    if(props.activeTab == 1) {

        return (
            <div>
                <iframe width="450" height="260" style={{border: '1px solid #cccccc'}} 
                src="https://thingspeak.com/channels/2455916/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15">

                </iframe>

                <iframe width="450" height="260" style={{border: '1px solid #cccccc'}} 
                src="https://thingspeak.com/channels/2455916/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15">

                </iframe>

                <iframe width="450" height="260" style={{border: '1px solid #cccccc'}} 
                src="https://thingspeak.com/channels/2455916/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"></iframe>

            </div>
        );
    } else if(props.activeTab == 2) {
        return (
            <>
            <div>
                <iframe width="450" height="260" style={{border: '1px solid #cccccc'}} 
                src="https://thingspeak.com/channels/2480580/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"></iframe>

                <iframe width="450" height="260" style={{border: '1px solid #cccccc'}} 
                src="https://thingspeak.com/channels/2480580/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"></iframe>

                <iframe width="450" height="260" style={{border: '1px solid #cccccc'}} 
                src="https://thingspeak.com/channels/2480580/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"></iframe>

            </div>
            </>
            
        );
    }
}