const mongoose = require('mongoose');
const dbconn = process.env.MONGO_URI;
const connectDB = async () => {
  const conn = await mongoose.connect(
    'mongodb+srv:mongoclaset connect string',
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    }
  );
  console.log(
    `MongoDB Connected to :     ${conn.connection.host}`.cyan.underline.bold
  );
};
module.exports = connectDB;
