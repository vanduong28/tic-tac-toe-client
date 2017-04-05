'use strict'

// const gameApi = require('./api.js')
// const gameUi = require('./ui.js')
// const getFormFields = require('../../../lib/get-form-fields')

const player1 = 'X'
const player2 = 'O'
let currentPlayer = player2
let moveCount = 0
const gameBoard = new Array(9)

const handleClick = function (event) {
  event.preventDefault()
  const cell = this.id
  console.log('cell is: ', cell)
  if (moveCount < 9) {
    $('#' + cell).html(currentPlayer = currentPlayer === player1 ? player2 : player1)
    $('#' + cell).off('click')
    gameBoard.push(cell)
    console.log(gameBoard)
    moveCount = moveCount += 1
  } else if (moveCount >= 9) {
    console.log('draw!')
  }
  console.log('move count is: ', moveCount)
}

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
}
