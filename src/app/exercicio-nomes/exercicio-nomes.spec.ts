import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExercicioNomes } from './exercicio-nomes';

describe('ExercicioNomes', () => {
  let component: ExercicioNomes;
  let fixture: ComponentFixture<ExercicioNomes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExercicioNomes],
    }).compileComponents();

    fixture = TestBed.createComponent(ExercicioNomes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
