import { Component } from '@angular/core';

/**
 * Generated class for the PopoverPerfilComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'popover-perfil',
  templateUrl: 'popover-perfil.html'
})
export class PopoverPerfilComponent {

  text: string;

  constructor() {
    console.log('Hello PopoverPerfilComponent Component');
    this.text = 'Hello World';
  }

}
