var express=require('express');
var app=express();
app.get('/hello',function(req,res){
  res.send("Hello Express!");
});
app.post('/hello',function(req,res){
  res.send("you just called post method at '/hello'!\n");
});
app.listen(3000);