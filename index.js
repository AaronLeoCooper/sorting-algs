const fs = require('fs');
const path = require('path');
const prompts = require('prompts');

const algorithms = require('./algorithms');
const benchmark = require('./utils/benchmark');

const data = require('./data/movies.json');

async function prompt() {
  const { algorithm } = await prompts({
    type: 'select',
    name: 'algorithm',
    message: 'Choose an array sort algorithm to execute:',
    choices: [
      ...algorithms,
      { value: 'all', title: 'Run all algorithms one after another' }
    ]
  });

  if (algorithm === 'all') {
    algorithms.forEach(runAlgorithm);

    return;
  }

  runAlgorithm(algorithms.find(({ value }) => value === algorithm));
}

function runAlgorithm({ value, title, sort }) {
  const { runTimeSecs, result } = benchmark(() => sort(data, 'title'));

  const resultFilePath = path.resolve(__dirname, `results/movies-${value}.json`);
  const stringResult = JSON.stringify(result, null, 2);

  fs.writeFileSync(resultFilePath, stringResult, 'utf8');

  console.log(`${title} took ${runTimeSecs} secs to finish sorting`);
}

prompt();
