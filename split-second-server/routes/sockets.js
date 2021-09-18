module.exports = function sockets(io) {

    io.on('connection', (socket) => {

        socket.on('createRoom', (callback) => {
            console.log("coolio")
            callback("test");
        });
    });
      
    
}