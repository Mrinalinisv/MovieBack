const { default: mongoose } = require("mongoose");
const mongoose =require("mongoose");
//connect Db
mongoose.connect("mongodb+srv://svmrinalinisv:Dhannu@123@cluster0.brfdbr7.mongodb.net/?retryWrites=true&w=majority")
const Schema = mongoose.Schema;
var Movieschema= new Schema({
    mname: String,
    actor: String,
    director: String,
    language: String,
    year: Date,
    actress: String,

});
var MoviesInfo = mongoose.model("movies",Movieschema);

module.exports=MoviesInfo;