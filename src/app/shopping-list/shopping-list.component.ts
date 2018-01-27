import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];

  constructor( private shoppingService:ShoppingService ) { }

  ngOnInit() {
    this.ingredients = this.shoppingService.getShoppingList();

    this.shoppingService.shoppingListChanged
      .subscribe(
        data => this.ingredients = data
      )
  }

  onListSelect(index:number) {
    this.shoppingService.getListSelected(index);
  }

}
