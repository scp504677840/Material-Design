import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-float-label',
  templateUrl: './float-label.component.html',
  styleUrls: ['./float-label.component.css']
})
export class FloatLabelComponent implements OnInit {

  placeholderTestControl = new FormControl('', Validators.required);

  constructor() {
  }

  ngOnInit() {
  }

}
