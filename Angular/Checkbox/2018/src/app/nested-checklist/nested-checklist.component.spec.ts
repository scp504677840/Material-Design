import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedChecklistComponent } from './nested-checklist.component';

describe('NestedChecklistComponent', () => {
  let component: NestedChecklistComponent;
  let fixture: ComponentFixture<NestedChecklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedChecklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
