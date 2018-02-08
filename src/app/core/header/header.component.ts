import { Component, EventEmitter, Output, OnInit } from '@angular/core';
// Services
import { DataStorage } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: `./header.component.html`
})

export class HeaderComponent implements OnInit {

  public isAuthenticated:Boolean = this._authService.isAuthenticated();

  constructor(private _dataStorage:DataStorage,
              private  _authService:AuthService) {}

  @Output() navItemSelect = new EventEmitter<string>();

  ngOnInit() {

  }

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

  onLogOut() {
    this._authService.logOut();
  }
}
