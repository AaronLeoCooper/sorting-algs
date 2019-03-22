/**
 * Swaps 2 elements in the passed array by their indexes.
 * @param arr {Array}
 * @param i1 {number}
 * @param i2 {number}
 * @returns {Array}
 */
function swapElements(arr, i1, i2) {
  const a = arr[i1];
  const b = arr[i2];

  arr.splice(i1, 1, b);
  arr.splice(i2, 1, a);
}

module.exports = swapElements;
