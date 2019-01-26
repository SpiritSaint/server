const ServerHandlers = require('./server/server');
const ClientHandlers = require('./client/client');

module.exports = {
    client: ClientHandlers,
    server: ServerHandlers,
};