require('dotenv').load();
const WebSocket = require('ws');
const Handlers = require('./handlers/handlers');
const Helpers = require('./helpers/helpers');
const Server = new WebSocket.Server({ port: process.env.SERVER_PORT });

Server.on('connection', function connection(Client) {
    Handlers.server.logHandler(Client, "Client is now connected...");
    Client.on('message', Handlers.client.messageHandler);
    Client.on('close', Handlers.client.closeHandler);
    Helpers.sendMessage(Client, "Welcome to the server...");
});

Server.on("listening", Handlers.server.listeningHandler);

Server.on("close", Handlers.server.closeHandler);

Server.on("error", Handlers.server.errorHandler);
