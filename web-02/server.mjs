import express from 'express'

import path from 'path'

import { fileURLToPath} from 'url'

import https from 'https'

import plant_env_match from './client/src/data/plant-env-match.json' with {type: "json"};

const app = express()

const currentFolder = path.dirname(fileURLToPath(import.meta.url))

let visitors = 0

/* These last sensor values allow caching
of the last valid values fetched from the sensors.
In case of erroneous values or sensor failure, the 
last valid values will be re-returned, preventing
the front-end from displaying erroneous or undefined data.

A more robust system for the sensor design and a means of 
notifying the users of this failure
should be implemented in the future
*/

let lastHumidity = 0;

let lastTemperature = 0;

let lastSoilMoisture = 0;


let lastHumidity2 = 0;

let lastTemperature2 = 0;

let lastSoilMoisture2 = 0;

//Port defined, 3001 differing from the front-end port of 3000

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});


/*
Confirmation of connection to the backend
Debug function
*/

app.get("/api", (req, res) => {
  res.json({message: `Connection Confirmed from Node.js Backend Proxy at Port: ${PORT}`})
});


/* This endpoint fetches the last 10 values from the sensor
channel and calculates the average humidity and temperature
values from them. It then compares these values to the
range of values for each plant classification and determines
whether there is a match. If there is a match, the plant
classification is returned to the front-end. 
This is for Plot 1.
*/

app.get('/get-best-match', (req, res) => {
  https.get(`https://api.thingspeak.com/channels/2455916/feeds.json?api_key=FCIJ1UCNZZHEORPO&results=10
    `, resp => {
    let data = "";

    // A chunk of data has been recieved.
    resp.on("data", chunk => {
      data += chunk;



    const obj = JSON.parse(data);
    
    // First and last values from those fetched

    let startPoint = obj.feeds.at(0).entry_id;

    let endPoint = obj.feeds.at(-1).entry_id;

    console.log("Start point " + startPoint + " End point " + endPoint)
    
    // Prints out JSON object

    console.log(obj);
    
    let feeds = obj.feeds;

    // Maps out only the field1 values from the feed.
    // This will need amendment as soon as the other 
    // sensors are added to the channel, adding them in.

    const field1Values = feeds.map(feed => feed.field1);

    const field2Values = feeds.map(feed => feed.field2);

    const field3Values = feeds.map(feed => feed.field3);
    
    // console.log("Working values: " + field1Values)
    
    let approvedHumidityValues = [];
    
    let approvedTemperatureValues = [];


    let value = 0;

    /* For some reason the sensor is misbehaving and sending values above 100
    so we need to filter those out. 
    It is likely an issue down to running the sensor on 3.3v right now, likely
    needs 5v to work properly...

    */
    for(value in field1Values) {
        if(value <= 100) {
            approvedHumidityValues.push(value);
        }
    }

    console.log(approvedHumidityValues)

    value = 0;

    /*
    Now we need to calculate the average humidity from the approved values
    This produces the mean for us
    */

    // let avgHumidity = approvedValues.reduce((a, b) => (a + b)) / approvedValues.length;
    for(let i = 0; i < approvedHumidityValues.length; i++) {
        value = value + Number(approvedHumidityValues[i]);
    }

    let avgHumidity = value / approvedHumidityValues.length;

    console.log(value);

    console.log("Average Humidity: " + avgHumidity);
    
    value = 0;

    for(value in field2Values) {
        if(value <= 100) {
            approvedTemperatureValues.push(value);
        }
    }

    console.log(approvedTemperatureValues)

    value = 0;

    for(let i = 0; i < approvedTemperatureValues.length; i++) {
        value = value + Number(approvedTemperatureValues[i]);
    }

    let avgTemperature = value / approvedTemperatureValues.length;

    console.log(value);



    // console.log(plant_env_match.PlantClassifications);


    let finalJOBJ = [];

    /*
    The below code iterates through all plant classifications and determines whether 
    after comparing the avg conditions to the range of conditions for each type, there is a match
    We are only using the soil moisture for now, but this will be expanded to include all
    sensor values in the future. I have retained the code condition from the demonstration for proof
    of purpose.
    */

    for(let iterable in plant_env_match.PlantClassifications) {
          
        if(range(plant_env_match.PlantClassifications[iterable].Conditions.SoilMoistureLowerBound, 
          plant_env_match.PlantClassifications[iterable].Conditions.SoilMoistureUpperBound).includes(lastSoilMoisture)) {

            console.log("Match found: " + plant_env_match.PlantClassifications[iterable].Type)
            
            finalJOBJ.push({type: `${plant_env_match.PlantClassifications[iterable].Type}`,
            examples: plant_env_match.PlantClassifications[iterable].Examples, 
            struct: `${plant_env_match.PlantClassifications[iterable].Conditions.Structure}`, 
            pH: `${plant_env_match.PlantClassifications[iterable].Conditions.pH}`,
            light: `${plant_env_match.PlantClassifications[iterable].Conditions.Light}`})
        } else {
            console.log("No match found");
        }
    }

    console.log("Final JOBJ" + JSON.stringify(finalJOBJ[0]))

    res.json(finalJOBJ);
    });

    // The whole response has been received. Print out the result.
    resp.on("end", () => {
      let url = JSON.parse(data).message;
          
    });
  }).on("error", err => {
    console.log("Error: " + err.message);
  });

  
  
})

