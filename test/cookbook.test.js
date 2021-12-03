const { Cookbook } = require("../src/cookbook");

describe("Cookbook", () => {
  describe("Adding recipes", () => {
    test("should allow a recipe to be added", () => {
      //Arrange
      const myCookbook = new Cookbook();
      //Act
      myCookbook.addRecipe("Cookie", [
        "eggs",
        "flour",
        "chocolate chip",
        "yeast",
        "sugar",
      ]);
      //Assert
      expect(myCookbook.recipes).toEqual({
        Cookie: ["eggs", "flour", "chocolate chip", "yeast", "sugar"],
      });
    });
  });

  describe("Listing recipes", () => {
    test("should allow the recipes to be listed", () => {});
    const myCookbook = new Cookbook();
    myCookbook.addRecipe("hotdog", ["meat", "bread"]);
    const myRecipes = myCookbook.listRecipes();
    expect(myRecipes).toEqual(["hotdog"]);
  });

  describe("Retrieving a recipe", () => {
    test("should allow the ingredients for a recipe to be retrieved", () => {});
  });

  describe("Deleting a recipe", () => {
    test("should allow a recipe to be deleted", () => {});
  });
});
