var exec = require('child_process').exec;

function fails (command, callback) {
  var execed = exec(command)

  execed.stdout.pipe(process.stdout)
  execed.stderr.pipe(process.stderr)

  execed.on('exit', function (code) {
    if (code === 0) {
      return callback(false)
    }
    return callback(true)
  })
}

module.exports = fails
