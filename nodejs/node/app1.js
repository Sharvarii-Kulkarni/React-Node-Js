var express=require('express');
var app=express();
var things=require('./things.js');

app.get('/hello',function(req,res){
  res.send("Hello Sanika!");
});

app.use('/things',things);
app.listen(3000);