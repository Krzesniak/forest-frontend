import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingAgentComponent } from './adding-agent.component';

describe('AddingAgentComponent', () => {
  let component: AddingAgentComponent;
  let fixture: ComponentFixture<AddingAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingAgentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddingAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
