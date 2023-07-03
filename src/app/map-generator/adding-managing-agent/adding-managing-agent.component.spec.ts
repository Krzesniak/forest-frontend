import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingManagingAgentComponent } from './adding-managing-agent.component';

describe('AddingManagingAgentComponent', () => {
  let component: AddingManagingAgentComponent;
  let fixture: ComponentFixture<AddingManagingAgentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddingManagingAgentComponent]
    });
    fixture = TestBed.createComponent(AddingManagingAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
