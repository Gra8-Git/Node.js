const express = require('express');
const dotenv = require('dotenv');

const bootcamps = require('./route/bootcamps_route_express2');

dotenv.config({ path: 'config.env' });
const app = express();

//mount routes
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App ${process.env.NODE_ENV} listening on port ${PORT}`);
});
