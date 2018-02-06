
import { NgModule } from '@angular/core';
import { RecipesComponent } from 'app/recipes/recipes.component';
import { RecipesStartComponent } from 'app/recipes/recipes-start/recipes-start.component';
import { RecipesItemComponent } from 'app/recipes/recipes-list/recipes-item/recipes-item.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipesEditComponent } from './recipes-edit/recipes-edit.component';
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipesRoutingModule } from 'app/recipes/recipes-routing.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipesStartComponent,
    RecipesItemComponent,
    RecipesListComponent,
    RecipesEditComponent,
    RecipesDetailComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RecipesRoutingModule,
    SharedModule
  ]
})
export class RecipesModule {}
