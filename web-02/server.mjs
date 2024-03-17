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
    
    // console.log("Working values: " + field1Values)
    
    let approvedValues = [];
    let value = 0;

    /* For some reason the sensor is misbehaving and sending values above 100
    so we need to filter those out. 
    It is likely an issue down to running the sensor on 3.3v right now, likely
    needs 5v to work properly...

    */
    for(value in field1Values) {
        if(value <= 100) {
            approvedValues.push(value);
        }
    }

    console.log(approvedValues)

    value = 0;

    /*
    Now we need to calculate the average humidity from the approved values
    This produces the mean for us
    */

    // let avgHumidity = approvedValues.reduce((a, b) => (a + b)) / approvedValues.length;
    for(let i = 0; i < approvedValues.length; i++) {
        value = value + Number(approvedValues[i]);
    }

    let avgHumidity = value / approvedValues.length;

    console.log(value);

    console.log("Average Humidity: " + avgHumidity);
    

    // console.log(plant_env_match.PlantClassifications);

    /*
      The below code iterates through all plant classifications and determines whether
      after comparing the avg humidity to the range of BEST
      humidities for each type, there is a match
    */

    let finalJOBJ = [];

    for(let iterable in plant_env_match.PlantClassifications) {

        if (range(plant_env_match.PlantClassifications[iterable].Conditions.BestHumidityLowerBound, 
              plant_env_match.PlantClassifications[iterable].Conditions.BestHumidityUpperBound).includes(48)) {
                
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

    // console.log(objs)

    const field1Values = feeds.map(feed => feed.field1);
    
    console.log("Working values: " + field1Values)
    

    res.json({rh: `${Number(field1Values)}`, tmp: `${Number(23)}`, sm: `${Number(50)}`})
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
  return([...Array(end + 1).keys()].filter(value => end >= value && start <= value ));
}

app.use('/website', express.static(currentFolder));

// app.listen(3000)