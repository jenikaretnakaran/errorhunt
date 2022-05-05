const mongoose = require('mongoose');
require('dotenv').config()
mongoose.connect(process.env.MONGODBURL,{ useNewUrlParser: true ,useUnifiedTopology: true}).then(()=>{
    console.log("DATABASE CONNECTED")
});//updated
console.log(process.env.MONGODBURL)
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;