const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Library',{ useNewUrlParser: true ,useUnifiedTopology: true});//updated
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;