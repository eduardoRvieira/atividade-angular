import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExercicioContador } from './exercicio-contador';

describe('ExercicioContador', () => {
  let component: ExercicioContador;
  let fixture: ComponentFixture<ExercicioContador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExercicioContador],
    }).compileComponents();

    fixture = TestBed.createComponent(ExercicioContador);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
