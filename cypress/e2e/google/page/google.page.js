const open = () => {
  cy.visit(Cypress.env('GOOGLE_URL'));
};

export default {
  open,
};
