const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const collorse = require('colors');
const bootcamps = require('./route/bootcamps_route_express');

connectDB();

dotenv.config({ path: './config/config.env' });
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
//mount routes
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(
    `App ${process.env.NODE_ENV} listening on port ${PORT}`.yellow.bold
  );
});
process.on('unhendledRejection', (err, promise) => {
  console.log(`ERROR:${err.message}`.red.bold);
  server.close();
});
