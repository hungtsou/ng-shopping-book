import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { RecipesComponent } from './recipes.component';
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipesItemComponent } from './recipes-list/recipes-item/recipes-item.component';
import { RecipesStartComponent } from './recipes-start/recipes-start.component';
import { RecipesEditComponent } from './recipes-edit/recipes-edit.component';
import { AuthGuard } from '../auth/auth-guard.service';

const AppRoutes:Routes = [
  {path: 'recipes', component: RecipesComponent, canActivate: [AuthGuard], children: [
      {path: '', component: RecipesStartComponent},
      {path: 'new', component: RecipesEditComponent},
      {path:':id', component: RecipesDetailComponent},
      {path: ':id/edit', component: RecipesEditComponent}
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(AppRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class RecipesRoutingModule {

}
