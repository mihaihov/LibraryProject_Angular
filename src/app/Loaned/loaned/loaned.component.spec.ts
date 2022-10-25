import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanedComponent } from './loaned.component';

describe('LoanedComponent', () => {
  let component: LoanedComponent;
  let fixture: ComponentFixture<LoanedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
