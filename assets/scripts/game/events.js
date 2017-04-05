'use strict'

// const gameApi = require('./api.js')
// const gameUi = require('./ui.js')
// const getFormFields = require('../../../lib/get-form-fields')

// const onStart = function () {
//   let gameBoard = []
//   let currentPlayer = player_x
// }
//
// let currentPlayer = playerX
//
// const setLetter = function () {
//

// }
const handleClick = function (event) {
  event.preventDefault()
  const cell = this.id
  console.log('cell is: ', cell)
}

// currentPlayer = null
// playerX = null
//
// const newGame = function (event) {
//   console.log('new game')
//   const gameBoard = new Array(9)
//   let moveCount = 0
//   let currentPlayer = playerX
  // console.log(gameBoard)
  // console.log(moveCount)
  // console.log(currentPlayer)
// }

// const switchPlayer = function () {
//   if (currentPlayer === playerX) {
//     currentPlayer = playerO
//   } else if (currentPlayer === playerO) {
//     currentPlayer = playerX
//   }
//   return currentPlayer
// }

module.exports = {
  handleClick
  // newGame
}
