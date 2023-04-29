# Torre Frontend

This is my front-end application for Torre's technical test, built with React.

## Project info

HTTP requests are made through with Fetch API through a CORS proxy hosted on Heroku: 

https://enigmatic-thicket-97495.herokuapp.com

I have built this CORS proxy with Flask and you could see its source code on this repository:

https://github.com/joseguzmann/torre-backend

Endpoints used are:

GET https://enigmatic-thicket-97495.herokuapp.com/user/{user_id}
GET https://enigmatic-thicket-97495.herokuapp.com/user/{user_id}/skill/{skill_id}/
GET https://enigmatic-thicket-97495.herokuapp.com/search/users/skill/{skill_name}/proficiency/{proficiency}

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

# <<<<<<< HEAD

> > > > > > > b7fe0c20555618a6ce0c239f790776c87d33e2d3
