import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrainBoardComponent } from './terrain-board.component';

describe('TerrainBoardComponent', () => {
  let component: TerrainBoardComponent;
  let fixture: ComponentFixture<TerrainBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerrainBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerrainBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
