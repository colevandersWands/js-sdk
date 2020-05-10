console.log('Exercise two');

const reverse = str => str.split('').reverse().join('');

try {
  module.exports = reverse;
} catch (err) { /* in the browser! */ }
