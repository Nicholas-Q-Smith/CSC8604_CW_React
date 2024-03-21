import { createRoot } from 'react-dom/client';

import express from 'express'

import path from 'path'

import ThingSpeakClient from 'thingspeakclient'

import { fileURLToPath} from 'url'

import https from 'https'

import fs from 'fs'

import parse from 'node-html-parser'

import plant_env_match from './client/src/data/plant-env-match.json' with {type: "json"};

const app = express()


const currentFolder = path.dirname(fileURLToPath(import.meta.url))

let visitors = 0

var client = new ThingSpeakClient();

client.attachChannel(2455916, { readKey:'FCIJ1UCNZZHEORPO'});

var channelId = 2455916;

var fieldId = 1;

var err;

var resp;

let lastHumidity = 0;

let lastTemperature = 0;

let lastSoilMoisture = 0;


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});


app.get("/api", (req, res) => {
  res.json({message: `Connection Confirmed from Node.js Backend Proxy at Port: ${PORT}`})
});


app.get('/visit', (req, res) => {
    const filename = path.join(currentFolder, 'visit.html')
    res.send("Visitors:" + (visitors+=1))
    res.sendFile(fileName)
})

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

    /*
      The below code iterates through all plant classifications and determines whether
      after comparing the avg humidity to the range of BEST
      humidities for each type, there is a match
    */

    let finalJOBJ = [];

    for(let iterable in plant_env_match.PlantClassifications) {

        if (range(plant_env_match.PlantClassifications[iterable].Conditions.BestHumidityLowerBound, 
              plant_env_match.PlantClassifications[iterable].Conditions.BestHumidityUpperBound).includes(48)
              || range(plant_env_match.PlantClassifications[iterable].Conditions.BestTemperatureLowerBound, 
                plant_env_match.PlantClassifications[iterable].Conditions.BestTemperatureUpperBound).includes(48)) {
                
            console.log("Match found: " + plant_env_match.PlantClassifications[iterable].Type)
            
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
    
    if(field1Values != undefined) {
      lastHumidity = field1Values;  
    } else if(field2Values != undefined) {
      lastTemperature = field2Values;
    } else if(field3Values != undefined) {  
      lastSoilMoisture = field3Values;
    }
    
    
    

    res.json({rh: `${Number(lastHumidity)}`, tmp: `${Number(lastTemperature)}`, sm: `${Number(lastSoilMoisture)}`})
    // res.json({rh: `${Number(68)}`, tmp: `${Number(23)}`, sm: `${Number(50)}`})
    
    });

    // The whole response has been received. Print out the result.
    resp.on("end", () => {
      let url = JSON.parse(data).message;
          
    });
  }).on("error", err => {
    console.log("Error: " + err.message);
  });
  
    

})

app.get('/sensors2', (req, res) => {
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

  if((feeds.map(feed => feed.field4)) <= 100) {
      field1Values = feeds.map(feed => feed.field4);
  } 

  if(feeds.map(feed => feed.field5) <= 55) {
      field2Values = feeds.map(feed => feed.field5);
  }

  if(feeds.map(feed => feed.field6) <= 100) {
      field3Values = feeds.map(feed => feed.field6);
  } else {
      field3Values = 100; 
  }
  
  console.log("Working values: " + field1Values + "" + field2Values)
  
  lastHumidity = field1Values;
  lastTemperature = field2Values;
  lastSoilMoisture = field3Values;

  res.json({rh: `${Number(field1Values)}`, tmp: `${Number(field2Values)}`, sm: `${Number(field3Values)}`})
  // res.json({rh: `${Number(11)}`, tmp: `${Number(field2Values)}`, sm: `${Number(field3Values)}`})
  // res.json({rh: `${Number(68)}`, tmp: `${Number(23)}`, sm: `${Number(50)}`})
  
  });

  // The whole response has been received. Print out the result.
  resp.on("end", () => {
    let url = JSON.parse(data).message;
        
  });
}).on("error", err => {
  console.log("Error: " + err.message);
});

  

})




function range(start, end) {
  console.log("Start: " + start + " End: " + end)
  if(start == end) {
    return([start]);
  }
  return([...Array(end + 1).keys()].filter(value => end >= value && start <= value ));
}

app.use('/website', express.static(currentFolder));

// app.listen(3000)