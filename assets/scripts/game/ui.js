'use strict'
const store = require('../store')

const signUpSuccess = (data) => {
  console.log(data)
  $('#signUp-modal').modal('hide')
}

const signUpFailure = (error) => {
  console.error(error)
}

const signInSuccess = (data) => {
  console.log('signIn success ran. data is: ', data)
  store.user = data.user
  $('#signIn-modal').modal('hide')
}

const signInFailure = (error) => {
  console.error('signIn failure ran. error is: ', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}
