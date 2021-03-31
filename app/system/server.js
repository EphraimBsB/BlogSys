const http = require('http');
const app = require("./app");
const server = http.createServer(app);
const port = process.env.PORT || 5000;
const dotenv = require("dotenv");

dotenv.config();

server.listen(port,()=>{
    console.log("Server is runing on port 5000");
});
