import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesItemComponent } from './recipes/recipes-list/recipes-item/recipes-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipesStartComponent } from './recipes/recipes-start/recipes-start.component';
import { RecipesEditComponent } from './recipes/recipes-edit/recipes-edit.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';





const AppRoutes:Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecipesComponent, children: [
    {path: '', component: RecipesStartComponent},
    {path: 'new', component: RecipesEditComponent},
    {path:':id', component: RecipesDetailComponent},
    {path: ':id/edit', component: RecipesEditComponent}
  ] },
  {path: 'shopping-list', component: ShoppingListComponent },
  {path: 'signup', component: SignupComponent },
  {path: 'signin', component: SigninComponent }
]

@NgModule({

  imports: [
    RouterModule.forRoot(AppRoutes)
  ],
  exports: [
    RouterModule
  ]

})

export class AppRouting {

}
