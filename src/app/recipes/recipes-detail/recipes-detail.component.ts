import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';


import { RecipesService } from "../recipes.service";

import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  constructor(private recipesService: RecipesService,
              private route:ActivatedRoute,
              private router:Router) { }

  public recipe;
  public id:number;

  @Input() perro;

  ngOnInit() {

    this.route.params
              .subscribe(
                (params:Params) => {
                  this.id = +params['id'];
                  this.recipe = this.recipesService.getRecipe( +params['id']);
                }
              )
  }

  onAddToShoppingList(ingredients:Ingredient[]) {
    this.recipesService.addToShoppingList(ingredients);
  }

  onDeleteRecipe(e) {
    this.recipesService.removedRecipe(this.id);
    this.router.navigate(['..'], {relativeTo: this.route});
  }

}
