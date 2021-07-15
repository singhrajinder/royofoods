import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheCapitalGrilleComponent } from './the-capital-grille.component';

describe('TheCapitalGrilleComponent', () => {
  let component: TheCapitalGrilleComponent;
  let fixture: ComponentFixture<TheCapitalGrilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheCapitalGrilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheCapitalGrilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
