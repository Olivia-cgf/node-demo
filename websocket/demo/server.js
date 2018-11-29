var WebSocketServer = require('ws').Server,
wss = new WebSocketServer({ port: 8181 });
wss.on('connection', function (ws) {
    console.log('client connected');
    ws.on('message', function (message) {
        console.log(message);
    });
});
// const WebSocket = require('ws');

// const wss = new WebSocket.Server({
//   port: 8181
// });

// wss.on('connection', function (ws) {
//         console.log('client connected');
//         ws.on('message', function (message) {
//             console.log(message);
//         });
// });
console.log("http server running on port 8181 ...") ;