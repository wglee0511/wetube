
var express = require('express');
var app = express();

const PORT = 4000;

function handleListening(){
    console.log(`Listening on : http://localHost:${PORT}`)
}

app.listen(PORT, handleListening);