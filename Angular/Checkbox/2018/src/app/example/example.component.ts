import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  checked: boolean;
  indeterminate: boolean;
  align = 'start';
  disabled: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
