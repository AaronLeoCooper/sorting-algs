/**
 * Bubble Sort sorts an array by comparing two items and swapping them
 * if item A is greater then item B. It repeats this operation on the
 * array continuously until the array is fully sorted.
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
        clonedArr.splice(i, 1, b);
        clonedArr.splice(i + 1, 1, a);

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
