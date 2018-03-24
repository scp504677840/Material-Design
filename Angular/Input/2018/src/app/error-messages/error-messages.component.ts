import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-error-messages',
  templateUrl: './error-messages.component.html',
  styleUrls: ['./error-messages.component.css']
})
export class ErrorMessagesComponent implements OnInit {

  errorMessageExample1: string;
  errorMessageExample2: string;
  errorMessageExample3: string;
  errorMessageExample4: string;

  emailFormControl = new FormControl('', [Validators.required, Validators.pattern(EMAIL_REGEX)]);

  customErrorStateMatcher: ErrorStateMatcher = {
    isErrorState: (control: FormControl | null) => {
      if (control) {
        // 有互动
        const hasInteraction = control.dirty || control.touched;
        // FormControl是否有效
        const isInvalid = control.invalid;
        // 当有互动且数据有效时返回true，否则返回false；
        return hasInteraction && isInvalid && control.value.length < 1;
      }
      return false;
    }
  };

  constructor() {
  }

  ngOnInit() {
  }

}
