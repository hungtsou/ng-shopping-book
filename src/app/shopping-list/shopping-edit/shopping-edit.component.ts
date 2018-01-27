import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})

export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f') editForm:NgForm;

  private listSelectedSubscriber:Subscription;
  private listItemIndex:number;
  private editMode:boolean = false;
  private editIngredient:Ingredient;

  constructor(private shoppingService:ShoppingService) { }

  ngOnInit() {

    this.listSelectedSubscriber = this.shoppingService.listSelected
      .subscribe(
        (index) => {
          this.listItemIndex = index;
          this.editMode = true;
          this.editIngredient = this.shoppingService.getIngredient(this.listItemIndex);

          this.editForm.setValue({
            name: this.editIngredient.name,
            amount: this.editIngredient.amount
          })
        }
      )
  }

  onSubmit(form:NgForm) {

    const value = form.value;

    if(!this.editMode) {
      this.shoppingService.addIngredient(new Ingredient(value.name, value.amount));
    }

    if(this.editMode) {
      this.shoppingService.updateIngredient(this.listItemIndex, {name: value.name, amount: value.amount});
    }

    this.editMode = false;

    form.reset();

  }

  onClear() {
    this.editForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppingService.deleteIngredient(this.listItemIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.listSelectedSubscriber.unsubscribe();
  }

}
