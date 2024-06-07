import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestNawComponent } from './invest-naw.component';

describe('InvestNawComponent', () => {
  let component: InvestNawComponent;
  let fixture: ComponentFixture<InvestNawComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [InvestNawComponent]
    });
    fixture = TestBed.createComponent(InvestNawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
