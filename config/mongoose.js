const mongoose = require("mongoose");

const connectDB = async () => {
  const mongooseConn = await mongoose.connect(process.env.MONGO_URI);
  console.log(
    `MongoDB Connected ${mongooseConn.connection.host}`
  );
};

module.exports = connectDB;
