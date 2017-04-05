'use strict'

const gameBoard = new Array(9)
// const newGame = function () {
//   let moveCount = 0
//   let currentPlayer = player_x
//   let gameBoard = []
// }
//
// const isEmpty = function () {
//  if (gameBoard === []) {
//    console.log('yay')
//  } else {
//    console.log('boo')
//  }
// }

// game board index
// 0|1|2
// 3|4|5
// 6|7|8
const checkWin = function () {
  if (gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2] ||
      gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6] ||
      gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8]) {
    if (gameBoard[0] === 'X') {
      console.log('X wins')
    } else if (gameBoard[0] === 'O') {
      console.log('O wins')
    }
  } else if (gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8] ||
      gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6]) {
    if (gameBoard[2] === 'X') {
      console.log('X wins')
    } else if (gameBoard[2] === 'O') {
      console.log('O wins')
    }
  } else if (gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5]) {
    if (gameBoard[3] === 'X') {
      console.log('X wins')
    } else if (gameBoard[3] === 'O') {
      console.log('O wins')
    }
  } else if (gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8]) {
    if (gameBoard[6] === 'X') {
      console.log('X wins')
    } else if (gameBoard[6] === 'O') {
      console.log('O wins')
    }
  } else if (gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7]) {
    if (gameBoard[1] === 'X') {
      console.log('X wins')
    } else if (gameBoard[1] === 'O') {
      console.log('O wins')
    }
  }
}

module.exports = {
  // isEmpty,
  checkWin
}
