import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberInputsComponent } from './number-inputs.component';

describe('NumberInputsComponent', () => {
  let component: NumberInputsComponent;
  let fixture: ComponentFixture<NumberInputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberInputsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
