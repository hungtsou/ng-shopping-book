import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Recipe } from "../recipe.model";
import { RecipesService } from "../recipes.service";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[];

  constructor(private recipesService: RecipesService, private router:Router, private route:ActivatedRoute) {
  }

  ngOnInit() {

    this.recipesService.recipesChanged
      .subscribe(
        (data) => {
          this.recipes = data;
        }
      )

    this.recipes = this.recipesService.getRecipes();
  }

  onNew() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }

}
