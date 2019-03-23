/**
 * Array sort uses the native Array.sort implementation built into JS for
 * comparison against the other sorting mechanisms.
 *
 * Since Array.sort is a built-in function, the implementation details will
 * vary depending on the JavaScript engine, although quick sort or merge sort
 * is commonly thought to be used for the best performance.
 *
 * @param arr {Object[]}
 * @param sortField {string}
 * @returns {Object[]}
 */
function arraySort(arr, sortField) {
  const clonedArr = arr.slice();

  return clonedArr.sort((a, b) => {
    if (a[sortField] > b[sortField]) {
      return 1;
    }

    if (a[sortField] < b[sortField]) {
      return -1;
    }

    return 0;
  });
}

module.exports = arraySort;
