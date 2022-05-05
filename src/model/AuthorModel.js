const mongoose = require('mongoose');
require('dotenv').config()
mongoose.connect(process.env.MONGODBURL,{ useNewUrlParser: true ,useUnifiedTopology: true}).then(()=>{
    console.log("DATABASE CONNECTED")
});//updated
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;