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

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
