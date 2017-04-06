'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')

const game = require('./game/events')

$(() => {
  $(document).ready(game.newGame)
  $('.new-game-button').on('click', game.newGame)
  // individual cells
  // $('#cell1').on('click', game.handleClick)
  // $('#cell2').on('click', game.handleClick)
  // $('#cell3').on('click', game.handleClick)
  // $('#cell4').on('click', game.handleClick)
  // $('#cell5').on('click', game.handleClick)
  // $('#cell6').on('click', game.handleClick)
  // $('#cell7').on('click', game.handleClick)
  // $('#cell8').on('click', game.handleClick)
  // $('#cell9').on('click', game.handleClick)
})
