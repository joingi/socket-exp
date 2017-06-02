var moment = require('moment');
var now = moment();

console.log(now.format());
// uppercase X = secunds
console.log(now.format('X'));
// lowercase x = milisecunds
console.log(now.format('x'));
// same
console.log(now.valueOf());

var timestamp = 1496435368118;
var timestampMoment = moment.utc(timestamp);

console.log(timestampMoment.local().format('h:mm a'));

// now.subtract(1, 'year');

// console.log(now.format());
// console.log(now.format('MMMM Do YYYY, hh:mma'));




// Possible formats
// console.log(moment().format('MMMM Do YYYY, h:mm:ss a')); // juni 2. 2017, 10:09:59 pm
// console.log(now.format('MMMM Do YYYY, h:mm:ss a')); // juni 2. 2017, 10:09:59 pm
// moment().format('dddd');                    // fredag
// moment().format("MMM Do YY");               // jun 2. 17
// moment().format('YYYY [escaped] YYYY');     // 2017 escaped 2017
// moment().format();                          // 2017-06-02T22:09:59+02:00

// Complet Docs
// http://momentjs.com/docs/#/displaying/