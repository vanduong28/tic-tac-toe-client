'use strict'

const config = require('../config')
const store = require('../store')
// const game = require('../../../game_tracker/game.js')

const signUp = (data) => {
  console.log('data is: ', data)
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data: data
  })
}

const signOut = () => {
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const changePassword = (data) => {
  console.log('data is ', data)
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const createGame = (data) => {
  console.log('game is: ', data)
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.store.token
    },
    // set an empty object?
    data: '{}'
  })
}

// const showGame = (data) => {
//   console.log('game is: ', data)
//   return $.ajax({
//     url: config.apiOrigin + '/games',
//     method: 'POST',
//     data: data
//   })
// }

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  createGame
}
