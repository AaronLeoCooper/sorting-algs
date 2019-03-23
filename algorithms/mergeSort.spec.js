const { unsortedSample, sortedSample } = require('./__mocks__/sampleData');

const mergeSort = require('./mergeSort');

describe('mergeSort', () => {
  it('Should accurately sort the given unsorted array', () => {
    const result = mergeSort(unsortedSample, 'title');

    expect(result).toEqual(sortedSample);
  });

  it('Should not change an already sorted array', () => {
    const result = mergeSort(sortedSample, 'title');

    expect(result).toEqual(sortedSample);
  });
});
