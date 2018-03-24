import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MyErrorStateMatcher} from './my-error-state-matcher';

@Component({
  selector: 'app-error-state-matcher',
  templateUrl: './error-state-matcher.component.html',
  styleUrls: ['./error-state-matcher.component.css']
})
export class ErrorStateMatcherComponent implements OnInit {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();

  constructor() {
  }

  ngOnInit() {
  }

}
