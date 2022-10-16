const express = require("express");
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const PORT = process.env.PORT || 8000;

io.on('connection', function(socket){
    socket.on('chat message', function(username, location, msg){
      io.emit('chat message', username, location, msg);
    });
});

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});