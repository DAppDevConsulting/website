// Require all tasks in gulp/tasks, including subfolders
// require('require-dir')('./gulp/tasks', {recurse: true});

require('./gulp/tasks/clean');
require('./gulp/tasks/copy');
require('./gulp/tasks/lint');
require('./gulp/tasks/pug');
require('./gulp/tasks/sass');
require('./gulp/tasks/sprite-svg');
require('./gulp/tasks/webpack');
require('./gulp/tasks/server');
require('./gulp/tasks/watch');
require('./gulp/tasks/build');
require('./gulp/tasks/default');
