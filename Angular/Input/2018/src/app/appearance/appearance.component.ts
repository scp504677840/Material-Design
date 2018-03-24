import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-appearance',
  templateUrl: './appearance.component.html',
  styleUrls: ['./appearance.component.css']
})
export class AppearanceComponent implements OnInit {

  legacyAppearance: string;
  standardAppearance: string;
  fillAppearance: string;
  outlineAppearance: string;

  constructor() {
  }

  ngOnInit() {
  }

}
