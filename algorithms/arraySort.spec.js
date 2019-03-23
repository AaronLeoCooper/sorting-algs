const { unsortedSample, sortedSample } = require('./__mocks__/sampleData');

const arraySort = require('./arraySort');

describe('arraySort', () => {
  it('Should accurately sort the given unsorted array', () => {
    const result = arraySort(unsortedSample, 'title');

    expect(result).toEqual(sortedSample);
  });

  it('Should not change an already sorted array', () => {
    const result = arraySort(sortedSample, 'title');

    expect(result).toEqual(sortedSample);
  });
});
