import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpBusinessComponent } from './sign-up-business.component';

describe('SignUpBusinessComponent', () => {
  let component: SignUpBusinessComponent;
  let fixture: ComponentFixture<SignUpBusinessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SignUpBusinessComponent]
    });
    fixture = TestBed.createComponent(SignUpBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
