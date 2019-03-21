const fs = require('fs');
const path = require('path');
const prompts = require('prompts');

const algorithms = require('./algorithms');
const benchmark = require('./utils/benchmark');

const algoNames = {
  bubbleSort: 'Bubble sort'
};

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

  const data = require('./data/movies.json');

  const runAlgorithm = () => algorithms[algorithm](data, 'title');

  const { runTimeSecs, result } = benchmark(runAlgorithm);

  const resultFilePath = path.resolve(__dirname, `results/movies-${algorithm}.json`);
  const stringResult = JSON.stringify(result, null, 2);

  fs.writeFileSync(resultFilePath, stringResult, 'utf8');

  console.log(`${algoNames[algorithm]} took ${runTimeSecs} secs to finish sorting`);
}

prompt();
