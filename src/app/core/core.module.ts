import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRouting } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ShoppingService } from '../shopping-list/shopping.service';
import { RecipesService } from '../recipes/recipes.service';
import { DataStorage } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { AuthGuard } from '../auth/auth-guard.service';


@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    AppRouting,
    SharedModule
  ],
  providers: [
    ShoppingService,
    RecipesService,
    DataStorage,
    AuthService,
    AuthGuard
  ],
  exports: [
    HeaderComponent,
    AppRouting
  ]
})

export class CoreModule {}
