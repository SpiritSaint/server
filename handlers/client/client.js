module.exports = {
    /**
     * This handler will be executed when client emmit an close event
     */
    closeHandler: function (code, reason) {
        console.log(`Client connection is now closed... with code: ${code} and reason: ${reason}`);
    },
    /**
     * This handler will be executed when client sent an message
     */
    messageHandler: function(message) {
        console.log(`Client sent a new message: ${message}`);
    },
};