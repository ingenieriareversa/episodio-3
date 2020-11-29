const express = require("express");
const cors = require("cors");
const commandController = require("./middlewares/command-controller");
const commands = require("./commands");

const app = express();
app.use(cors());
app.use(express.json());
app.post("/api", commandController(commands));

app.listen(3000, () => {
    console.clear();
    console.log("API lista en localhost:3000");
});