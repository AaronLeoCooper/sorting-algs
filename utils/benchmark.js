function benchmark(func) {
  const startTime = new Date();

  const result = func();

  const endTime = new Date();

  return {
    runTimeSecs: (endTime - startTime) / 1000,
    result
  };
}

module.exports = benchmark;
