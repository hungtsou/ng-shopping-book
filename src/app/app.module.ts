import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// modules
import { AppRouting } from './app-routing.module';
import { RecipesModule } from './recipes/recipes.module';
// directives
import { dropdownDirective } from './shared/dropdown.directive';
//services
import { ShoppingService } from './shopping-list/shopping.service';
import { RecipesService } from './recipes/recipes.service';
import { DataStorage } from './shared/data-storage.service';
import { AuthService } from './auth/auth.service';

//components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuard } from './auth/auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    dropdownDirective,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRouting,
    RecipesModule
  ],
  exports: [
    dropdownDirective
  ],
  providers: [ShoppingService, RecipesService, DataStorage, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
