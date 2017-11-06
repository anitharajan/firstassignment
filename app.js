var express = require("express");

var app = express();


app.get("/", function(req, res){
	res.send("<html><body><h1>This is the first assignment to be deployed on heroku</h1></body></html>");
});

app.get("/assignment", function(req, res){
	res.send("<html><body><h1>First Assignment</h1></body></html>");
});

app.get("/download", function(req, res){
	res.download("./README.md", function(){
		console.log("download is done");
	});
});

var port =  4200;

app.listen(port, function(){
	console.log("Server is ON at " + 4200);
});