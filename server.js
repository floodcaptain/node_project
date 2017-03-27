
console.log("this is a test for git");
var express = require('express');
var app=express();
var path=require("path")

app.listen(3000,function(){console.log('listening on 3000');});

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'/index.html'));
    console.log('from /');
});

app.get('/project.css', function(req, res){ res.sendFile(path.join(__dirname,'project.css'));
});

