import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { RecipesService } from '../recipes/recipes.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';
import 'rxjs/RX';

@Injectable()

export class DataStorage {

  constructor(private _http:Http,
              private _recipesService:RecipesService,
              private _authService: AuthService) {}

  storeData() {
    const authToken = this._authService.getToken();

    return this._http.put(`https://ng-recipe-book-c7787.firebaseio.com/recipes.json?auth=${authToken}`, this._recipesService.getRecipes());
  }

  getRecipes() {

    const authToken = this._authService.getToken();

    this._http.get(`https://ng-recipe-book-c7787.firebaseio.com/recipes.json?auth=${authToken}`)
      .map(
        (response) => {
          const recipes = response.json();

          for(let recipe of recipes) {
            if(!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }

          return recipes;
        }
      ).subscribe(
        (data) => {
          this._recipesService.getNewRecipes(data);
        }
      )
  }

}
