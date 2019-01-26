const Handlers = require('../handlers/handlers');

module.exports = {
    sendMessage: function (ws, message) {
        ws.send("Welcome to the server...", {}, () => Handlers.server.sendMessageHandler(ws, message));
    },
};