import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstToggle: boolean;

  onFormSubmit() {
    alert(`You submitted the form.`);
  }
}
