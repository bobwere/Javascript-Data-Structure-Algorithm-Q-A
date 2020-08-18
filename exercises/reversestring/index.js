// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/**
 
 * @param {string} str The string
 */

function reverse(str) {

    return str.split('').reduce(
        (reversed, char) =>
        char + reversed,
        ''
    );
}

module.exports = reverse;


//solution 1 brute force
/*
function reverse(str) {
    const arr = str.split('');
    arr.reverse();
    return arr.join('');

}*/

//Solution 2
/*
function reverse(str) {
    let reversed = '';
    for (let char of str) {
        reversed = char + reversed;
    }
    return reversed;
}
*/