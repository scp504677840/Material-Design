import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedCheckListComponent } from './nested-check-list.component';

describe('NestedCheckListComponent', () => {
  let component: NestedCheckListComponent;
  let fixture: ComponentFixture<NestedCheckListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedCheckListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedCheckListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
