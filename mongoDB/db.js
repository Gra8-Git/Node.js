const mongoose = require('mongoose');
const dbconn = process.env.MONGO_URI;
const connectDB = async () => {
  const conn = await mongoose.connect(
    'mongodb+srv://Gra8:2PacGray1986@traversymedia-yljqp.mongodb.net/test?retryWrites=true&w=majority',
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
