import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForestIndexBoardComponent } from './forest-index-board.component';

describe('ForestIndexBoardComponent', () => {
  let component: ForestIndexBoardComponent;
  let fixture: ComponentFixture<ForestIndexBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForestIndexBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForestIndexBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
