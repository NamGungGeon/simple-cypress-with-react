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

Cypress.Commands.add("waitUntilNetworkIdle", (timeout = 10 * 1000) => {
  cy.window().then(
    {
      timeout,
    },
    (window) =>
      new Cypress.Promise((rs) => {
        const waitUntilNetworkIdle = (onNetworkIdle) => {
          if (window.fetch_count > 0) {
            setTimeout(() => {
              window.requestIdleCallback(() =>
                waitUntilNetworkIdle(onNetworkIdle)
              );
            }, 100);
          } else {
            window.requestIdleCallback(() => {
              onNetworkIdle();
            });
          }
        };
        waitUntilNetworkIdle(rs);
      })
  );
});
