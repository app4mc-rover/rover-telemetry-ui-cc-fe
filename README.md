# Telemetry-UI Frontend with Hono C&C

The Telemetry-UI visualizes telemetry data and allows to show data in diagrams.
It also allows to control a vehicle and provides a playground. Users can program the vehicle by adding actions to the playground.

The Telemetry-UI is made for demonstrations to combine all use cases on a frontend for example appstore, playground, communication with the the third-party cloud service.

## Do you want to start the frontend?

If you are ready just do the following:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## What you need to know about the Application !

### Used Technologies
- ReactJS
- Redux
- Material UI
- HTML5
- CSS3
- JavaScript
- i18next

### What are bundles?
Bundles logically combine all files that belong together like common code that is used. <br>
Each Page on the frontend is implemented in its own bundle to seperate its code from the other's code.

### Where are the translations stored?
You can find the files for translation in the bundles. The folder is called `locales`. It contains seperate folders for the languages.
The main file for the translations is in `src/i18n.js`, which makes the locales available for the whole application

### How are the states managed?
The states are managed by redux, which stores the states in one big store seperated in partitions. <br>
You can find the combination of all partitions in `src/reducers/index.js` <br>

### What is not implemented?
- The playground is still in development. It works but looks terrible.
- The appstore use case has to be included
- Appstacle information have to be set properly and translated in locales
- Translations all over the application have to be controlled
- application is not modular, which means that only one rover can be used (to change rover you need to edit the backend)