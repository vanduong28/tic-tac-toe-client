'use strict'
const store = require('../store')
const game = require('../game')

const signUpSuccess = (data) => {
  console.log(data)
  $('#signUp-modal').modal('hide')
  $('.game-board').show()
}

const signUpFailure = (error) => {
  console.error(error)
}

const signInSuccess = (data) => {
  console.log('signIn success ran. data is: ', data)
  store.user = data.user
  $('#signIn-modal').modal('hide')
  $('.game-board').show()
}

const signInFailure = (error) => {
  console.error('signIn failure ran. error is: ', error)
}

const signOutSuccess = () => {
  console.log('signOut success ran. and nothing was returned')
  store.user = null
  $('#signOut-modal').modal('hide')
}

const signOutFailure = (error) => {
  console.error('signOut failure ran. error is: ', error)
}

const changePasswordSuccess = (data) => {
  console.log('change password success. data is: ', data)
  $('#changePasswordLabel').text('Password successfully changed')
}

const changePasswordFailure = (error) => {
  console.error('change password failure ran. error is: ', error)
}

const createGameSuccess = (data) => {
  console.log('data is: ', data)
  game.game = data.game
  console.log(game.game)
}

const createGameFailure = (error) => {
  console.error(error)
}

const updateGameSuccess = (data) => {
  console.log('update game success. data is: ', data)
}

const updateGameFailure = (error) => {
  console.error(error)
}

const updateOverSuccess = (data) => {
  console.log('update OVER to TRUE data is: ', data)
}

const updateOverFailure = (error) => {
  console.error(error)
}

const getStatsSuccess = (data) => {
  console.log('stats displayed: ', data)
  const gameTotal = Object.keys(data.games).length
  $('#player-stats-message').text("You've played " + gameTotal + ' games!')
}

const getStatsFailure = (error) => {
  console.error(error)
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
