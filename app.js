// server.js

const express = require("express");

// const MoviesInfo=require('./models/AddMoviedb');
const app = new express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.post('/api/create',async(req,res)=>{
  try{
  console.log(req.body);
  let movie= new MoviesInfo(req,body);
  let result = await movie.save();
 res.json(result);
  }
catch (error){
res.status(500).send(error);
}

})
app.get('/',(req,res) =>{
  res.send("server");
})
app.listen(7000,()=>{
  console.log("data is updated")
})