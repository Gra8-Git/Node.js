const express = require('express');
const dotenv = require('dotenv');

dotenv.config({ path: 'config.env' });
const app = express();

app.get('/api/v1/bootcamps', (req, res) => {
  res.status(200).json({ success: true, msg: 'Show all bootcamps' });
});

app.post('/api/v1/bootcamps', (req, res) => {
  res.status(200).json({ success: true, msg: 'Create new bootcamps' });
});

app.put('/api/v1/bootcamps/:id', (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Display bootcamps ${req.params.id}` });
});

app.delete('/api/v1/bootcamps/:id', (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete bootcamps ${req.params.id}` });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App ${process.env.NODE_ENV} listening on port ${PORT}`);
});
