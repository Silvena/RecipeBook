import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import * as RecipeActions from './recipe.actions';
import * as fromApp from '../../store/app.reducers';

export interface FeatureState extends fromApp.AppState {
  recipes: State;
}

export interface State {
  recipes: Recipe[];
}

const initialState: State = {
  recipes: [
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
  ]
};

export function recipeReducer(state = initialState, action: RecipeActions.RecipeActions) {
  switch (action.type) {
    case RecipeActions.SET_RECIPES:
      return {
        ...state,
        recipes: [...action.payload]
      };
    case RecipeActions.ADD_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, action.payload]
      };
    case (RecipeActions.UPDATE_RECIPE):
      const recipe = state.recipes[action.payload.index];
      const updatedRecipe = {
        ...recipe,
        ...action.payload.updatedRecipe
      };
      const recipes = [...state.recipes];
      recipes[action.payload.index] = updatedRecipe;
      return {
        ...state,
        recipes: recipes
      };
    case (RecipeActions.DELETE_RECIPE):
      const oldRecipes = [...state.recipes];
      oldRecipes.splice(action.payload, 1);
      return {
        ...state,
        recipes: oldRecipes
      };
    default:
      return state;
  }
}
