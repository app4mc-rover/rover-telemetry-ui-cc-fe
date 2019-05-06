Credits for initial implementations to [huigc001](https://github.com/huigc001)

# Telemetry-UI Frontend

The Telemetry-UI visualizes telemetry data by means of diagrams and allows to control a vehicle.
Furthermore, it provides a playground where users can program the vehicle movement by adding actions to the playground.

The Telemetry-UI is made for demonstrations to combine all use cases on a frontend, for example appstore, playground, or communication with third-party cloud service.

## Running Telemetry-UI Frontend

### Prerequisite
Tested on Ubuntu 18.04

#### Frameworks

npm (6.4.1) & Node.js (8.10.0)

```sh
sudo apt update
sudo apt install nodejs npm
```

#### Backend

The frontend communicates with the [Backend](https://github.com/app4mc-rover/rover-telemetry-ui-cc-be) to receive current telemtry data and send commands to according devices.

If you run the application locally, just start the backend and configure it accordingly.
If you don't run the application on a local computer and want to deploy on a server, you need to modify the IP of the backend. Therefore, change the IP from "localhost" to the according IP of the backend in the following places:

* [TelemetryContainer](https://github.com/app4mc-rover/rover-telemetry-ui-cc-fe/blob/master/src/containers/TelemetryContainer.js)
* [PlaygroundContainer](https://github.com/app4mc-rover/rover-telemetry-ui-cc-fe/blob/master/src/containers/PlaygroundContainer.js)
* [TelemetryContainer](https://github.com/app4mc-rover/rover-telemetry-ui-cc-fe/blob/master/src/containers/TelemetryContainer.js)
* [TelemetryService](https://github.com/app4mc-rover/rover-telemetry-ui-cc-fe/blob/master/src/TelemetryService.js)
* [TelemetryView](https://github.com/app4mc-rover/rover-telemetry-ui-cc-fe/blob/master/src/pages/telemetry/TelemetryView.js)

### Starting the application
Enter the main folder and execute the following command:

```sh
sudo npm install
sudo npm start
```

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## What you need to know about the application

### Used technologies
* ReactJS
* Redux
* Material UI
* HTML5
* CSS3
* JavaScript
* i18next

### What are bundles?
Bundles logically combine all files that belong together like common code that is used. <br>
Each Page on the frontend is implemented in its own bundle to seperate its code from the other's code.

### Where are the translations stored?
You can find the files for translation in the bundles. The folder is called `locales`. It contains seperate folders for the languages.
The main file for the translations is in `src/i18n.js`, which makes the locales available for the whole application

### How are the states managed?
The states are managed by redux, which stores the states in one big store seperated in partitions. <br>
You can find the combination of all partitions in `src/reducers/index.js` <br>

### Current limitations
* Displaying telemetry data is currently not working due to a change in the data format
* The playground is still in development. It works but looks terrible.
* The appstore use case has to be included
* Appstacle information have to be set properly and translated in locales
* Translations all over the application have to be controlled
* Application is not modular, which means that only one rover can be used (to change rover you need to edit the backend)
