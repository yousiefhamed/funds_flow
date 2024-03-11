import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFonudComponent } from './not-fonud.component';

describe('NotFonudComponent', () => {
  let component: NotFonudComponent;
  let fixture: ComponentFixture<NotFonudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NotFonudComponent]
    });
    fixture = TestBed.createComponent(NotFonudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
