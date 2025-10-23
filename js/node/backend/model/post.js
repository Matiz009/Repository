const mongoose = require('mongoose');
const PostSchema = mongoose.Schema({
  title: String,
  content: String,
  id:Number,
  author:{
    required:true,
    type:String
  }
}
);

module.exports = mongoose.model('Post', PostSchema);


