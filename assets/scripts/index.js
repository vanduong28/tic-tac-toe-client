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
  $('#sign-up').on('submit', game.onSignUp)
  $('#sign-in').on('submit', game.onSignIn)
  $('#sign-out').on('submit', game.onSignOut)
  $('#change-password').on('submit', game.changePassword)
})
