class Cookbook {
  constructor() {
    this.recipes = {};
  }

  addRecipe(name, ingredients) {
    this.recipes[name] = ingredients;
  }

  listRecipes() {
    return Object.keys(this.recipes);
  }

  getRecipe(name) {
    return this.recipes[name];
  }

  removeRecipe(name) {
    delete this.recipes[name];
  }
}
//console.log(myCookbook.getRecipe("Smoothie"));
module.exports = { Cookbook };
