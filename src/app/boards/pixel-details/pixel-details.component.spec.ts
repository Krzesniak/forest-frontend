import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PixelDetailsComponent } from './pixel-details.component';

describe('PixelDetailsComponent', () => {
  let component: PixelDetailsComponent;
  let fixture: ComponentFixture<PixelDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PixelDetailsComponent]
    });
    fixture = TestBed.createComponent(PixelDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
