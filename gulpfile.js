var requireDir = require('require-dir');
var config = require('./gulp/config.js');
config.bar = 'foo';
console.log(config);

// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks', { recurse: true });
