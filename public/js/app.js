var socket = io();


socket.on('connect', function () {
    console.log('User connected to socket');
});

socket.on('message', function (message) {
    var momentTimestamp = moment.utc(message.timestamp);
    var localTimestamp = momentTimestamp.local().format('h:mm a')

    console.log('New message');
    console.log(message.text);

    jQuery('.messages').append('<p><strong>' + localTimestamp + ': </strong>' + message.text + '</p>');
});

// Handles submiting new message
var $form = jQuery('#message-form');

$form.on('submit', function (event) {
    event.preventDefault();

    var $message = $form.find('input[name=message]');

    socket.emit('message', {
        text: $message.val()
    });

     $message.val('');

});