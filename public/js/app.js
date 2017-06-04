var name = getQueryVariable('name') || 'Anonymous';
var room = getQueryVariable('room');
var socket = io();

console.log(name + ' wants to join ' + room);

// Update room name
var $chatTitle = jQuery('.room-title');
$chatTitle.text(room);

// Connect to chat with name to spesific room
// User sends request to server.js socket.on(joinRoom)
socket.on('connect', function () {
    console.log('User connected to socket');
    socket.emit('joinRoom', {
        name: name,
        room: room
    });
});

socket.on('message', function (message) {
    var momentTimestamp = moment.utc(message.timestamp);
    var localTimestamp = momentTimestamp.local().format('h:mm a');
    var $message = jQuery('.messages');

    console.log('New message');
    console.log(message.text);

    $message.append('<p><strong>' + message.name + ' ' + localTimestamp + '</strong></p>');
    $message.append('<p>' + message.text + '</p>');
});

// Handles submiting new message
var $form = jQuery('#message-form');

$form.on('submit', function (event) {
    event.preventDefault();

    var $message = $form.find('input[name=message]');

    socket.emit('message', {
        name: name,
        text: $message.val()
    });

     $message.val('');

});