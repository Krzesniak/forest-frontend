import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FireBoardComponent } from './fire-board.component';

describe('FireBoardComponent', () => {
  let component: FireBoardComponent;
  let fixture: ComponentFixture<FireBoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FireBoardComponent]
    });
    fixture = TestBed.createComponent(FireBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
