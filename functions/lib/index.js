"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const express = require("express");
const path_1 = require("path");
const socketio = require("socket.io");
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
const App = express();
App.use('/node_modules', express.static(path_1.join(__dirname, 'node_modules')));
App.get('/', (req, res) => {
    res.send('Hello from firebase');
});
const io = socketio();
exports.app = functions.https.onRequest(App);
io.on('connection', (socket) => {
    socket.emit('pong');
});
io.listen(4321);
//# sourceMappingURL=index.js.map