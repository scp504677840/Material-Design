import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-forms-inputs',
  templateUrl: './forms-inputs.component.html',
  styleUrls: ['./forms-inputs.component.css']
})
export class FormsInputsComponent implements OnInit {

  formControl = new FormControl('hello', Validators.required);

  model = 'hello';

  ctrlDisabled = false;

  delayedFormControl = new FormControl('');

  constructor() {
  }

  ngOnInit() {
    setTimeout(() => {
      this.delayedFormControl.setValue('hello');
    }, 3000);
  }

}
