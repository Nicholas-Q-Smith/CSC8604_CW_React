import { createRoot } from 'react-dom/client';

import express from 'express'

import path from 'path'

import ThingSpeakClient from 'thingspeakclient'

import { fileURLToPath} from 'url'

import https from 'https'

import fs from 'fs'

import parse from 'node-html-parser'

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

app.use('/website', express.static(currentFolder));

// app.listen(3000)