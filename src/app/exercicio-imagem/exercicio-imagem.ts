import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercicio-imagem',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './exercicio-imagem.html',
  styleUrl: './exercicio-imagem.css'
})
export class ExercicioImagem {
  urlImagem: string = '';
}