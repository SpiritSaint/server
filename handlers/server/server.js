module.exports = {
    closeHandler: function () {
        console.log(`Server closed...`)
    },
    messageHandler: function(message) {
        console.log(`Server receive a new message: ${message}`);
    },
    listeningHandler: function() {
        console.log(`Server is now listening with port ${process.env.SERVER_PORT}...`);
    },
    errorHandler: function () {
        console.log(`Server error...`);
    },
    logHandler: function (ws, message) {
        console.log(message);
    },
    sendMessageHandler: function (ws, message) {
        console.log(`Server sent a new message: ${message}`)
    },
};