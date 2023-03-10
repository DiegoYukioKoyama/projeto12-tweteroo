import express from "express";
import cors from "cors";

const server = express();

server.use(express.json());
server.use(cors());

const user = []
const tweets = []

const PORT = 5000;

server.post("/sign-up", (req, res) => {
    const date = req.body
    if (date.username === "" || date.avatar === "") {
        console.log("Preencha os dados solicitados!")
        return;
    }
    user.push({ ...date })
    res.send("ok")
})

server.get("/sign-up", (req, res) => {
    res.send(user)
})

server.post("/tweets", (req, res) => {
    const date = req.body
    let avatar = ""
    user.find((item) => {
        if (item.username === date.username) {
            avatar = item.avatar
        }
    })
    if (user.find((element) => element.username === date.username)) {
        tweets.push({ ...date, avatar })
        res.send("ok")
        return;
    }
    res.sendStatus(401)
})

server.get("/tweets", (req, res) => {
    const last10 = tweets.length - 10
    if (tweets.length >= 10) {
        res.send(tweets.slice(last10))
        return;
    }
    res.send(tweets)
})

server.listen(PORT);