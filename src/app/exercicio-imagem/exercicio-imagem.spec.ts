import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExercicioImagem } from './exercicio-imagem';

describe('ExercicioImagem', () => {
  let component: ExercicioImagem;
  let fixture: ComponentFixture<ExercicioImagem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExercicioImagem],
    }).compileComponents();

    fixture = TestBed.createComponent(ExercicioImagem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
