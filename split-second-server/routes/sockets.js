const rooms = require("../utils/rooms");

const { User, Room } = require("../utils/utils");

module.exports = function sockets(io) {

    io.on('connection', (socket) => {
        socket.on('createRoom', (params, callback) => {
            params.host = true;

            const newUser = new User(params);
            const newRoom = new Room()

            newRoom.addUser(newUser);

            socket.join(newRoom.code);
            callback({room: newRoom, user: newUser});
        });

        
        socket.on('joinRoom', (params, callback) => {
            const room = Room.all.find((room) => room.code === params.code);
            if (room != undefined) {
                const newUser = new User(params)
                room.addUser(newUser);
                socket.join(room.code)
                
                io.to(room.code).emit('joinUpdate', room);
                callback({room: room, user: newUser})
            }  
        });

        socket.on('userUpdate', (params, callback) => {
            const room = Room.all.find((room) => room.code === params.code);
            const user = room.users.find((user) => user.username === params.user.username)

            user.events = params.user.events;

            io.to(room.code).emit('joinUpdate', room);
            callback(room);
        })
    });
}