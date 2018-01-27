import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class dropdownDirective {

  @HostBinding('class.open') openClass:boolean = false;

  @HostListener('click') toggleMenu() {

    this.openClass = !this.openClass;

  }

  constructor() {}
}
