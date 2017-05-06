# fails
> Detect whether a command fails, and invert exit code.

## Install
```
npm i fails
```
or
```
yarn add fails
```

## Use
### CLI
```
fails "echo 'hi'"
# exit code = 1

fails "exit 1"
# exit code = 0
```

### JS
```
var fails = require('fails')

var command = 'echo "hi"'

function callback (failed) {
  // `failed` is true or false
}

fails(command, callback)
```
