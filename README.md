# CSC8604 The Community Terminal: Client and Backend Application

## Description
This project is a client and backend application that aims to provide a seamless user experience by combining the frontend and backend components. 

The back-end is Node.js Express, and the front-end React.js

## Back-end
The back-end of this application is located in ./web-02/client

It can be run by first initialising the repository with __'npm install'__

Then, running __node server.mjs__ the back-end can be launched.

This back-end solely consists of the server.mjs file, and is all run from
here. This handles the back-end business logic of the application.

## Front-end
The front-end of this application is located in ./web-02/client/src

It can be run by first initialising the repository with __'npm install'__

Then, running __npm start__ the front-end can be launched.

The front-end is structured in multiple main pages, and multiple child components.

__./assets__ contains all icon and image related assets utilised within the web-page.

__The Noun Project provided many of the vector icons utilised__

### Front-end Structure

__./async__ contains code to fetch data from the back-end, but not in an auto-updating means.

__./components__ contains all child components of the main pages

__./data__ contains the JSON database of all plant types and conditions

__./fonts__ contains font imports

__./iteration-02__ contains the main pages of the application

### Within the root directory, Home.jsx and index.jsx are the root pages.

__Home.jsx__ is the main root page users will be presented with from 
    first interaction with the touchpoint

__index.jsx__ is React's internal root page, containing the BrowserRouter.

## Explained Functionality

The application experience determines optimal plant suggestions via the measured
average sensor values.

The application will run and present the last recorded values on ThingSpeak IoT API.
The averaging of values is automated and will occur through the back-end 
automatically.

The current averaging is not accurate for a day as the data is collected every 30 seconds. 
It averages the last __10__ values. This is presently hard coded in the ThingSpeak API
request. This is to ensure no errors when running as no values are presently being recorded,
and more values can crash the server when there are empty field values. It would be
__96__ values if it was setup correctly to record every 15 minutes. 

The determination of plant type suggestions is solely constrained to soil-moisture for
demonstration purposes, but the code exists commented for it's functionality with
all other conditions, including humidity and temperature.

The sensor values will be displayed on each Plot page, and are respective to each
sensor array which will be located in each plot, and upload its data to ThingSpeak.

Plot 3 is a debug page, and will upload __all__ plant types to it in order to demonstrate
functionality with the average value determination being difficult to replicate. It displays
values from Plot 2 for the purpose of demonstration. 