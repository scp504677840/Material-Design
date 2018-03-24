import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-auto-resizing-textarea',
  templateUrl: './auto-resizing-textarea.component.html',
  styleUrls: ['./auto-resizing-textarea.component.css']
})
export class AutoResizingTextareaComponent implements OnInit {

  post = '现代作家朱自清于1925年所写的一篇回忆性散文。这篇散文叙述的是作者离开南京到北京大学，父亲送他到浦口火车站，照料他上车，并替他买橘子的情形。在作者脑海里印象最深刻的，是他父亲替他买橘子时在月台爬上攀下时的背影。';

  constructor() {
  }

  ngOnInit() {
  }

}
