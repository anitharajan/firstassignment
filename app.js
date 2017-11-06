var express = require("express");

var app = express();


app.get("/", function(req, res){
	res.send("<html><body><h1><i>This is the first assignment to be deployed on heroku</i></h1></body></html>");
});

app.get("/assignment", function(req, res){
	res.send("<html><body><h1><i>First Assignment</i></h1></body></html>");
});

var port =  4200;

app.listen(port, function(){
	console.log("Server is ON at " + 4200);
});