const express = require("express");

const app = express();

app.get("/movies/current", (req, res) => {
    res.send("current");
});

app.get("/movies/next", (req, res) => {
    res.send("next");
});

app.get("/snacks", (req, res) => {
    res.send("snacks");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`SERVER STARTED on PORT ${PORT}`);
});
