import { Component, EventEmitter, Output } from '@angular/core';
// Services
import { DataStorage } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: `./header.component.html`
})

export class HeaderComponent {
  constructor(private _dataStorage:DataStorage) {}

  @Output() navItemSelect = new EventEmitter<string>();

  onRecipes(navSelected: string) {
    this.navItemSelect.emit(navSelected)
  }

  onShoppingList(navSelected: string) {
    this.navItemSelect.emit(navSelected)
  }

  onSave(e) {
    this._dataStorage.storeData()
      .subscribe(
        (data) => console.log(data)
      )
  }

  onGetRecipes(e) {
    this._dataStorage.getRecipes();
  }
}
