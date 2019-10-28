// Pseudocode
/* if string is made of no letters or just one letter then it is a palidrome
 * Otherwise, compare the first and last letters of the string
 * if first and last letters differ, then the string is not a palidrome
 * Otherwise, strip them from the string and determine whether the string that
 *  remains is a palidrome.
 * Take the answer for this smaller string and use it as the answer for the
 *  original string
 */

function isPalidrome(word) {
  const len = word.length;
  if (len === 1 || word === "") return true;

  if (word[0] === word[len - 1]) {
    let nextWord = word.substring(1, len - 1);
    return true && isPalidrome(nextWord);
  }

  return false;
}

const testWord = "motor";
const testWord2 = "rotor";
const result = isPalidrome(testWord);
const result2 = isPalidrome(testWord2);
console.log({ result, result2 });
