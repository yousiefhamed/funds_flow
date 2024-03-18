import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignBusinessComponent } from './sign-business.component';

describe('SignBusinessComponent', () => {
  let component: SignBusinessComponent;
  let fixture: ComponentFixture<SignBusinessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SignBusinessComponent]
    });
    fixture = TestBed.createComponent(SignBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
