import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  onRegistroCompletado(datos: any) {
    console.log("Datos del Registro:", datos);
    alert(`Registro completado con éxito: ${JSON.stringify(datos)}`);
  }
}
