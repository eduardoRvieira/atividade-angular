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
  // Estado inicial do usuário (deslogado por padrão)
  isLogado: boolean = false;

  // Função para alternar entre logar e deslogar
  alternarLogin() {
    this.isLogado = !this.isLogado;
  }
}