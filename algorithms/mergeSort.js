/**
 * Merge sort uses a "Divide and Conquer" strategy by dividing up an array
 * recursively into increasingly small chunks until it reaches individual elements.
 * It then reverses the division by merging the divided arrays back together
 * in the correct order.
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
function mergeSort(arr, sortField) {
  if (arr.length < 2) {
    return arr;
  }

  const middleIndex = Math.floor(arr.length / 2);

  const leftArr = mergeSort(arr.slice(0, middleIndex), sortField);
  const rightArr = mergeSort(arr.slice(middleIndex), sortField);

  const clonedArr = arr.slice();

  let li = 0;
  let ri = 0;
  let insertIndex = 0;

  while (li < leftArr.length && ri < rightArr.length) {
    if (leftArr[li][sortField] <= rightArr[ri][sortField]) {
      clonedArr[insertIndex] = leftArr[li];
      li++;
    } else {
      clonedArr[insertIndex] = rightArr[ri];
      ri++;
    }

    insertIndex++;
  }

  while (li < leftArr.length) {
    clonedArr[insertIndex] = leftArr[li];
    li++;
    insertIndex++;
  }

  while (ri < rightArr.length) {
    clonedArr[insertIndex] = rightArr[ri];
    ri++;
    insertIndex++;
  }

  return clonedArr;
}

module.exports = mergeSort;
