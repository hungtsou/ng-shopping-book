import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from "../../recipe.model";
import { RecipesService } from '../../recipes.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Input() index;

  constructor( private recipesService:RecipesService) { }

  onSelected() {
    this.recipesService.recipeSelected.emit(this.recipe)
  }


  ngOnInit() {
  }


}
