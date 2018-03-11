
import {Subject } from 'rxjs/Subject';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe(
      'Vegan Carbonara Pasta Recipe',
      'Carbonara may be one of the most difficult recipes to vegan-ify, since every major ingredient in the sauce is off-limits.',
      'http://www.seriouseats.com/recipes/images/2017/02/20170210-vegan-carbonara-spaghetti-vicky-wasik-14-1500x1125.jpg',
      [
        new Ingredient('Tofu(ounces)', 1),
        new Ingredient(' pound (450g) dry spaghetti or penne', 1)
      ]),
    new Recipe('Eggless Chocolate Mousse Recipe',
      'The creamy toffee notes of homemade condensed milk set this recipe apart from the custard.',
      'http://www.seriouseats.com/recipes/images/2017/11/20171023-chocolate-mousse-vicky-wasik-20-1500x1125.jpg',
      [
        new Ingredient('milk', 2),
        new Ingredient('heavy cream(ounces)', 10)
      ]),
      new Recipe('Mexican Lime and Beer Cocktail',
      `Mexican beer cocktail, a chelada is a more basic version of the drink,
      with just fresh lime juice, beer, and enough salt to keep things refreshingly savory.`,
      'http://www.seriouseats.com/recipes/images/2017/06/20170621-michelada-chelada-vicky-wasik-3-1500x1125.jpg',
      [
        new Ingredient('fresh juice from limes ', 2),
        new Ingredient('bottle light Mexican beer, ', 1)
      ])

  ];

  constructor(
    /* private store: Store<{shoppingList: {ingredients: Ingredient[]}}> */) {}

  setRecipes(recipes: Recipe[]) {
   this.recipes = recipes;
   this.recipesChanged.next(this.recipes.slice());
 }
  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

 /* addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
  } */
  addRecipe(recipe: Recipe) {
   this.recipes.push(recipe);
   this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
   this.recipes[index] = newRecipe;
   this.recipesChanged.next(this.recipes.slice());
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
