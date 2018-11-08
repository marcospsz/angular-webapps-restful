import { Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'foto',
  template: '<img [src]="url" [alt]="titulo" class="card-img-top">'

})
export class FotoComponent {

  @Input() url = '';
  @Input() titulo = '';

}
