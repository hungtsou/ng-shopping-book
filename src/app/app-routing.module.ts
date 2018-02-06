import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AuthGuard } from './auth/auth-guard.service';

const AppRoutes:Routes = [
  {path: '', redirectTo: '/signin', pathMatch: 'full'},
  {path: 'shopping-list', component: ShoppingListComponent, canActivate: [AuthGuard] },
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
