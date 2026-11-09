import { Routes } from '@angular/router';
import { Introducao } from './introducao/introducao';
import { ExercicioPessoa } from './exercicio-pessoa/exercicio-pessoa';
import { ExercicioMercado } from './exercicio-mercado/exercicio-mercado';
import { ExercicioContador } from './exercicio-contador/exercicio-contador';
import { ExercicioAuth } from './exercicio-auth/exercicio-auth';
import { ExercicioImagem } from './exercicio-imagem/exercicio-imagem';
import { ExercicioNomes } from './exercicio-nomes/exercicio-nomes';

export const routes: Routes = [
  { path: '', redirectTo: 'introducao', pathMatch: 'full' },
  { path: 'introducao', component: Introducao },
  { path: 'pessoa', component: ExercicioPessoa },
  { path: 'mercado', component: ExercicioMercado},
  { path: 'contador', component: ExercicioContador },
  { path: 'auth', component: ExercicioAuth },
  { path: 'imagem', component: ExercicioImagem },
  { path: 'nomes', component: ExercicioNomes }
];