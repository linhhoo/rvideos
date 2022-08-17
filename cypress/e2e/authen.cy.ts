/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

describe("Login", () => {
  it("should open to the login modal", () => {
    cy.visit("http://localhost:3000");
    cy.get('button[name*="login-button"]').click();
    cy.get("h1").contains("Sign in to Rvideos");
  });

  it("should open to the register modal", () => {
    cy.visit("http://localhost:3000");
    cy.get('button[name*="register-button"]').click();
    cy.get("h1").contains("Create your account");
  });

  it("should open to the login modal from the register modal", () => {
    cy.visit("http://localhost:3000");
    cy.get('button[name*="register-button"]').click();
    cy.get('button[name*="register_login-button"]').click();
    cy.get("h1").contains("Sign in to Rvideos");
  });

  it("should open to the register modal from the login modal", () => {
    cy.visit("http://localhost:3000");
    cy.get('button[name*="login-button"]').click();
    cy.get('button[name*="login_register-button"]').click();
    cy.get("h1").contains("Create your account");
  });

  it("should open to the register modal from the login modal", () => {
    cy.visit("http://localhost:3000");
    cy.get('button[name*="login-button"]').click();
    cy.get('button[name*="login_register-button"]').click();
    cy.get("h1").contains("Create your account");
  });

  // it("should sign in with account user1/123456", () => {
  //   cy.visit("http://localhost:3000");
  //   cy.get('button[name*="login-button"]').click();
  //   cy.get('input[name*="username"]').type("user1");
  //   cy.get('input[name*="password"]').type("123456");
  //   cy.get('button[name*="login_submit-button"]').click();
  //   cy.get("h3").contains("Welcome user1");
  // });
});

// Prevent TypeScript from reading file as legacy script
export {};
