import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-exercicio-nomes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './exercicio-nomes.html',
  styleUrl: './exercicio-nomes.css'
})
export class ExercicioNomes {
  nomeInput: string = '';

  listaNomes: string[] = [];

  adicionarNome() {
    if (this.nomeInput.trim() !== '') {
      this.listaNomes.push(this.nomeInput.trim()); 
      this.nomeInput = ''; 
    }
  }
}