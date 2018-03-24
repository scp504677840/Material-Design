import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DividerColorsComponent } from './divider-colors.component';

describe('DividerColorsComponent', () => {
  let component: DividerColorsComponent;
  let fixture: ComponentFixture<DividerColorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DividerColorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DividerColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
