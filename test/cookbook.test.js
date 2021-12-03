const { Cookbook } = require("../src/cookbook");

describe("Cookbook", () => {
  describe("Adding recipes", () => {
    test("should allow a recipe to be added", () => {
      //Arrange
      const myCookbook = new Cookbook();
      //Act
      myCookbook.addRecipe("Cookie Recipe", [
        "eggs",
        "flour",
        "chocolate chip",
        "yeast",
        "sugar",
      ]);
      //Assert
      expect(myCookbook.recipes).toEqual({
        "Cookie Recipe": ["eggs", "flour", "chocolate chip", "yeast", "sugar"],
      });
    });
  });

  describe("Listing recipes", () => {
    test("should allow the recipes to be listed", () => {});
  });

  describe("Retrieving a recipe", () => {
    test("should allow the ingredients for a recipe to be retrieved", () => {});
  });

  describe("Deleting a recipe", () => {
    test("should allow a recipe to be deleted", () => {});
  });
});
