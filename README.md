# Sorting Algorithms with JS

I haven't had a chance in the last few years to exercise my sorting algorithms, so
I feel it's about time I fixed that. This repo showcases algorithms I've been interested
in playing with. Nothing spectacular here, just a bit of self-learning. I plan to continue
adding additional sorting algorithms.

Installation is done via the command: `yarn install`.

> NPM should also work too: `npm install`

This was built and tested using Node v10, though it should run in Node v8+.

## Commands

- `yarn start` — run the CLI program, sorted data gets written to JSON files inside `/results`
- `yarn test` — Run tests once
- `yarn test:watch` — Run tests continuously as source files change

> The unit tests don't make assertions about how long the algorithms take to complete,
  they only exist here to assert the accuracy of their ability to sort arrays.

## Notes

- Huge credit goes to this awesome source of information on sorting algos:
  [GeeksForGeeks](https://www.geeksforgeeks.org/). I took inspiration from the various algorithms
  they detail there. It goes to show how well they describe them from a high-level, because I was
  able to write these implementations based mainly on their explanations, though tougher ones
  like Merge Sort I found the Python code samples to be a good guide.
- These are **not** the most efficient algorithm implementations in terms of limiting time needed
  to finish execution. I focused on code readability. There's definitely seconds that can be shaved
  off with some simple tweaks (e.g. aborting loops early when it's possible to calculate if it's
  unnecessary to carry on sorting) 
- The sample data was deliberately used because it features an array of objects, instead of just
  an array of primitive values. I felt it would be closer to what a "real" application would use
  in situations where sorting is needed. For more "pure" results that show a truer representation
  of the efficiency of the algorithms, a simpler dataset could be used.
- I found that there was no discernible drop in performance between writing a Merge Sort
  implementation that always updated the array in place, as compared to an implementation that made
  shallow array copies, returning new sorted sub-arrays and did not affect the original array.
  I suspect that whilst this is ok on my machine, for machines with less memory it's possible
  that they'll struggle when confronted with massive datasets. I haven't tested this though.
