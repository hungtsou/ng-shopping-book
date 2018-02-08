import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// modules
import { AppRouting } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';

//services
import { ShoppingService } from './shopping-list/shopping.service';
import { RecipesService } from './recipes/recipes.service';
import { DataStorage } from './shared/data-storage.service';
import { AuthService } from './auth/auth.service';

//components
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth-guard.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    SharedModule,
    ShoppingListModule,
    AuthModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
