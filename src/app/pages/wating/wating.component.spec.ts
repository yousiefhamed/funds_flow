import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatingComponent } from './wating.component';

describe('WatingComponent', () => {
  let component: WatingComponent;
  let fixture: ComponentFixture<WatingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [WatingComponent]
    });
    fixture = TestBed.createComponent(WatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
