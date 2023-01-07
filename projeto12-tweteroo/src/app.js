import express from "express";
import cors from "cors";

const server = express();
const username = ""
server.use(express.json());
server.use(cors());

const PORT = 5000;

server.post("/sign-up", (req, res) =>{
    const user = req.body
    if(user.username === "" || user.avatar === ""){
        console.log("Preencha os dados solicitados!")
        return;
    }
    res.send("ok")
})

server.listen(PORT);