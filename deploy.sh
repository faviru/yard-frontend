#! /usr/bin/env node

const { spawn } = require('child_process');

execFile('node_modules/.bin/now', [], (error, stdout, stderr) => {
  if (error) {
    throw error;
  }

  console.log(stdout);
}));