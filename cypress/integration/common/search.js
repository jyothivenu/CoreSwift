/// <reference types="cypress" />
import HomePage from "../../support/pageObjects/HomePage";
import { Utility } from "../../support/utility"
const url = new Utility().getUrl();
const homePage = new HomePage;
export var searchtext;

Given('@search I navigate to the website', async function () {
  cy.visit(url);
  cy.log("Navigated to website")
  cy.parseXlsx('cypress/fixtures/data.xlsx').then(sheet => {
    cy.log('Excel data: ' + sheet[0].data[0][3])
  })
})

Then('@search I land on Homepage', () => {
  homePage.getTitle().should('contain', "Hello")

})

When('@search I search for {string}', function (text) {
  searchtext = text
  homePage.getSearchBox().type(searchtext).type('{enter}')
})

And('@search I validate search text', function () {
  homePage.getSearchText().should('be.visible')
  homePage.getSearchText().should('have.text', '"' + searchtext + '"')
})
