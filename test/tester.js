const { _, log } = require('basd')
const { Spinner, spinner, Progress } = require('../lib/main')

async function test() {
  const bar = new Progress()
  bar.start()
  await _.sleep(250)
  for (let ii = 0; ii < 50; ii++) {
    await _.sleep(50)
    bar.increment(1)
  }
  bar.setTotal(200)
  for (let ii = 0; ii < 50; ii++) {
    await _.sleep(50)
    bar.increment(2)
  }
  bar.stop()

  spinner.start('Here we go')
  await _.sleep(1000)
  for (let ii = 0; ii < 33; ii++) {
    spinner.text = `Cool beans #${ii + 1}`
    await _.sleep(100)
  }
  spinner.succeed('We did it!')
}

_.executor(test)
