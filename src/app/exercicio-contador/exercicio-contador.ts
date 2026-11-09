import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exercicio-contador',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicio-contador.html',
  styleUrl: './exercicio-contador.css'
})
export class ExercicioContador {
  contador: number = 0;

  incrementar() {
    if (this.contador >= 10) {
      this.contador = 0; 
    } else {
      this.contador++; 
    }
  }

  resetar() {
    this.contador = 0;
  }
}