/* This endpoint fetches the last 10 values from the sensor
channel and calculates the average humidity and temperature
values from them. It then compares these values to the
range of values for each plant classification and determines
whether there is a match. If there is a match, the plant
classification is returned to the front-end. 
This is for Plot 2.
*/

app.get('/get-best-match2', (req, res) => {
  https.get(`https://api.thingspeak.com/channels/2480580/feeds.json?api_key=7R7Q5ZUPL4G0EL9B&results=10
    `, resp => {
    let data = "";

    // A chunk of data has been recieved.
    resp.on("data", chunk => {
      data += chunk;



    const obj = JSON.parse(data);
    
    // First and last values from those fetched

    let startPoint = obj.feeds.at(0).entry_id;

    let endPoint = obj.feeds.at(-1).entry_id;

    console.log("Start point " + startPoint + " End point " + endPoint)
    
    // Prints out JSON object

    console.log(obj);
    
    let feeds = obj.feeds;

    // Maps out only the field1 values from the feed.
    // This will need amendment as soon as the other 
    // sensors are added to the channel, adding them in.

    const field1Values = feeds.map(feed => feed.field1);

    const field2Values = feeds.map(feed => feed.field2);

    const field3Values = feeds.map(feed => feed.field3);
    
    // console.log("Working values: " + field1Values)
    
    let approvedHumidityValues = [];
    
    let approvedTemperatureValues = [];


    let value = 0;

    /* For some reason the sensor is misbehaving and sending values above 100
    so we need to filter those out. 
    It is likely an issue down to running the sensor on 3.3v right now, likely
    needs 5v to work properly...

    */
    for(value in field1Values) {
        if(value <= 100) {
            approvedHumidityValues.push(value);
        }
    }

    console.log(approvedHumidityValues)

    value = 0;

    /*
    Now we need to calculate the average humidity from the approved values
    This produces the mean for us
    */

    // let avgHumidity = approvedValues.reduce((a, b) => (a + b)) / approvedValues.length;
    for(let i = 0; i < approvedHumidityValues.length; i++) {
        value = value + Number(approvedHumidityValues[i]);
    }

    let avgHumidity = value / approvedHumidityValues.length;

    console.log(value);

    console.log("Average Humidity: " + avgHumidity);
    
    value = 0;

    for(value in field2Values) {
        if(value <= 100) {
            approvedTemperatureValues.push(value);
        }
    }

    console.log(approvedTemperatureValues)

    value = 0;

    for(let i = 0; i < approvedTemperatureValues.length; i++) {
        value = value + Number(approvedTemperatureValues[i]);
    }

    let avgTemperature = value / approvedTemperatureValues.length;

    console.log(value);



    

    

    let finalJOBJ = [];

    /*
    The below code iterates through all plant classifications and determines whether 
    after comparing the avg conditions to the range of conditions for each type, there is a match
    We are only using the soil moisture for now, but this will be expanded to include all
    sensor values in the future. I have retained the code condition from the demonstration for proof
    of purpose.
    */

    for(let iterable in plant_env_match.PlantClassifications) {
        const classification = plant_env_match.PlantClassifications[iterable];
        const conditions = classification.Conditions;



        // if (range(plant_env_match.PlantClassifications[iterable].Conditions.BestHumidityLowerBound, 
        //       plant_env_match.PlantClassifications[iterable].Conditions.BestHumidityUpperBound).includes(48)
        //       || range(plant_env_match.PlantClassifications[iterable].Conditions.BestTemperatureLowerBound, 
        //         plant_env_match.PlantClassifications[iterable].Conditions.BestTemperatureUpperBound).includes(48)) {
            
        console.log("Testing val" + lastSoilMoisture2);
        if (isInBounds(lastSoilMoisture2, conditions.SoilMoistureLowerBound, conditions.SoilMoistureUpperBound)) {
          console.log("Match found: " + classification.Type);
  
            
            finalJOBJ.push({type: `${plant_env_match.PlantClassifications[iterable].Type}`,
            examples: plant_env_match.PlantClassifications[iterable].Examples, 
            struct: `${plant_env_match.PlantClassifications[iterable].Conditions.Structure}`, 
            pH: `${plant_env_match.PlantClassifications[iterable].Conditions.pH}`,
            light: `${plant_env_match.PlantClassifications[iterable].Conditions.Light}`})

            // console.log(JSON.stringify({type: `${plant_env_match.PlantClassifications[iterable].type}`,
            // examples: [`${plant_env_match.PlantClassifications[iterable].Examples}`], 
            // struct: `${plant_env_match.PlantClassifications[iterable].Conditions.Structure}`, 
            // pH: `${plant_env_match.PlantClassifications[iterable].Conditions.pH}`,
            // light: `${plant_env_match.PlantClassifications[iterable].Conditions.Light}`}))
        } else {
            console.log("No match found");
        
        }

    }

    console.log("Final JOBJ" + JSON.stringify(finalJOBJ[0]))

    res.json(finalJOBJ);

    

    });

    // The whole response has been received. Print out the result.
    resp.on("end", () => {
      let url = JSON.parse(data).message;
          
    });
  }).on("error", err => {
    console.log("Error: " + err.message);
  });

  
  
})

