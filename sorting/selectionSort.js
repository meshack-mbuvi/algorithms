// Pseudocode

// 1. Find the smallest card. Swap it with the first
// 2. Find the second smallest item, swap it with the first
// 3. Repeat finding the next smallest item, swapping it into the
// correct position until the array is sorted.

// Implementation

function selectionSort(array) {
  const n = array.length;

  for (j = 0; j < n; j++) {
    let min = array[j];
    let minIndex = j;
    for (let i = j + 1; i < n; i++) {
      if (array[i] < min) {
        min = array[i];
        minIndex = i;
      }
    }

    // swap items now
    const item = array[j];
    array[j] = array[minIndex];
    array[minIndex] = item;
  }

  return array;
}

const test = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const result = selectionSort(test);
console.log(result);

/*
 * Analysis
 * o(n^2)
 **/
