const swapElements = require('../utils/swapElements');

/**
 * Bubble Sort sorts an array by comparing two items and swapping them
 * if item A is greater then item B. It repeats this operation on the
 * array continuously until the array is fully sorted.
 *
 * This sorting algorithm is on average one of the slowest possible algorithms to
 * use because of the copious number of loops required over the entire array.
 *
 * Average time complexity: O(n^2)
 *
 * @param arr {Object[]}
 * @param sortField {string}
 * @returns {Object[]}
 */
function bubbleSort(arr, sortField) {
  const clonedArr = arr.slice();

  let isSorted = false;

  do {
    let didSort = false;

    for (let i = 0; i < clonedArr.length - 1; i++) {
      const a = clonedArr[i];
      const b = clonedArr[i + 1];

      if (a[sortField] > b[sortField]) {
        swapElements(clonedArr, i, i + 1);

        didSort = true;
      }
    }

    if (!didSort) {
      isSorted = true;
    }
  } while (!isSorted);

  return clonedArr;
}

module.exports = bubbleSort;
