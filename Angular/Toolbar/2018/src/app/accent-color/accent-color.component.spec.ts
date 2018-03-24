import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccentColorComponent } from './accent-color.component';

describe('AccentColorComponent', () => {
  let component: AccentColorComponent;
  let fixture: ComponentFixture<AccentColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccentColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccentColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
