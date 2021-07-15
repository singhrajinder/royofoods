import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllCardComponent } from './view-all-card.component';

describe('ViewAllCardComponent', () => {
  let component: ViewAllCardComponent;
  let fixture: ComponentFixture<ViewAllCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
