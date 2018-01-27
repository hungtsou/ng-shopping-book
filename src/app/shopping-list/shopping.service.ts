import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Ingredient } from '../shared/ingredient.model';


export class ShoppingService {

  private shoppingList: Ingredient[] = [
    new Ingredient('Tomato', 5),
    new Ingredient('Butter', 2),
    new Ingredient('Cheese', 1)
  ];

  public listSelected = new Subject<number>();

  public shoppingListChanged = new Subject<Ingredient[]>();

  getShoppingList() {
    return this.shoppingList.slice();
  }

  getListSelected(index:number) {
    this.listSelected.next(index);
  }

  getIngredient(index:number) {
    return this.shoppingList[index];
  }

  updateIngredient(index, ingredient:Ingredient) {
    this.shoppingList[index] = ingredient;
    this.shoppingListChanged.next(this.shoppingList.slice());
  }

  addIngredient(ingredient: Ingredient) {
    this.shoppingList.push(ingredient);
    this.shoppingListChanged.next( this.shoppingList.slice() );
  }

  addIngredients(ingredients: Ingredient[]) {
    this.shoppingList.push(...ingredients);
    this.shoppingListChanged.next( this.shoppingList.slice() );
  }

  deleteIngredient(index) {
    this.shoppingList.splice(index, 1);
    this.shoppingListChanged.next(this.shoppingList.slice());
  }

}
