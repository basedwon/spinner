/**
 * @fileoverview Main entry point for the CLI spinners and progress bars.
 * Exports the Spinner and Progress classes along with a singleton spinner instance.
 */

const { Spinner, spinner } = require('./spinner')
const Progress = require('./progress')

// Used to create and manage CLI spinners.
exports.Spinner = Spinner

/**
 * A singleton instance of the Spinner class.
 * Useful for quick access when only one spinner is needed.
 */
exports.spinner = spinner

// The Progress class, used to create and manage CLI progress bars.
exports.Progress = Progress
