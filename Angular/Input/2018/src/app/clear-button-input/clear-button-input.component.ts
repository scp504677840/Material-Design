import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-clear-button-input',
  templateUrl: './clear-button-input.component.html',
  styleUrls: ['./clear-button-input.component.css']
})
export class ClearButtonInputComponent implements OnInit {

  value = 'Clear Me';

  constructor() {
  }

  ngOnInit() {
  }

}
