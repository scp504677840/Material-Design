import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-base-checkbox',
  templateUrl: './base-checkbox.component.html',
  styleUrls: ['./base-checkbox.component.css']
})
export class BaseCheckboxComponent implements OnInit {

  isChecked: boolean;
  isIndeterminate: boolean;
  isDisabled: boolean;
  labelPosition = 'after';
  useAlternativeColor: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  printResult(): string {
    if (this.isIndeterminate) {
      return 'Maybe!';
    }
    return this.isChecked ? 'Yes!' : 'No!';
  }

  checkboxColor() {
    return this.useAlternativeColor ? 'primary' : 'accent';
  }

}
