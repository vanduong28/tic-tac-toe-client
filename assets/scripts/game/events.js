'use strict'

const gameApi = require('./api.js')
const gameUi = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

const player1 = 'X'
const player2 = 'O'
let currentPlayer = player1
let moveCount = 0
let gameBoard = ['', '', '', '', '', '', '', '', '']
// let gameBoard = new Array(9)

const handleClick = function (event) {
  event.preventDefault()
  const cell = this.id
  // console.log('cell is: ', cell)
  moveCount = moveCount += 1
  if (moveCount < 10) {
    $('#' + cell).html(currentPlayer)
    // disable event listener
    $('#' + cell).off('click')

    // identify index of the cell that was clicked
    // extract integer from div id
    // convert string to integer
    const indexOfCellClicked = parseInt(cell[4])
    // update gameBoard array at index with letter
    gameBoard[indexOfCellClicked] = currentPlayer

    // console.log(gameBoard)
    // pass index to game object
    gameApi.updateGame(indexOfCellClicked, currentPlayer)
    .then(gameUi.updateGameSuccess)
    .catch(gameUi.updateGameFailure)

    if (gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2] ||
        gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6] ||
        gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8]) {
      if (gameBoard[0] === 'X') {
        markGameWon(currentPlayer)
        // console.log('X wins')
      } else if (gameBoard[0] === 'O') {
        markGameWon(currentPlayer)
        // console.log('O wins')
      }
    } else if (gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8] ||
        gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6]) {
      if (gameBoard[2] === 'X') {
        markGameWon(currentPlayer)
        // console.log('X wins')
      } else if (gameBoard[2] === 'O') {
        markGameWon(currentPlayer)
        // console.log('O wins')
      }
    } else if (gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5]) {
      if (gameBoard[3] === 'X') {
        markGameWon(currentPlayer)
        // console.log('X wins')
      } else if (gameBoard[3] === 'O') {
        markGameWon(currentPlayer)
        // console.log('O wins')
      }
    } else if (gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8]) {
      if (gameBoard[6] === 'X') {
        markGameWon(currentPlayer)
        // console.log('X wins')
      } else if (gameBoard[6] === 'O') {
        markGameWon(currentPlayer)
        // console.log('O wins')
      }
    } else if (gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7]) {
      if (gameBoard[1] === 'X') {
        markGameWon(currentPlayer)
        // console.log('X wins')
      } else if (gameBoard[1] === 'O') {
        markGameWon(currentPlayer)
        // console.log('O wins')
      }
    } else if (moveCount >= 9) {
      $('.game-message').text('No winner!')
      // console.log('draw!')
      gameApi.updateOver()
      .then(gameUi.updateOverSuccess)
      .catch(gameUi.updateOverFailure)
    }
  }
  currentPlayer = currentPlayer === player1 ? player2 : player1
  // console.log('move count is: ', moveCount)
}
// indicates winner by updating the UI (DOM) and disabling cell event listener
const markGameWon = function (winnerLetter) {
  $('.game-message').text('Player ' + winnerLetter + ' wins!')
  $('.col-xs-4').off('click')
  gameApi.updateOver()
  .then(gameUi.updateOverSuccess)
  .catch(gameUi.updateOverFailure)
}

// instead of setting variables, store response of ajax call to server?
const newGame = function (event) {
// empty board with no letters populated
  $('.col-xs-4').empty()
// set moveCount at zero
  moveCount = 0
// set currentPlayer to player1
  currentPlayer = player1
// empty game board
  // gameBoard = new Array(9)
  gameBoard = ['', '', '', '', '', '', '', '', '']
  // reset cell event listeners
 // turn off event listener to prevent duplicate listeners
  $('.col-xs-4').off('click')
  // don't include () for handleClick b/c this is a callback and shouldn't run
  // each time newGame is called
  $('.col-xs-4').on('click', handleClick)
  // remove game message so it doesn't continue to display
  $('.game-message').text('')
  // remove message to click button to start new game
  $('.new-game-prompt').text('')
  // create game object
  gameApi.createGame()
    .then(gameUi.createGameSuccess)
    .catch(gameUi.createGameFailure)
}

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  // console.log('sign up button clicked')
  gameApi.signUp(data)
    .then(gameUi.signUpSuccess)
    .catch(gameUi.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  // console.log('sign in ran')

  const data = getFormFields(this)
  gameApi.signIn(data)
    .then(gameUi.signInSuccess)
    .catch(gameUi.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  // console.log('sign out ran')

  gameApi.signOut()
    .then(gameUi.signOutSuccess)
    .catch(gameUi.signOutFailure)
}

const changePassword = function (event) {
  event.preventDefault()
  // console.log('change password ran')

  const data = getFormFields(this)
  gameApi.changePassword(data)
    .then(gameUi.changePasswordSuccess)
    .catch(gameUi.changePasswordFailure)
}

const getPlayerStats = function (event) {
  event.preventDefault()
  // console.log('get player stats clicked')
  gameApi.getStats()
    .then(gameUi.getStatsSuccess)
    .catch(gameUi.getStatsFailure)
}

const hideBoard = function (event) {
  $('.game-board').hide()
}

const hideNewGameBtn = function (event) {
  $('.new-game-button').hide()
}

const hideButtons = function (event) {
  $('.hide-on-start').hide()
}

module.exports = {
  handleClick,
  newGame,
  onSignUp,
  onSignIn,
  onSignOut,
  changePassword,
  getPlayerStats,
  hideBoard,
  hideNewGameBtn,
  hideButtons
}
