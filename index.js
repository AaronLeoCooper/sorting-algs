const fs = require('fs');
const path = require('path');
const prompts = require('prompts');

const algorithms = require('./algorithms');
const benchmark = require('./utils/benchmark');

const data = require('./data/movies.json');

const algoNames = {
  bubbleSort: 'Bubble sort',
  insertionSort: 'Insertion sort',
  all: 'Run all sorting algorithms one after another'
};

function runAlgorithm(algorithm) {
  const { runTimeSecs, result } = benchmark(() => algorithms[algorithm](data, 'title'));

  const resultFilePath = path.resolve(__dirname, `results/movies-${algorithm}.json`);
  const stringResult = JSON.stringify(result, null, 2);

  fs.writeFileSync(resultFilePath, stringResult, 'utf8');

  console.log(`${algoNames[algorithm]} took ${runTimeSecs} secs to finish sorting`);
}

async function prompt() {
  const { algorithm } = await prompts({
    type: 'select',
    name: 'algorithm',
    message: 'Choose an algorithm:',
    choices: Object.keys(algoNames).map((key) => ({
      title: algoNames[key],
      value: key
    }))
  });

  if (algorithm === 'all') {
    Object.keys(algorithms).forEach((algo) => {
      runAlgorithm(algo);
    });

    return;
  }

  runAlgorithm(algorithm);
}

prompt();
