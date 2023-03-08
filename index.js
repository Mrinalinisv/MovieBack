//Basic server steps
//I step
const express=require("express");
const MoviesInfo=require('./models/AddMoviedb');
const path = require('path');


//parsing body parameters

//2.Initialising Express

const app=new express();
//parsing body parameters
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname,'/build'))); 


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type ");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
})

//3.API Creation
app.get('/',(req,res)=>{
    res.send("server is down");
});

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
  app.get('/api/view',async(req,res)=>{
    try{
        let result=await MoviesInfo.find();
        res.json(result);
    }
    catch(error){
        res.status(500).send(error)
    }
  })
  app.post('/api/delete/:id',async(req,res)=>{
    const id =req.params.id
    const query ={_id:isObjectId(id)}
    const result= await dataCollection.deleteOne(query)
    res.send(result)
  })

app.get('', function(req, res) {
    res.sendFile(path.join(__dirname
    ,'/build/index.html'));
 });

app.listen(3002,()=>{
    console.log("server is running");
});
  