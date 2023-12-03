/**
 * @fileoverview Main entry point for the CLI spinners, progress bars, and color modules.
 * Exports the Spinner and Progress classes along with a singleton spinner instance and colors utility.
 */

const { Spinner, spinner } = require('./spinner')
const Progress = require('./progress')
const colors = require('cli-color')

// The Spinner class, used to create and manage CLI spinners.
exports.Spinner = Spinner

// A singleton instance of the Spinner class.
// Useful for quick access when only one spinner is needed.
exports.spinner = spinner

// The Progress class, used to create and manage CLI progress bars.
exports.Progress = Progress

/**
 * A utility for adding color and style to CLI text.
 * Provided by the 'cli-color' package.
 */
exports.colors = colors