/*
Debugging endpoint for testing the sensor values
Returns all sensor values from the last 10 entries
from the sensor channel, not constrained by the 
conditions for the plant classifications.
*/



app.get('/get-all-matches', (req, res) => {
  https.get(`https://api.thingspeak.com/channels/2455916/feeds.json?api_key=FCIJ1UCNZZHEORPO&results=10
    `, resp => {
    let data = "";

    // A chunk of data has been recieved.
    resp.on("data", chunk => {
      data += chunk;


    let finalJOBJ = [];
    
    for(let iterable in plant_env_match.PlantClassifications) {
        
            console.log("Match found: " + plant_env_match.PlantClassifications[iterable].Type)
            
            finalJOBJ.push({type: `${plant_env_match.PlantClassifications[iterable].Type}`,
            examples: plant_env_match.PlantClassifications[iterable].Examples, 
            struct: `${plant_env_match.PlantClassifications[iterable].Conditions.Structure}`, 
            pH: `${plant_env_match.PlantClassifications[iterable].Conditions.pH}`,
            light: `${plant_env_match.PlantClassifications[iterable].Conditions.Light}`})
        }

    console.log("Final JOBJ" + JSON.stringify(finalJOBJ))

    res.json(finalJOBJ);

    

    });

    // The whole response has been received. Print out the result.
    resp.on("end", () => {
      let url = JSON.parse(data).message;
          
    });
  }).on("error", err => {
    console.log("Error: " + err.message);
  });

  
  
})

/*
Returns the last sensor values from the sensor channel
This is for Plot 1.
*/

