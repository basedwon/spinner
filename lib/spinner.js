const Spinnies = require('spinnies')
const spinners = require('cli-spinners')

/**
 * Represents a spinner for command line interfaces.
 * @type Spinner
 */
class Spinner {
  /**
   * Creates an instance of Spinner.
   * @param {Object} [opts={}] - The options for the spinner.
   * @param {string} [opts.id='spinner'] - The unique identifier for the spinner.
   * @param {string} [opts.color='green'] - The color of the spinner.
   * @param {string} [opts.succeedColor] - The color when spinner succeeds. Defaults to `opts.color`.
   * @param {string} [opts.failColor='redBright'] - The color when spinner fails.
   * @param {string} [opts.spinner='aesthetic'] - The spinner style.
   */
  constructor(opts = {}) {
    this.id = opts.id || 'spinner'
    this.color = opts.color || 'green'
    this.succeedColor = opts.succeedColor || this.color
    this.failColor = opts.failColor || 'redBright'
    Object.defineProperty(this, 'spinner', {
      value: new Spinnies({ color: this.color, spinner: spinners[opts.spinner || 'aesthetic'] })
    })
  }

  /**
   * Starts the spinner with provided text and color.
   * @param {string} text - The text to display alongside the spinner.
   * @param {string} [color] - The color of the spinner. Defaults to the spinner's color.
   */
  start(text, color) {
    this.spinner.add(this.id, { text, color: color || this.color })
  }

  /**
   * Updates the spinner's text and color.
   * @param {string} text - The new text to display.
   * @param {string} [color] - The new color of the spinner. Defaults to the spinner's color.
   */
  update(text, color) {
    this.spinner.update(this.id, { text, color: color || this.color })
  }

  /**
   * Sets the text of the spinner.
   * @param {string} text - The new text to display.
   */
  set text(text) {
    this.update(text)
  }

  /**
   * Marks the spinner as successful.
   * @param {string} text - The success message to display.
   * @param {string} [color] - The color of the success message. Defaults to the spinner's succeedColor.
   */
  succeed(text, color) {
    this.spinner.succeed(this.id, { text, succeedColor: color || this.succeedColor })
  }

  /**
   * Marks the spinner as failed.
   * @param {string} text - The failure message to display.
   * @param {string} [color] - The color of the failure message. Defaults to the spinner's failColor.
   */
  fail(text, color) {
    this.spinner.fail(this.id, { text, failColor: color || this.failColor })
  }

  /**
   * Creates a new instance of Spinner.
   * @returns {Spinner} A new Spinner instance.
   */
  static get spinner() {
    return new this()
  }

  /**
   * Returns the Spinner class.
   * @returns {Spinner} The Spinner class.
   */
  static get Spinner() {
    return this
  }

  /**
   * Creates and returns a new spinner with provided options.
   * @param {Object} opts - The options to create a new spinner.
   * @returns {Spinner} A new Spinner instance.
   */
  static spin(opts) {
    return new this(opts)
  }

  /**
   * Gets the singleton instance of the Spinner.
   * @returns {Spinner} The singleton instance of the Spinner.
   */
  static get spins() {
    if (this._instance) return this._instance
    this._instance = this.spinner
    return this._instance
  }
}

module.exports = Spinner
