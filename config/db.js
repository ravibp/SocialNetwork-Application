const mongoose = require('mongoose');
const config = require('config');
const db = "mongodb+srv://ravi:ravi>@cluster-socialnetwork-9f30o.mongodb.net/admin?retryWrites=true&w=majority&readPreference=secondary&replicaSet=your_replSet_name&ssl=true"

//  config.get('mongoURI');



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
