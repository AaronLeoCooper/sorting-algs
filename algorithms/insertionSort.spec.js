const { unsortedSample, sortedSample } = require('./__mocks__/sampleData');

const insertionSort = require('./insertionSort');

describe('insertionSort', () => {
  it('Should accurately sort the given unsorted array', () => {
    const result = insertionSort(unsortedSample, 'title');

    expect(result).toEqual(sortedSample);
  });

  it('Should not change an already sorted array', () => {
    const result = insertionSort(sortedSample, 'title');

    expect(result).toEqual(sortedSample);
  });
});
