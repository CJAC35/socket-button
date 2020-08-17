const express = require('express')
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 4001;

app.get("*", (req, res) => {
    res.sendFile(path.join(reactPath, "index.html"));
});
  

io.on("connection", (socket) => {
    console.log('user has been connected');
    socket.on('test', (data) => {
        console.log(data)
        socket.broadcast.emit('change-text', data);
    });

    socket.on("disconnect", () => {
        console.log('a user has been disconnected');
    });
})

server.listen(port, () => {
    console.log(`listening on port ${port}`);
});


