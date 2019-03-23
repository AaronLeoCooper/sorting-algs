const { unsortedSample, sortedSample } = require('./__mocks__/sampleData');

const algorithms = require('./index');

describe('All sorting algorithms', () => {
  const algos = algorithms.map(({ title, sort }) => [title, sort]);

  describe.each(algos)('%s', (title, sort) => {
    it('Should accurately sort the given unsorted array', () => {
      const result = sort(unsortedSample, 'title');

      expect(result).toEqual(sortedSample);
    });

    it('Should not change an already sorted array', () => {
      const result = sort(sortedSample, 'title');

      expect(result).toEqual(sortedSample);
    });
  });
});
