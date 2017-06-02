var socket = io();

socket.on('connect', function () {
    console.log('User connected to socket');
});

socket.on('message', function (message) {
    console.log('New message');
    console.log(message.text);
});