app.get('/sensors', (req, res) => {
    const filename = path.join(currentFolder, 'sensors.html')
    https.get(`https://api.thingspeak.com/channels/2455916/feeds.json?api_key=FCIJ1UCNZZHEORPO&results=1
    `, resp => {
    let data = "";

    // A chunk of data has been recieved.
    resp.on("data", chunk => {
      data += chunk;

    const obj = JSON.parse(data)
    
    let startPoint = obj.feeds.at(0).entry_id;

    let endPoint = obj.feeds.at(-1).entry_id;

    console.log("Start point " + startPoint + " End point " + endPoint)
    
    
    
    
    
    // for (const x in newObj) {
    //     console.log("Iter vals " + x)
    //     newText += x;
    // }
    console.log(obj)
    
    let feeds = obj.feeds;

    console.log("feeds " + JSON.stringify(feeds))

    // Validation logic for the sensor values

    let field1Values = undefined;

    let field2Values = undefined;

    let field3Values = undefined;

    if((feeds.map(feed => feed.field1)) <= 100) {
        field1Values = feeds.map(feed => feed.field1);
    } 

    if(feeds.map(feed => feed.field2) <= 55) {
        field2Values = feeds.map(feed => feed.field2);
    }

    if(feeds.map(feed => feed.field3) <= 100) {
        field3Values = feeds.map(feed => feed.field3);
    } else {
        field3Values = 100; 
    }
    
    console.log("Working values: " + field1Values + "" + field2Values)
    
    if(field1Values != undefined || field1Values != null) {
      lastHumidity = field1Values;  
    }
    
    if(field2Values != undefined || field2Values != null) {
      lastTemperature = field2Values;
    }
    if(field3Values != undefined || field3Values != null) {  
      lastSoilMoisture = field3Values;
    }
    
    
    

    res.json({rh: `${Number(lastHumidity)}`, tmp: `${Number(lastTemperature)}`, sm: `${Number(lastSoilMoisture)}`})
    
    
    });

    // The whole response has been received. Print out the result.
    resp.on("end", () => {
      let url = JSON.parse(data).message;
          
    });
  }).on("error", err => {
    console.log("Error: " + err.message);
  });
  
    

})


/*
Returns the last sensor values from the sensor channel
This is for Plot 2.
*/

app.get('/sensors2', (req, res) => {
  const filename = path.join(currentFolder, 'sensors.html')
  https.get(`https://api.thingspeak.com/channels/2480580/feeds.json?api_key=7R7Q5ZUPL4G0EL9B&results=1
  `, resp => {
  let data = "";

  // A chunk of data has been recieved.
  resp.on("data", chunk => {
    data += chunk;

  const obj = JSON.parse(data)
  
  let startPoint = obj.feeds.at(0).entry_id;

  let endPoint = obj.feeds.at(-1).entry_id;

  console.log("Start point " + startPoint + " End point " + endPoint)
  
  
  console.log(obj)
  
  let feeds = obj.feeds;

  console.log("feeds " + JSON.stringify(feeds))

  // Validation logic for the sensor values

  let field1Values = undefined;

  let field2Values = undefined;

  let field3Values = undefined;

  if((feeds.map(feed => feed.field1)) <= 100) {
      field1Values = feeds.map(feed => feed.field1);
  } 

  if(feeds.map(feed => feed.field2) <= 55) {
      field2Values = feeds.map(feed => feed.field2);
  }

  if(feeds.map(feed => feed.field3) <= 100) {
      field3Values = feeds.map(feed => feed.field3);
  } else {
      field3Values = 100; 
  }
  
  console.log("Working values: " + field1Values + "" + field2Values)


  if(field1Values != undefined) {
    lastHumidity2 = field1Values
  }
  
  if(field2Values != undefined) {
    lastTemperature2 = field2Values;
  }
  
  if(field3Values != undefined) {  
    lastSoilMoisture2 = field3Values;
  }
  

  res.json({rh: `${Number(lastHumidity2)}`, tmp: `${Number(lastTemperature2)}`, sm: `${Number(lastSoilMoisture2)}`})
  
  
  });

  // The whole response has been received. Print out the result.
  resp.on("end", () => {
    let url = JSON.parse(data).message;
        
  });
}).on("error", err => {
  console.log("Error: " + err.message);
});

})


/*
Returns range of values from start to end
in an array
*/

function range(start, end) {
  console.log("Start: " + start + " End: " + end)
  if(start == end) {
    return([start]);
  } 

  return([...Array(end + 1).keys()].filter(value => end >= value && start <= value ));
}

/*
Returns true if value is within the bounds
stated in parameters
*/

function isInBounds(value, lowerBound, upperBound) {
  return value >= lowerBound && value <= upperBound;
}

app.use('/website', express.static(currentFolder));

