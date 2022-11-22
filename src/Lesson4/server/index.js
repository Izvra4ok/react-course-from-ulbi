//Start server:npm run dev//


const express = require("express")
const app = express()
const WebSocketServer = require("express-ws")(app)
const aWss = WebSocketServer.getWss()
const cors = require("cors")
const PORT = process.env.PORT || 5000
const fs = require("fs")
const path = require("path")

app.use(cors())
app.use(express.json())

app.ws("/", (ws, req) => {
    console.log("connection success")
    ws.send(JSON.stringify("Your connection success"))
    ws.on("message", (msq) => {
        msq = JSON.parse(msq)
        switch (msq.method) {
            case "connection":
                connectionHandler(ws, msq)
                break
            case "draw":
                broadcastConnection(ws, msq)
                break
        }
        console.log(msq)
    })
})

app.post("/image", (req, res) => {
    try {
        const data = req.body.img.replace("data:image/png;base64", "")
        fs.writeFileSync(path.resolve(__dirname, 'files', `${req.query.id}.jpg`), data, 'base64')
        return res.status(200).json({message: "Loaded"})
    } catch (error) {
        console.log(error)
        return res.status(500).json("error")
    }
})

app.get("/image", (req, res) => {
    try {
        const file = fs.readFileSync(path.resolve(__dirname, "files", `${req.query.id}.jpg`))
        const data = `data:image/png;base64,` + file.toString("base64")
        res.json(data)
    } catch (error) {
        console.log(error)
        return res.status(500).json("error")
    }
})

app.listen(PORT, () => console.log(`server started on ${PORT}`))

const connectionHandler = (ws, msq) => {
    ws.id = msq.id
    broadcastConnection(ws, msq)
}

const broadcastConnection = (ws, msq) => {
    aWss.clients.forEach(client => {
        if (client.id === msq.id) {
            client.send(JSON.stringify(msq))
        }
    })
}