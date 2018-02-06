import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { AuthGuard } from './auth-guard.service';

const AuthRoutes:Routes = [
  {path: 'signup', component: SignupComponent },
  {path: 'signin', component: SigninComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(AuthRoutes)
  ],
  exports: [
    RouterModule
  ]

})

export class AuthRouting {}
