import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /**
   * 是否被禁用
   *
   * @type {boolean}
   */
  isDisabled = false;

  /**
   * 点击数
   *
   * @type {number}
   */
  clickCounter = 0;

  /**
   * 是否关闭
   *
   * @type {boolean}
   */
  toggleDisable = false;
}
