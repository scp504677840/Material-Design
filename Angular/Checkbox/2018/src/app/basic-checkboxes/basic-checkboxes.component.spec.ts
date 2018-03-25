import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCheckboxesComponent } from './basic-checkboxes.component';

describe('BasicCheckboxesComponent', () => {
  let component: BasicCheckboxesComponent;
  let fixture: ComponentFixture<BasicCheckboxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicCheckboxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicCheckboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
