function insertionSort(array) {
  const n = array.length;

  for (let i = 1; i < n; i++) {
    let el = array[i];

    // loop to perform the insertion
    for (let j = i; j >= 0; j--) {
      if (array[j] > el) {
        array[j + 1] = array[j];
        array[j] = el;
      }
    }
  }
  return array;
}

const test = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

const result = insertionSort(test);
console.log({ result });
