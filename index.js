var spawn = require('child_process').spawn;

function fails (command, callback) {
  var process = spawn(command, { shell: true, stdio: 'inherit' })

  process.on('close', function (code) {
    if (code === 0) {
      return callback(false)
    }
    return callback(true)
  })
}

module.exports = fails
