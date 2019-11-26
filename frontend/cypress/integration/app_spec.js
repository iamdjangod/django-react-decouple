describe("Datapane fullstack hiring challenge", () => {
  const entry = {
    name: "Djangod",
    email: "iamdjangod@gmail.com",
    age: 28
  };
  before(() => {
    cy.exec("npm run dev");
    cy.exec("npm run flush");
  });
  it("should be able to fill a web form", () => {
    cy.visit("/");
    cy
      .get('input[name="name"]')
      .type(entry.name)
      .should("have.value", entry.name);
    cy
      .get('input[name="email"]')
      .type(entry.email)
      .should("have.value", entry.email);
    cy
      .get('input[name="age"]')
      .type(entry.age)
      .should("have.value", entry.age);
    cy.get("form").submit();
  });

  it("should be able to see the table", () => {
    cy.visit("/");
    cy.get("tr").contains(`${entry.name}${entry.email}${entry.age}`);
  });

});