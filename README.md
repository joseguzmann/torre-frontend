# Torre Frontend

This is my front-end application for Torre's technical test, built with React and the MUI component library.

## Project info

HTTP requests are made through the Fetch API to a CORS proxy hosted on Heroku (**[https://tranquil-thicket-22159.herokuapp.com/](https://tranquil-thicket-22159.herokuapp.com/)**), using the following source code **[https://github.com/Rob--W/cors-anywhere/](https://github.com/Rob--W/cors-anywhere/)**

Endpoints used are:

GET https://torre.bio/api/bios/
GET https://torre.co/api/genome/bios/<user_id>/strengths-skills/<skill_id>/detail
POST https://search.torre.co/people/_search

The front-end of the application is hosted on Firebase and can be accessed through the following links:

**[https://torre-technical-test.web.app/](https://torre-technical-test.web.app/)**

**[https://torre-technical-test.firebaseapp.com/](https://torre-technical-test.firebaseapp.com/)**

## Development running

Clone the repository into your computer

```
git clone https://github.com/joseguzmann/torre-frontend
```

In project's root folder run the following command to install dependencies

```
npm install
```

Start the web application

```
npm run start
```
