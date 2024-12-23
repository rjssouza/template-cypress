import examplePage from "../page/example.page";
import exampleValidation from "../validations/example.validation";

describe("template spec", () => {
  it("should have kitchen sink title", () => {
    examplePage.open();
    // cy.get("h1").should("contain", "Kitchen Sink");

    exampleValidation.shoudHaveKitchenSinkTitle();
  });
});
