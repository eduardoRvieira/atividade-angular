import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExercicioAuth } from './exercicio-auth';

describe('ExercicioAuth', () => {
  let component: ExercicioAuth;
  let fixture: ComponentFixture<ExercicioAuth>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExercicioAuth],
    }).compileComponents();

    fixture = TestBed.createComponent(ExercicioAuth);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
