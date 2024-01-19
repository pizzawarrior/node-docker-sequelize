
## Project Goals:
* Use Node, Express, Docker, and PostgreSQL, and combine testing into a simple containerized HTTP service that persists data.

### This project is made with:
- Node.js: for developing this server side application!
- Express: for handling routing, middleware, and general JSON support
- Sequelize: for handling database interactions, ORM, and API calls
- Jest: for providing database integration testing
- PM2: to handle production workflows, and keep the app alive once it's deployed

- To start the server: `npm start` or using pm2: `npm run pm2`

- To run tests: cd to src, then run: `npm run test`

- To build an image (if none exists), map data volumes (if none exists), and test the db connection: `docker compose run customerbook npm test`
**Note** This will override the contents of the db and clear everything!

- To run this project in dev using Docker Desktop: `docker compose up`
