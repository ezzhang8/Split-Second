const rooms = [];

/**
 * Creates a new room.
 * @param {*} host - User object
 * @returns the room that was just created.
 */
function createRoom(host) {
    const room = {
        host: host,
        begun: false,
        code: generateRandomCode(),
        motions: 0,
        usedPolicies: [],
        members: [host]
    }

    rooms.push(room);
    return room;
}

/**
 * Creates a user.
 * @param {String} username - the username of the new user
 * @returns the created user.
 */
 function createUser(username, timezone, host) {
    return {
        username: username,
        host: host,
        timezone: timezone,
        events: {
            enabled: [],
            disabled: [],
        }
    }
}

function joinRoom(user, code) {
    const index = rooms.findIndex((room) => room.code === code);

    if (rooms[index] != undefined && rooms[index].begun == false) {
        rooms[index].members.push(user);

        return rooms[index];
    }
}

/**
 * Searches for a room object
 * @param {*} code - Unique room code.
 * @returns the room object found, or undefined
 */
function getRoom(code) {
    return rooms.find((room) => room.code === code)
}

/**
 * Generates a game join code.
 * @returns The code that was generated.
 */
function generateRandomCode() {
    const preCode = Math.random().toString(36).substr(2, 6).toUpperCase();

    if (rooms.find((room)=> room.code === preCode) != undefined) {
        generateRandomCode();
    }

    return preCode;
}

module.exports = {
    createRoom,
    createUser,
    generateRandomCode,
    joinRoom,
    getRoom
};
  