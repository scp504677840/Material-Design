import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  name: string;

  color: boolean;

  requiredField: boolean;

  hideRequiredMarker: boolean;

  floatingLabel = 'auto';

  constructor() {
  }

  ngOnInit() {
  }

}
