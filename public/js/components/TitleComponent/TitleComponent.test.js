import TitleComponent from "./TitleComponent.js";

describe("Given class TitleComponent", () => {
  describe("When it instantiate a new TitleComponent with document.body, 'h1','','Title of h1'", () => {
    test("Then it should show a new h1 with the title 'Title of h1'", () => {
      const expectedResult = "Title of h1";

      const newTitleComponent = new TitleComponent(
        document.body,
        "h1",
        "",
        "Title of h1"
      );

      expect(newTitleComponent.element.textContent).toBe(expectedResult);
    });
  });
});
