const childProcess = require('child_process');

childProcess.execFile('node_modules/.bin/now', ['deploy'], (error, stdout) => {
  if (error) {
    throw error;
  }

  console.log(stdout);
});
