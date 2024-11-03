import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  splash = true; // Propiedad splash para controlar la pantalla de presentación

  constructor() {
    // Ocultar la splash screen después de 3 segundos
    setTimeout(() => {
      this.splash = false;
    }, 3000); // Cambia 3000 por el tiempo que desees en milisegundos
  }
}
