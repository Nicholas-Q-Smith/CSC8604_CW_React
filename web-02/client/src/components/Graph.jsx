import React from "react";

/*
Function takes props to determine which graph to display
either 1 for plot 1 graphs, or 2 for plot 2 graphs.
This utilises hard-coded iframes from ThingSpeak.
This will be changed to be more dynamic in the future, and 
expandable without mandating hard-coding, but serves as an 
example for the demonstration perfectly well.
*/

export default function Graph(props) {

    //Plot 1 iframes
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

    //Plot 2 iframes
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