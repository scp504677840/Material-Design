import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryColorComponent } from './primary-color.component';

describe('PrimaryColorComponent', () => {
  let component: PrimaryColorComponent;
  let fixture: ComponentFixture<PrimaryColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimaryColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
