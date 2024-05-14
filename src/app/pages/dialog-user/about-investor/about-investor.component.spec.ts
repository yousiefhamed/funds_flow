import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutInvestorComponent } from './about-investor.component';

describe('AboutInvestorComponent', () => {
  let component: AboutInvestorComponent;
  let fixture: ComponentFixture<AboutInvestorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AboutInvestorComponent]
    });
    fixture = TestBed.createComponent(AboutInvestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
