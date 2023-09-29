const mongoose = require('mongoose');
const { Schema } = mongoose;


const languageSchema = new Schema({
    name: String,
    word: String,
    french: String,
    spanish: String,
    profilelId:String,
  });

  const Language = mongoose.model("Language", languageSchema);
 

  module.exports = Language;