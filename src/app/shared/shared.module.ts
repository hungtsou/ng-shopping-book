
import { NgModule } from '@angular/core';
import { dropdownDirective } from './dropdown.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    dropdownDirective
  ],
  exports: [
    CommonModule,
    dropdownDirective
  ]
})

export class SharedModule {}
