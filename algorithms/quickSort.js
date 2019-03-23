const swapElements = require('../utils/swapElements');

/**
 * Quick sort is similar to Merge sort in that it uses a "Divide and Conquer"
 * strategy. This algorithm elects an element in the array and then creates
 * two arrays of values lower and higher than that element.
 *
 * This is a fast sorting algorithm and in some cases will out-perform the
 * native Array.sort function built in to the JavaScript language.
 *
 * Average time complexity: O(n log(n))
 *
 * @param arr {Object[]}
 * @param sortField {string}
 * @returns {Object[]}
 */
function quickSort(arr, sortField) {
  const clonedArr = arr.slice();

  const pivotIndex = clonedArr.length - 1;
  const pivot = clonedArr[pivotIndex];

  const lessThanArr = [];
  const greaterThanArr = [];

  for (let i = 0; i < clonedArr.length; i++) {
    if (pivot[sortField] <= clonedArr[i][sortField]) {
      lessThanArr.push(clonedArr[i]);

      swapElements(clonedArr, i, pivotIndex);
    } else {
      greaterThanArr.push(clonedArr[i]);
    }
  }

  return clonedArr;
}

module.exports = quickSort;
