# Spinner

> Spin'er

[![npm](https://img.shields.io/npm/v/@basd/spinner?style=flat&logo=npm)](https://www.npmjs.com/package/@basd/spinner)
[![pipeline](https://gitlab.com/frenware/utils/spinner/badges/master/pipeline.svg)](https://gitlab.com/frenware/utils/spinner/-/pipelines)
[![license](https://img.shields.io/npm/l/@basd/spinner)](https://gitlab.com/frenware/utils/spinner/-/blob/master/LICENSE)
[![downloads](https://img.shields.io/npm/dw/@basd/spinner)](https://www.npmjs.com/package/@basd/spinner) 

[![Gitlab](https://img.shields.io/badge/Gitlab%20-%20?logo=gitlab&color=%23383a40)](https://gitlab.com/frenware/utils/spinner)
[![Github](https://img.shields.io/badge/Github%20-%20?logo=github&color=%23383a40)](https://github.com/basedwon/spinner)
[![Twitter](https://img.shields.io/badge/@basdwon%20-%20?logo=twitter&color=%23383a40)](https://twitter.com/basdwon)
[![Discord](https://img.shields.io/badge/Basedwon%20-%20?logo=discord&color=%23383a40)](https://discordapp.com/users/basedwon)

A comprehensive Node.js module providing a set of tools for creating elegant command line interfaces. This package includes features for CLI spinners, progress bars, and color management, all designed to enhance the user experience of your command-line applications.

## Features

- **CLI Spinners**: Utilize a variety of spinner styles for asynchronous operations.
- **Progress Bars**: Implement customizable progress bars for tracking lengthy processes.
- **Color Management**: Enhance the CLI with a range of colors for text and background.

## Installation

Install via npm:

```bash
npm install @basd/spinner
```

## Usage

### Spinners

```javascript
const { Spinner } = require('@basd/spinner')

const spinner = new Spinner({
  id: 'unique-spinner-id', // optional
  color: 'green', // optional
  spinner: 'dots' // optional, spinner style
})

spinner.start('Loading...')
// Update the spinner
spinner.update('Still loading...')
// Complete the spinner
spinner.succeed('Completed!')
```

### Progress Bars

```javascript
const { Progress } = require('@basd/spinner')

const progressBar = new Progress({
  total: 100, // total value of the progress bar
  preset: 'shades_classic' // optional, style of the progress bar
})

progressBar.start(0)
// Increment the progress
progressBar.increment(10)
// Update the progress bar to a specific value
progressBar.update(50)
// Complete the progress
progressBar.stop()
```

### Colors

```javascript
const { colors } = require('@basd/spinner')

console.log(colors.red('This is a red text'))
```

## Documentation

- [API Reference](/docs/api.md)

## Tests

In order to run the test suite, simply clone the repository and install its dependencies:

```sh
git clone https://github.com/basedwon/spinner.git
cd spinner
npm install
```

To run the tests:

```sh
npm test
```

## Contributing

Thank you! Please see our [contributing guidelines](/docs/contributing.md) for details.

## Donations

If you find this project useful and want to help support further development, please send us some coin. We greatly appreciate any and all contributions. Thank you!

**Bitcoin (BTC):**
```
1JUb1yNFH6wjGekRUW6Dfgyg4J4h6wKKdF
```

**Monero (XMR):**
```
46uV2fMZT3EWkBrGUgszJCcbqFqEvqrB4bZBJwsbx7yA8e2WBakXzJSUK8aqT4GoqERzbg4oKT2SiPeCgjzVH6VpSQ5y7KQ
```

## License

@basd/spinner is [MIT licensed](https://gitlab.com/frenware/utils/spinner/-/blob/master/LICENSE).
