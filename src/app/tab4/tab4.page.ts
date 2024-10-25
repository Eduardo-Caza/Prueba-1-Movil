import { Component } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page {
  a: number = 0;
  b: number = 0;
  c: number = 0;
  resultado: string = '';

  constructor() {}

  calcularRaices() {
    const discriminante = this.b ** 2 - 4 * this.a * this.c;

    if (discriminante > 0) {
      const raiz1 = (-this.b + Math.sqrt(discriminante)) / (2 * this.a);
      const raiz2 = (-this.b - Math.sqrt(discriminante)) / (2 * this.a);
      this.resultado = `Raíces reales y diferentes: x1 = ${raiz1}, x2 = ${raiz2}`;
    } else if (discriminante === 0) {
      const raiz = -this.b / (2 * this.a);
      this.resultado = `Raíz real y doble: x = ${raiz}`;
    } else {
      this.resultado = 'No hay raíces reales';
    }
  }
}
