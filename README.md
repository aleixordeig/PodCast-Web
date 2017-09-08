
![Skylab](https://github.com/Iggy-Codes/logo-images/blob/master/logos/skylab-56.png)
[![NodeJS](https://github.com/MarioTerron/logo-images/blob/master/logos/nodejs.png)](https://nodejs.org/)
[![ExpressJS](https://github.com/MarioTerron/logo-images/blob/master/logos/expressjs.png)](http://expressjs.com///)
[![AngularJS](https://github.com/FransLopez/logo-images/blob/master/logos/angularjs.png)](https://angularjs.org/)
[![ES6](https://github.com/MarioTerron/logo-images/blob/master/logos/es6.png)](http://www.ecma-international.org/ecma-262/6.0/) 
[![npm](https://github.com/MarioTerron/logo-images/blob/master/logos/npm.png)](https://www.npmjs.com/)
[![Bower](https://github.com/FransLopez/logo-images/blob/master/logos/bower.png)](https://bower.io/)
[![PugJS](https://github.com/Iggy-Codes/logo-images/blob/master/logos/pug.png)](http://www.pugjs.org/) [![jQuery](https://github.com/Iggy-Codes/logo-images/blob/master/logos/jquery.png)](http://jquery.com/) 
[![MongoDB](https://github.com/FransLopez/logo-images/blob/master/logos/mongodb.png)](https://www.mongodb.com/)
![Monogoose](https://github.com/MarioTerron/logo-images/blob/master/logos/mongoose.png)
[![HTML5,CSS3 and JS](https://github.com/FransLopez/logo-images/blob/master/logos/html5-css3-js.png)](http://www.w3.org/) 
[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## [FULL STACK PROJECT]
[FULL STACK PROJECT]:https://podcastcastweb.herokuapp.com/
Check the functional version 1.0! All feedbacks will be welcomed!!

**Description**

PodcastWeb is a reponsive web where you can search for your favourite podcast and listen in the same web!

PodcastWeb isn't a common webpage, we are working to develop more functions to make PodcastWeb an unique place.

The app use a register/login system, updates in progress be aware.

---

## Installation

You need to have installed [NodeJS](https://nodejs.org/) with [npm](https://www.npmjs.com/), [bower](https://bower.io/) and [MongoDB](https://www.mongodb.com/)

---
### Configuration `env` file

You need to create an **.env** file in the project root with the following environment variables configured:

- Port:

  ```
  PORT=4000
  ```

- Mongodb path and database to use:

  ```
  urlDb=mongodb://localhost:27017/NAME_DB
  ```
- Secret word to encrypt users' passwords:

  ```
  SECRET=XXXXXXXXXX
  ```
- Cloudinary account

  ```
  CLOUD_NAME=YOUR_CLOUDINARY_NAME
  ```
  ```
  CLOUDINARY_API_KEY=CLOUDINARY_API_KEY
  ```
  ```
  CLOUDINARY_API_SECRET=CLOUDINARY_API_SECRET
  ```

-Audiosearch account
```
  AUDIOSEARCH_APP_ID=YOUR_AUDIOSEARCH_APP_ID
```
```
  AUDIOSEARCH_SECRET=AUDIOSEARCH_API_KEY
```


---  
---

### To run the server:

```
$ nodemon server/app.js
```

All dependencies will be installed automatically

### To run in dev mode or debugg mode:

```
$npm run dev
```

```
$npm dev:debug
```


## API

The server part has multiple **API endpoints** using several routes:

- `/api` -> Serves the internal data of user details.
- `/auth` -> Serves the authentication options, register and login.

---

## Built with:

- **Front-end**

    - angular: 1.6.4
      - angular-route: 1.6.6
      - angular-jwt: 0.1.9
    - bower: 1.8.0
    - font-awesome: 4.7.0
    - bootstrap: 4.0.0-beta
    - popper.js: 1.11.1
    - jquery: 3.2.1
    - ng-file-upload: 12.2.13

- **Back-end**
  - dotenv: 4.0.0
  - express: 4.15.4
    - express-jwt: 5.3.0
    - express-session: 1.15.5
  - jsonwebtoken: 7.4.3
  - mongoose: 4.11.7
  - passport: 0.4.0
    - passport-jwt: 3.0.0
    - passport-local: 1.0.0
    - passport-local-mongoose: 4.2.1
  - cookie-parser: 1.4.3 
  - cloudinary: 1.9.0
  - del: 3.0.0
  - multer: 1.3.0
  - audiosearch-client-node: 1.0.1
  - pug: 2.0.0-rc.3

---


## Author

[Aleix Ordeig Bros](https://github.com/aleixordeig)

## Acknowledgments

- [SkylabCoders](https://github.com/SkylabCoders)
- [JuanMa Garrido](https://github.com/juanmaguitar)
- [manuelbarzi](https://github.com/manuelbarzi)

