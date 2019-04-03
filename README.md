# AppsCurryStep3
Single Page App on Google Apps Script 

## Usage

Install clasp command line tool (if you don't have it already)

```bash
npm install @google/clasp -g
```

Then login to your Google account:

```bash
clasp login
```

Open terminal and clone this project.

You have to create an Apps Script project to run this code.

```bash
clasp create --type standalone --title "Apps Script Single Page App Example"
```

Now build the project and upload to your newly created Apps Script project

```bash
npm install
npm run deploy
```
## Local development

You don't have to upload the project everytime to see the changes.
run:

```bash
npm run local
```
This will open a http://localhost:9090/ where you can view your development site.

In order to Mock the responses from your Google Apps Script API, update client/src/services/MockBackEnd.js

## Project Structure

The client/src/pages contains the partial pages. See src/pages/routes.js where the routes are configured.
You can customize the global styles in src/pages/scss. This project uses bootstrap as CSS framework.

The server/src folder contains the server side (Apps Script) code. You can use ES6 or npm modules in lib.js and any classes/files included in lib.js. 
api.js exposes the Apps Script API that the client side calls (see client/src/services/GASBackEnd.js)


## How does it work?
In the front end, it uses webpack and babel to cross compile and generate the bundle.
Then it uses html-webpack-inline-source-plugin to inline the whole Javascript and CSS in to the generated index.html file.
You can see the client side setup in the client/webpack.prod.js 

## Building the project

```bash
npm run build
```

will build the local development version. The output files are placed in deploy/local folder.

```bash
npm run prod
```

will build the 'production' version that is ready to be uploaded to Apps Script. 



#### Disclaimers
The author does not represent nor associated with Google in any way. This is project is only for learning purposes.

