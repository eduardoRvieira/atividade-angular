import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExercicioMercado } from './exercicio-mercado';

describe('ExercicioMercado', () => {
  let component: ExercicioMercado;
  let fixture: ComponentFixture<ExercicioMercado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExercicioMercado],
    }).compileComponents();

    fixture = TestBed.createComponent(ExercicioMercado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
