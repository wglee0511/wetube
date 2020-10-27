
import express from "express";
var app = express();

const PORT = 4000;

const handleListening = () => 
    console.log(`Listening on : http://localHost:${PORT}`);

const handleHome = (req, res) => res.send("Hello from home");

const handleProfile = (req, res) => res.send("You are on my profile");

const betweenHome = (req, res, next) => {
    console.log("between");
    next();
};
app.use(betweenHome);

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);