const express  = require ("express")
const nunjucks = require("nunjucks")
const DonorsController = require("./controllers/Donors.controller")

const server = express()

server.use(express.static('public'))
server.use(express.urlencoded({ extended: true}))

nunjucks.configure("src/views", {
    express: server,
    noCache: true,
})

server.get("/", DonorsController.index)
server.post("/", DonorsController.create)
 
server.listen(3000, function() {
    console.log("Server is running...")
})