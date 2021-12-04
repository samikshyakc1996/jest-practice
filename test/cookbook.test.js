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

      myCookbook.addRecipe("Smoothie", ["milk", "yogurt", "fruits"]);
      myCookbook.addRecipe("Pizza", ["dough", "sauce", "cheese", "pepperoni"]);
      //Assert
      expect(myCookbook.recipes).toEqual({
        Cookie: ["eggs", "flour", "chocolate chip", "yeast", "sugar"],
        Smoothie: ["milk", "yogurt", "fruits"],
        Pizza: ["dough", "sauce", "cheese", "pepperoni"],
      });
    });
  });

  describe("Listing recipes", () => {
    test("should allow the recipes to be listed", () => {});
    const myCookbook = new Cookbook();
    myCookbook.addRecipe("hotdog", ["meat", "bread"]);
    /*("Cookie", ["eggs", "flour", "chocolate chip", "yeast", "sugar"]),
      ("Smoothie", ["milk", "yogurt", "fruits"]),
      ("Pizza", ["dough", "sauce", "cheese", "pepperoni"]);*/
    myCookbook.addRecipe("Cookie", [
      "eggs",
      "flour",
      "chocolate chip",
      "yeast",
      "sugar",
    ]);
    myCookbook.addRecipe("Smoothie", ["milk", "yogurt", "fruits"]);
    myCookbook.addRecipe("Pizza", ["dough", "sauce", "cheese", "pepperoni"]);
    const myRecipes = myCookbook.listRecipes();
    console.log(myCookbook.listRecipes());
    expect(myRecipes).toEqual(["hotdog", "Cookie", "Smoothie", "Pizza"]);
  });

  describe("Retrieving a recipe", () => {
    test("should allow the ingredients for a recipe to be retrieved", () => {});
    const myCookbook = new Cookbook();
    myCookbook.addRecipe("Smoothie", ["milk", "yogurt", "fruits"]);
    myCookbook.addRecipe("Pizza", ["dough", "sauce", "cheese", "pepperoni"]);

    console.log(myCookbook.getRecipe("Pizza"));
    const getOneRecipe = myCookbook.getRecipe("Smoothie");
    console.log(getOneRecipe);
    expect(getOneRecipe).toEqual(["milk", "yogurt", "fruits"]);
  });

  describe("Deleting a recipe", () => {
    test("should allow a recipe to be deleted", () => {});
    const myCookbook = new Cookbook();
    myCookbook.addRecipe("Cookie", [
      "eggs",
      "flour",
      "chocolate chip",
      "yeast",
      "sugar",
    ]);
    myCookbook.addRecipe("Smoothie", ["milk", "yogurt", "fruits"]);
    myCookbook.addRecipe("Pizza", ["dough", "sauce", "cheese", "pepperoni"]);
    console.log(`All recipe: ${myCookbook.listRecipes()}`);

    myCookbook.removeRecipe("Cookie");
    const remainingRecipe = myCookbook.listRecipes();
    console.log(
      `Remaining recipe after removing "Cookie": ${myCookbook.listRecipes()}`
    );

    expect(remainingRecipe).toEqual(["Smoothie", "Pizza"]);
  });
});
