const mongoose = require('mongoose');
const config = require('config');

const db = config.get('mongoURI');



const connectDB = async () => {
  try {
    await mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to DB");
  }
  catch (err) {
    console.error("aaaaaa",err.message);
    // Exit process with failure
    process.exit(1);
  }
}

module.exports = connectDB;
