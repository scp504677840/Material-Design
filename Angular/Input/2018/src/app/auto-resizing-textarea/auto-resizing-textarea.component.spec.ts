import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoResizingTextareaComponent } from './auto-resizing-textarea.component';

describe('AutoResizingTextareaComponent', () => {
  let component: AutoResizingTextareaComponent;
  let fixture: ComponentFixture<AutoResizingTextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoResizingTextareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoResizingTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
