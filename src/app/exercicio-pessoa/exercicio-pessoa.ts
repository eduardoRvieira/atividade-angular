import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Pessoa {
  nome: string;
  sexo: string;
  dataNascimento: string;
  estadoCivil: string;
}

@Component({
  selector: 'app-exercicio-pessoa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicio-pessoa.html',
  styleUrl: './exercicio-pessoa.css'
})
export class ExercicioPessoa {
  
  pessoa1: Pessoa = {
    nome: 'Ana Souza',
    sexo: 'Feminino',
    dataNascimento: '15/05/1998',
    estadoCivil: 'Solteira'
  };

  pessoa2: Pessoa = {
    nome: 'Carlos Oliveira',
    sexo: 'Masculino',
    dataNascimento: '20/10/1992',
    estadoCivil: 'Casado'
  };

}