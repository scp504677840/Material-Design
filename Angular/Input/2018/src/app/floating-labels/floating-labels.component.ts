import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-floating-labels',
  templateUrl: './floating-labels.component.html',
  styleUrls: ['./floating-labels.component.css']
})
export class FloatingLabelsComponent implements OnInit {

  placeholderTestControl = new FormControl('', Validators.required);

  constructor() {
  }

  ngOnInit() {
  }

  togglePlaceholderTestValue() {
    this.placeholderTestControl.setValue(this.placeholderTestControl.value === '' ? 'Value' : '');
  }

  togglePlaceholderTestTouched() {
    this.placeholderTestControl.touched ? this.placeholderTestControl.markAsUntouched() :
      this.placeholderTestControl.markAsTouched();
  }

}
