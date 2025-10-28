const mongoose = require('mongoose');
const MONGOURI='mongodb://127.0.0.1:27017/first';

function connectToDatabase() {
 mongoose.connect(MONGOURI,
 { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => console.log("MongoDB connected")
).catch(err => console.log(err));

}


module.exports = connectToDatabase;