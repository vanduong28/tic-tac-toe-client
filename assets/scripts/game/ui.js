'use strict'
const store = require('../store')
const game = require('../game')

const signUpSuccess = () => {
  // console.log(data)
  $('#signUp-modal').modal('hide')
  $('.game-prompt').hide()
  $('.sign-up-btn').hide()
  $('.sign-in-prompt').text('Sign in to start playing!')
  $('.game-message').text(' ')
}

const signUpFailure = () => {
  // console.error(error)
  $('#sign-up-modal-label').text('Error with sign up. Please try again.')
}

const signInSuccess = (data) => {
  // console.log('signIn success ran. data is: ', data)
  store.user = data.user
  $('#signIn-modal').modal('hide')
  $('.game-prompt').hide()
  $('.new-game-prompt').text('Click new game to get started')
  $('.sign-in-prompt').text(' ')
  $('.new-game-button').show()
  $('.hide-on-start').show()
  $('.sign-up-btn').hide()
  $('.sign-in-btn').hide()
  $('.game-message').text(' ')
  $('#sign-in-modal-label').text('Sign in')
}

const signInFailure = () => {
  // console.error('signIn failure ran. error is: ', error)
  $('#sign-in-modal-label').text('Incorrect email/password. Please try again.')
}

const signOutSuccess = () => {
  // console.log('signOut success ran. and nothing was returned')
  store.user = null
  $('#signOut-modal').modal('hide')
  $('.game-board').hide()
  $('.new-game-button').hide()
  $('.hide-on-start').hide()
  $('.game-prompt').text(' ')
  $('.game-message').text('Sign up or sign in to start playing!')
  $('.sign-up-btn').show()
  $('.sign-in-btn').show()
  $('.new-game-prompt').text('')
}

const signOutFailure = () => {
  // console.error('signOut failure ran. error is: ', error)
}

const changePasswordSuccess = () => {
  // console.log('change password success. data is: ', data)
  $('#changePasswordLabel').text('Password successfully changed')
}

const changePasswordFailure = () => {
  // console.error('change password failure ran. error is: ', error)
  $('#changePasswordLabel').text('Invalid password. Try again')
}

const createGameSuccess = (data) => {
  // console.log('data is: ', data)
  game.game = data.game
  // console.log(game.game)
  $('.game-board').show()
  $('.game-prompt').hide()
}

const createGameFailure = () => {
  // console.error(error)
}

const updateGameSuccess = () => {
  // console.log('update game success. data is: ', data)
}

const updateGameFailure = () => {
  // console.error(error)
}

const updateOverSuccess = () => {
  // console.log('update OVER to TRUE data is: ', data)
}

const updateOverFailure = () => {
  // console.error(error)
}

const getStatsSuccess = (data) => {
  // console.log('stats displayed: ', data)
  const gameTotal = Object.keys(data.games).length
  $('#player-stats-message').text("You've played " + gameTotal + ' games!')
}

const getStatsFailure = () => {
  // console.error(error)
  $('#player-stats-message').text('Error retrieving stats. Try again.')
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure,
  updateOverSuccess,
  updateOverFailure,
  getStatsSuccess,
  getStatsFailure
}
