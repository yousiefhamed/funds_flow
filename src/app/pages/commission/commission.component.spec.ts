import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommissionComponent } from './commission.component';

describe('CommissionComponent', () => {
  let component: CommissionComponent;
  let fixture: ComponentFixture<CommissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommissionComponent]
    });
    fixture = TestBed.createComponent(CommissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
