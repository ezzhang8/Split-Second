class User {
    constructor(params) {
        this.username = params.username || "Guest "+this.randomNumber();
        this.timezone = params.timezone || 0;
        this.host = params.host || false;
        this.events = {
            enabled: [],
            disabled: []
        }
    }

    randomNumber() {
        return Math.floor(1000 + Math.random() * 9000);
    }
}


class Room {
    static all = [];

    constructor() {
        this.code = this.generateRandomCode();
        this.users = [];

        Room.all.push(this);
    }

    addUser(user) {
        this.users.push(user);
    }

    generateRandomCode() {
        const preCode = Math.random().toString(36).substr(2, 6).toUpperCase();
    
        if (Room.all.find((room)=> room.code === preCode) != undefined) {
            generateRandomCode();
        }
    
        return preCode;
    }
}


module.exports = {
    User,
    Room
}