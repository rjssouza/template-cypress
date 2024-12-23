const open = () => {
  cy.visit(Cypress.env("URL_PAGE"));
};

export default {
  open,
};
