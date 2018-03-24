import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoSizeTextareaComponent } from './auto-size-textarea.component';

describe('AutoSizeTextareaComponent', () => {
  let component: AutoSizeTextareaComponent;
  let fixture: ComponentFixture<AutoSizeTextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoSizeTextareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoSizeTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
