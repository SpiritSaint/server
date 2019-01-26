module.exports = {
    closeHandler: function (code, reason) {
        console.log(`Client connection is now closed... with code: ${code} and reason: ${reason}`);
    },
    messageHandler: function(message) {
        console.log(`Client sent a new message: ${message}`);
    },
};