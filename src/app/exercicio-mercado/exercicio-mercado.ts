import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Mercado {
  nomeMercado: string;
  macasVendidasAno: number;
  precoMaca: number;
  laranjasVendidasAno: number;
  precoLaranja: number;
}

@Component({
  selector: 'app-exercicio-mercado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicio-mercado.html',
  styleUrl: './exercicio-mercado.css'
})
export class ExercicioMercado {

  unidadeDeBlumenau: Mercado = {
    nomeMercado: 'Supermercado Blumenau',
    macasVendidasAno: 15000,
    precoMaca: 7.50,
    laranjasVendidasAno: 22000,
    precoLaranja: 5.00
  };

  unidadeDeJoinville: Mercado = {
    nomeMercado: 'Supermercado Joinville',
    macasVendidasAno: 18000,
    precoMaca: 8.00,
    laranjasVendidasAno: 19000,
    precoLaranja: 4.80
  };

  unidadeDeFlorianopolis: Mercado = {
    nomeMercado: 'Supermercado Florianópolis',
    macasVendidasAno: 25000,
    precoMaca: 9.00,
    laranjasVendidasAno: 31000,
    precoLaranja: 6.00
  };

}