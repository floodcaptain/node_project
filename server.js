console.log("this is a test");
var mongo=require("mongodb").MongoClient;
var express = require('express');
var app=express();

var url='mongodb://localhost:27017/tessiondatabase'; //database name

app.listen(3000,function(){console.log('listening on 3000');});

app.get('/', function (req, res) {
    res.sendFile('/home/pranav/Desktop/node_project/index.html');
});

app.get('/project.css', function (req, res) {
    res.sendFile('/home/pranav/Desktop/node_project/project.css');
});

app.get('/javascriptfile.js', function (req, res) {
    res.sendFile('/home/pranav/Desktop/node_project/javascriptfile.js');
});


app.get('/api', function (req, res) {
    var datareceived = req.query.data;
    var formatteddata = {
        sensordata: datareceived,
        timestamp: new Date()
    };

    mongo.connect(url, function (err, db) {
        if (err) {
            console.log("error in connecting to db.");
            return;
        }
        console.log("Connected to db. ");
        var collection = db.collection('sensordata'); //collection is synonymous to tables in sql

        /*
        ** first start mongo db: sudo service mongod start **
         to see database locally, type in terminal:
         1. use tessiondatabase
         2. show collections
         3. db.sensordata.find().pretty()
        ** to find entry with specific attribute, type:
        * db.sensordata.find({"_id": ObjectId("58a5a69c57e7d546b46e0b1a")}).pretty()
        **
        */

        collection.insert(formatteddata,function(err,result){
            if(err){
                return;
                console.log("error occured in inserting into databse");
            }

            else{
                console.log("data inserted into database")
            }

        });

    });

    res.send(formatteddata);
});

