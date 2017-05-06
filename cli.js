var fails = require('.')

var command = process.argv[2]

fails(command, function (failed) {
  if (!failed) process.exit(1)
})
