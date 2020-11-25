require("./backend/windowManager.js")

const fs = require("fs");
const http = require("http")


setTimeout(() => {
    console.log("test")
}, 5000)

http.createServer(function (req, res) {
    fs.readFile(__dirname + "" + req.url, (err, data) => {
        if(err) {
            res.write(err.message);
            return res.end();
        }
        console.log(data);
        res.write(data)
        return res.end();
    });
  }).listen(8080); //the server object listens on port 8080