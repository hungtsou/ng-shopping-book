import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuard } from './auth/auth-guard.service';

const AppRoutes:Routes = [
  {path: '', redirectTo: '/signin', pathMatch: 'full'},
  {path: 'shopping-list', component: ShoppingListComponent, canActivate: [AuthGuard] },
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
