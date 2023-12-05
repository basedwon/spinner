const cliProgress = require('cli-progress')

/**
 * Progress bar class for command line interfaces.
 * @type Progress
 */
class Progress {
  /**
   * Creates a new Progress instance.
   * @param {Object} opts - The options for the progress bar.
   * @param {number} [opts.etaBuffer=2] - The buffer for ETA calculation.
   * @param {boolean} [opts.clearOnComplete=false] - Whether to clear the progress bar on completion.
   * @param {string} [opts.preset='shades_classic'] - The preset style for the progress bar.
   * @param {number} [opts.total=100] - The total value of the progress bar.
   */
  constructor(opts = {}) {
    opts = {
      etaBuffer: 2,
      clearOnComplete: false,
      preset: 'shades_classic', // legacy, shades_classic, shades_grey, rect
      ...opts
    }
    this.progress = new cliProgress.SingleBar(opts, cliProgress.Presets[opts.preset])
    this.total = opts.total || 100
  }

  /**
   * Gets the total value of the progress bar.
   * @return {number} The total value.
   */
  get total() {
    return this.progress.total
  }

  /**
   * Sets the total value of the progress bar.
   * @param {number} total - The total value to be set.
   */
  set total(total) {
    return this.progress.total = total
  }

  /**
   * Starts the progress bar.
   * @param {number} [start=0] - The initial value from which to start.
   */
  start(start = 0) {
    this.progress.start(this.total, start)
  }

  /**
   * Increments the current value of the progress bar.
   * @param {number} delta - The value by which to increment.
   * @param {Object} [payload] - Additional payload information.
   */
  increment(delta, payload) {
    this.progress.increment(delta, payload)
  }

  /**
   * Updates the current value of the progress bar.
   * @param {number} value - The value to which the progress bar will be updated.
   * @param {Object} [payload] - Additional payload information.
   */
  update(value, payload) {
    this.progress.update(value, payload)
  }

  /**
   * Updates the estimated time of arrival (ETA).
   */
  updateETA() {
    this.progress.updateETA()
  }

  /**
   * Sets the total value of the progress bar.
   * @param {number} totalValue - The total value to be set.
   */
  setTotal(totalValue) {
    this.progress.setTotal(totalValue)
  }

  /**
   * Stops the progress bar and updates it to its total value.
   */
  stop() {
    this.update(this.total)
    this.progress.stop()
  }

  /**
   * Static getter for the Progress class itself. 
   * This can be useful when you need a reference to the class from a static method.
   * @returns {Progress} The Progress class.
   */
  static get Progress() {
    return Progress
  }

  /**
   * Static getter for the cli-progress library.
   * This allows access to the cli-progress library from the Progress class without needing to import it separately.
   * @returns {cliProgress} The cli-progress library.
   */
  static get cliProgress() {
    return cliProgress
  }
}

module.exports = Progress
