import {Component, OnInit} from '@angular/core';

let max = 5;

@Component({
  selector: 'app-number-inputs',
  templateUrl: './number-inputs.component.html',
  styleUrls: ['./number-inputs.component.css']
})
export class NumberInputsComponent implements OnInit {
  items: any[] = [
    {value: 10},
    {value: 20},
    {value: 30},
    {value: 40},
    {value: 50},
  ];

  constructor() {
  }

  ngOnInit() {
  }

  addAbunch(n: number) {
    for (let x = 0; x < n; x++) {
      this.items.push({value: ++max});
    }
  }

}
