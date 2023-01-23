import { Given } from '@badeball/cypress-cucumber-preprocessor';

Given('I enter to the website pco {string}', (domain) => {
  if (!domain) domain = 'base';
  cy.visit(domain);
});