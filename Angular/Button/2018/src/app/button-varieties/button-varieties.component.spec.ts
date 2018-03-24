import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonVarietiesComponent } from './button-varieties.component';

describe('ButtonVarietiesComponent', () => {
  let component: ButtonVarietiesComponent;
  let fixture: ComponentFixture<ButtonVarietiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonVarietiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonVarietiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
