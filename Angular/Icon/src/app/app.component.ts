import {Component} from '@angular/core';
import {MdIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private mdIconRegistry: MdIconRegistry, private domSanitizer: DomSanitizer) {
    this.mdIconRegistry
      .addSvgIcon('thumb-up', this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/thumbup-icon.svg'))
      .addSvgIcon('core', this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/core-icon-set.svg'))
      .addSvgIcon('all', this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/all.svg'))
      .registerFontClassAlias('fontawesome', 'fa');
  }

}
