
var express = require('express');
var app = express();

const PORT = 4000;

function handleListening(){
    console.log(`Listening on : http://localHost:${PORT}`)
}

function handleHome(req,res) {
    console.log(req);
    res.send("Hello from home");

}

function handleProfile(req,res){
    res.send("You are on my profile");
}

app.get("/",handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);