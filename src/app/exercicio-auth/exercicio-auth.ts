import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exercicio-auth',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicio-auth.html',
  styleUrl: './exercicio-auth.css'
})
export class ExercicioAuth {
  isLogado: boolean = false;

  alternarLogin() {
    this.isLogado = !this.isLogado;
  }
}