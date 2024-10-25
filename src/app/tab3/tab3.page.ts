import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  fechaInicial: string = '';
  fechaFinal: string = '';
  diferenciaDias: number | null = null;

  constructor() {}

  calcularDiferencia() {
    if (this.fechaInicial && this.fechaFinal) {
      const fechaInicio = new Date(this.fechaInicial);
      const fechaFin = new Date(this.fechaFinal);
      const diferenciaTiempo = fechaFin.getTime() - fechaInicio.getTime();
      this.diferenciaDias = Math.floor(diferenciaTiempo / (1000 * 3600 * 24));
    }
  }
}
