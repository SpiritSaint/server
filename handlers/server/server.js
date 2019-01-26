module.exports = {
    /**
     * This handler will be executed when server emmit an close event
     */
    closeHandler: function () {
        console.log(`Server closed...`)
    },
    /**
     * This handler will be executed when server receive a new message
     * @param message
     */
    messageHandler: function(message) {
        console.log(`Server receive a new message: ${message}`);
    },
    /**
     * This handler will be executed when server start the port listening
     */
    listeningHandler: function() {
        console.log(`Server is now listening with port ${process.env.SERVER_PORT}...`);
    },
    /**
     * This handler will be executed when server emit an error event
     */
    errorHandler: function () {
        console.log(`Server error...`);
    },
    /**
     * This handler will be executed when server emmit log event
     * @param message
     */
    logHandler: function (message) {
        console.log(message);
    },
    /**
     * This handler will be executed when server send message to client
     * @param ws
     * @param message
     */
    sendMessageHandler: function (ws, message) {
        console.log(`Server sent a new message: ${message}`)
    },
};