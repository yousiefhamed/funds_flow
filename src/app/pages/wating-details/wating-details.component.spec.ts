import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatingDetailsComponent } from './wating-details.component';

describe('WatingDetailsComponent', () => {
  let component: WatingDetailsComponent;
  let fixture: ComponentFixture<WatingDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [WatingDetailsComponent]
    });
    fixture = TestBed.createComponent(WatingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
