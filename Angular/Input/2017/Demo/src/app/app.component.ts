import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

let max = 5;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  color: boolean;

  name: string;
  requiredField: boolean;
  hideRequiredMarker: boolean;

  floatingLabel = 'auto';

  errorMessageExample1: string;
  errorMessageExample2: string;
  errorMessageExample3: string;
  errorMessageExample4: string;

  dividerColorExample1: string;
  dividerColorExample2: string;
  dividerColorExample3: string;

  items: any[] = [
    {value: 10},
    {value: 20},
    {value: 30},
    {value: 40},
    {value: 50},
  ];

  // 邮箱控制器
  emailFormControl = new FormControl('', [Validators.required, Validators.pattern(EMAIL_REGEX)]);

  // 表单控制器
  formControl = new FormControl('hello', Validators.required);

  model = 'hello';

  ctrlDisabled = false;

  // 延迟值
  delayedFormControl = new FormControl('');

  textareaNgModelValue: string;

  customErrorStateMatcher(c: FormControl): boolean {
    const hasInteraction = c.dirty || c.touched;
    const isInvalid = c.invalid;
    return !!(hasInteraction && isInvalid);
  }

  addABunch(n: number) {
    for (let x = 0; x < n; x++) {
      this.items.push({value: ++max});
    }
  }

}
