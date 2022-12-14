const mongoose = require('mongoose');

const connectDB = async () => {
    try {
      const db = await mongoose.connect(process.env.DB_URL)
      console.log(`Database connected: ${db.connection.host}`)
    } catch (err) {
      console.error(err)
      process.exit(1)
    }
  }

  module.exports = connectDB

// alternative code

// mongoose.connect(dbUrl, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", () => {
//     console.log("Database connected");
// });