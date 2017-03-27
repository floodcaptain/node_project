
console.log("this is a test");
var express = require('express');
var app=express();

app.listen(3000,function(){console.log('listening on 3000');});

app.get('/',function(req,res){
    res.sendFile('/home/ubuntu/starter-node-angular/index.html');
    console.log('from /');
});

app.get('/project.css', function(req, res){ res.sendFile('/home/ubuntu/starter-node-angular/project.css');
});

