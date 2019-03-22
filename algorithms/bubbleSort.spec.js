const { unsortedSample, sortedSample } = require('./__mocks__/sampleData');

const bubbleSort = require('./bubbleSort');

describe('bubbleSort', () => {
  it('Should accurately sort the given unsorted array', () => {
    const result = bubbleSort(unsortedSample, 'title');

    expect(result).toEqual(sortedSample);
  });

  it('Should not change an already sorted array', () => {
    const result = bubbleSort(sortedSample, 'title');

    expect(result).toEqual(sortedSample);
  });
});
