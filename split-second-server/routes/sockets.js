const rooms = require("../utils/rooms");

const { User, Room } = require("../utils/utils");

module.exports = function sockets(io) {

    io.on('connection', (socket) => {
        socket.on('createRoom', (params, callback) => {
            params.host = true;

            const newUser = new User(params);
            const newRoom = new Room()

            newRoom.addUser(newUser);

            console.log(Room.all);

            callback({room: newRoom, user: newUser});
        });
    });
}