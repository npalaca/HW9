let moment = require('moment');

console.log(moment().format('dddd, MMMM Do YYYY'));

let start = moment('1976-11-26');
let end = moment();
console.log(`${end.diff(start, 'years')} years ago`);

