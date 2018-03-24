import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrefixesSuffixesComponent } from './prefixes-suffixes.component';

describe('PrefixesSuffixesComponent', () => {
  let component: PrefixesSuffixesComponent;
  let fixture: ComponentFixture<PrefixesSuffixesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrefixesSuffixesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrefixesSuffixesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
