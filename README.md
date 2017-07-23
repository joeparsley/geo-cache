# GeoCache

#### An Epicodus Independent Project JavaScript week #4

#### By Joe Parsley

## Description

* This is a project demonstrating my ability with the angular CLI after just two weeks of exposure. Here's what I came up with!

## User Story:

* As a user, I want to be able to add to the site a new geocache that I have hidden. I want to be able to add it by either physical address or GPS coordinates (latitude and longitude). I should also be able to add myself as the creator of this geocache.

* As a user, I want to be able to view a listing of all geocaches that have been added to the site.

* As a user, I want to be able to view a listing of all geocaches that have been added to the site.


## Installation Requirements

* You must install or have installed a current version of:

  * [Node and npm](https://nodejs.org/en/)

  * [TypeScript](https://www.typescriptlang.org/#download-links)

  * [Angular CLI](https://github.com/angular/angular-cli)


## Setup

* Clone this repository

  `$ git clone https://github.com/joeparsley/geo-cache`


* Run the following commands from the root directory:

  `$ npm install`


  This will download the project's dependencies

  * Within the src folder create a file in the app directory called `api-keys.ts`

    Copy and Paste this code to the file

    `export var masterFirebaseConfig = {
      apiKey: "AIzaSyBJ4IULxWHBjLuKcB5vZY19uLQxvUbo1ug",
      authDomain: "geocache-6674e.firebaseapp.com",
      databaseURL: "https://geocache-6674e.firebaseio.com",
      projectId: "geocache-6674e",
      storageBucket: "geocache-6674e.appspot.com",
      messagingSenderId: "106558502036"
      };
  `

* Build the project,

  Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

* Run the server,

  Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

* You're good to go!

## Known Bugs

There are no known bugs at this time.

## Support and contact details

For feedback or support contact Joe Parsley at joewparsley@gmail.com

## Technologies Used

* HTML
* TypeScript
* JavaScript
* Angular 4
* Angular CLI
* Firebase
* jQuery
* NPM
* Bower
* Angular Material

### License

MIT

Copyright (c) 2017 Joe Parsley
