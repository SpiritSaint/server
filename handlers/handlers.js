const ServerHandlers = require('./server/server');
const ClientHandlers = require('./client/client');

module.exports = {
    /**
     * Handlers related to Client
     */
    client: ClientHandlers,
    /**
     * Handlers related to Server
     */
    server: ServerHandlers,
};