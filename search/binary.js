// Description

// 1. let min = 1 and max = n
// 2. Guess the average of max and min, round down so that it is an integer
// 3. if you guessed the number stop.
// 4. if the guess was too low, set min to be one larger than the guess
// 5. if the guess was too high, set max to be one smaller than the guess
// 6. Go back to step too

// Implementation

function binarySearch(arr, searchKey) {
  let min = 1;
  let max = arr.length;

  while (max > min) {
    let index = Math.floor((min + max) / 2);
    let item = arr[index];

    if (item == searchKey) {
      return index;
    } else if (item < searchKey) {
      min = index + 1;
    } else {
      max = index - 1;
    }
  }
  return -1;
}

// test data
const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53];

const result = binarySearch(primes, 23);

// Expected result is 8; 23 is found at index 8
console.log({ result });

/*
 * Analysis
 * Binary search halves search data on every iteration
 * Pattern, array of 8 items, 4 guesses, 16 items, 5 guesses
 * Every time array doubles in size, atmost one more guess is required
 * ie: let array of n => m guesses
 * 2n => m + 1 guesses
 * O(n) = log2 n
 **/
