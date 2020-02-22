const mongoose = require('mongoose');
const config = require('config');

const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    // we are going to await because this function returns a promise
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });

    console.log('MongoDB Connected... ');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    proccess.exit(1);
  }
};

module.exports = connectDB;
