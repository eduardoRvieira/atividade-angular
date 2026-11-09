import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExercicioPessoa } from './exercicio-pessoa';

describe('ExercicioPessoa', () => {
  let component: ExercicioPessoa;
  let fixture: ComponentFixture<ExercicioPessoa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExercicioPessoa],
    }).compileComponents();

    fixture = TestBed.createComponent(ExercicioPessoa);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
