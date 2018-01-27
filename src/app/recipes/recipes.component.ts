import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from "./recipes.service";
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  private recipeSelected: Recipe;
  public myEnvironment;

  public test = 'my test';

  constructor( private recipesService:RecipesService) {
  }

  ngOnInit() {

    this.myEnvironment = environment.api;

    this.recipesService.recipeSelected
      .subscribe(
        (data) => data
      )
  }

}
