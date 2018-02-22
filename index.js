var express = require("express");
var cors = require("cors");
var app = express();
const PORT = process.env.PORT || 5000
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get("/getData",function(req,res){
	
	var x = {'ss':'ss'};
	console.log(x);
	res.json(x);
	
});

app.listen(PORT);