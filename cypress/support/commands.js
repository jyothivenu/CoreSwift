// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';

const moment = require('moment')
Cypress.Commands.add('getPreviousDate', function() {
  var date = moment(new Date()).add(-1, 'days');
  let dd = date.get('date')
  var mm = date.get('month')
  var yyyy = date.get('year')
  date = yyyy + '-' + String(mm+1).padStart(2,'0') + '-' + String(dd).padStart(2,'0')
  return date;
})



Cypress.Commands.add('getFutureDate', function() {
  var date = moment(new Date()).add(5, 'days');
  let dd = date.get('date')
  var mm = date.get('month')
  var yyyy = date.get('year')
  date = yyyy + '-' + String(mm+1).padStart(2,'0') + '-' + String(dd).padStart(2,'0')
  return date
})


Cypress.Commands.add('parseXlsx', (inputFile) => {
  return cy.task('parseXlsx', { filePath: inputFile })
  })