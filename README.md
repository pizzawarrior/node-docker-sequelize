
## Project Goals:
* Create a simple HTTP Service using Node and Docker, and persist the data.
* Containerize the project, with one container for the db, and another for the API

### This project is made with:
- Node.js: for developing this server side application!
- Express: for handling routing, middleware, and general JSON support
- Sequelize: for handling database interactions, ORM, and API calls
- Jest: for providing database integration testing
- PM2: to handle production workflows, and keep the app alive once it's deployed

- To run this project in dev, open Docker Desktop: `docker compose up`
- To start only the server: `npm start`
- To run pm2: stop all services (docker, and the server.) Run: `npm run pm2`
- To test the db connection, make sure Docker Desktop is running: `docker compose run customerbook npm test`

## Next Steps:
- update the model to handle more 'realistic' customer information, including: customer_id, transaction_id, transaction_type, and date_of_transaction
- drop the current db and create a new one to handle an updated schema
- modify tests to account for updates to the model
- clean up the project directory and get rid of unused functions/ modules
- refactor some modules to better adhere to the 3-layer app architecture, as seen here: https://blog.treblle.com/egergr/
- write up what the models are, and what the data looks like. What are we storing?
- draw a diagram of this app structure, including the models
- what is the MVP of this project, and what are some features that would get added next?
- what is the user-story for this project?
- what are the future plans for CI/CD?
- break out Postman or Insomnia, and add some data
- add a React frontend and display the data in a clean and simple way


## Helpful links:
-Link to this tutorial:
* https://semaphoreci.com/community/tutorials/dockerizing-a-node-js-web-application

-Link to this tutorial repo:
* https://github.com/TomFern/dockerizing-nodejs/tree/master

- CI/CD Docker docs:
* https://docs.docker.com/language/nodejs/configure-ci-cd/
