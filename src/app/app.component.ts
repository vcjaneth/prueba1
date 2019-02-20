import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Viviana';
  cuidad = 'Quito'; 
  n1 = 5;
  n2 = 8;
  res = this.n1 + this.n2;
  msg = `Mi nombre es ${this.title} y soy de ${this.cuidad} y tengo ${this.res}`;
  msgAntiguo = 'hola "con comillas"'+ this.title;
}