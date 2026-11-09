import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-introducao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './introducao.html',
  styleUrl: './introducao.css'
})
export class Introducao {
  nome: string = 'Eduardo';
  idade: number = 21; 
  curso: string = 'Engenharia de Software';
  hobby: string = 'Desenvolver sistemas';
}