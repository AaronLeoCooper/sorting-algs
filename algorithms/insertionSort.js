const swapElements = require('../utils/swapElements');

/**
 * Insertion Sort sorts an array by looping through all array entries from the
 * second element once and pushing sorted elements to the left of the array,
 * putting them into the correct position if they are less than the element before
 * them.
 *
 * This sorting mechanism only slightly improves on Bubble sort.
 *
 * Average time complexity: O(n^2)
 *
 * @param arr {Object[]}
 * @param sortField {string}
 * @returns {Object[]}
 */
function insertionSort(arr, sortField) {
  const clonedArr = arr.slice();

  for (let i = 1; i < clonedArr.length; i++) {
    // this is the "sorted" portion of the array plus one element to the right
    const leftSlice = clonedArr.slice(0, i + 1);

    // inner loop will keep moving the element closer to the start until it is sorted
    for (let ii = leftSlice.length - 1; ii > 0; ii--) {
      const a = clonedArr[ii];
      const b = clonedArr[ii - 1];

      if (a[sortField] < b[sortField]) {
        swapElements(clonedArr, ii - 1, ii);
      } else {
        break;
      }
    }
  }

  return clonedArr;
}

module.exports = insertionSort;
