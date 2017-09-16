var myroutes = require("express").Router();

myroutes.get('/',function (req,res) {
    res.status(200).json({"data":"qwer - "+req.host})
})
myroutes.get('/home',function (req,res) {
    res.status(200).json({"data":"home - "+req.host})
})
myroutes.get('/home/:query',function (req,res) {
    res.status(200).json({"data":"home- "+req.params.query}+req.host)
})

module.exports = myroutes;