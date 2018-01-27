import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service';
import { Subject } from 'rxjs/Subject';

@Injectable()

export class RecipesService {

  private recipes: Recipe[] = [
    new Recipe('My first recipe',
               'The recipe description',
               'http://www.cbc.ca/bestrecipes/content/images/episodes/_videothumb/weeknight_seafood_dinner.jpg',
               [new Ingredient('Bread', 2),
                new Ingredient('Tomato', 2)],
                2
              ),

    new Recipe('My second recipe',
               'The second recipe description',
               'http://www.cbc.ca/bestrecipes/content/images/episodes/_videothumb/weeknight_seafood_dinner.jpg',
               [new Ingredient('Salami', 5),
                new Ingredient('Eggs', 2)],
                3
              )
  ]

  recipeSelected = new EventEmitter<Recipe>();

  public recipesChanged = new Subject<Recipe[]>();

  constructor( private shoppingService: ShoppingService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getNewRecipes(recipes:Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipe(id:number) {
    const recipe = this.recipes[id];

    return recipe;
  }

  addToShoppingList(ingredient: Ingredient[]) {
    this.shoppingService.addIngredients(ingredient);
  }

  addRecipe(newRecipe:Recipe) {
    this.recipes.push(newRecipe);

    this.recipesChanged.next(this.recipes.slice());

  }

  updateRecipe(index:number, newRecipe:Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  removedRecipe(index:number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

}
