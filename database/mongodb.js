/**
 * Loading required modules
 */
const mongoose = require("mongoose");

/** 
 * Connecting to the database
 * 
 * @param {string} connection_string 
 */
async function connect(connection_string) {
  mongoose.connect(
    connection_string,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    },
    err => {
      if (err) console.error(err.message);
      else console.log('Connected to mongodb');
    }
  );
}

module.exports = connect;