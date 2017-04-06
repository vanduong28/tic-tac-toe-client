'use strict'
// const store = require('../store')

const signUpSuccess = (data) => {
  console.log(data)
  // hide modal upon successful sign up <not working!!!>
  $('#signUp-modal').modal('hide')
}

const signUpFailure = (error) => {
  console.error(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure
}
