import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBussinessComponent } from './manage-bussiness.component';

describe('ManageBussinessComponent', () => {
  let component: ManageBussinessComponent;
  let fixture: ComponentFixture<ManageBussinessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ManageBussinessComponent]
    });
    fixture = TestBed.createComponent(ManageBussinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
