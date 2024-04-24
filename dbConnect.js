const mongoose = require('mongoose');
const MONGO_URL="mongodb+srv://amrapali:amrapali@cluster0.wlrg4fy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect( MONGO_URL);
const connection = mongoose.connection;


connection.on('connected', () => {
  console.log('Mongo DB Connection Successfull');
});


connection.on('error', () => {
  console.log('Mongo DB Connection Failed');
});
module.exports = mongoose
