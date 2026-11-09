import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Cabecalho } from './cabecalho/cabecalho';
import { Menu } from './menu/menu';
import { Conteudo } from './conteudo/conteudo';
import { Rodape } from './rodape/rodape';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    Cabecalho,
    RouterOutlet,
    Menu,
    Conteudo,
    Rodape
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'atividade-angular';
}