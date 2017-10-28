import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // 是否显示第三行
  thirdLine = false;

  // 信息是否被点击
  infoClicked = false;

  // 字符串数组
  items: string[] = [
    'Pepper',
    'Salt',
    'Paprika'
  ];

  // 联系人数组
  contacts: any[] = [
    {name: 'Nancy', headline: 'Software engineer'},
    {name: 'Mary', headline: 'TPM'},
    {name: 'Bobby', headline: 'UX designer'}
  ];

  // 消息数组
  messages: any[] = [
    {
      from: 'Nancy',
      subject: 'Brunch?',
      message: 'Did you want to go on Sunday? I was thinking that might work.',
      image: 'https://angular.io/generated/images/bios/julie-ralph.jpg'
    },
    {
      from: 'Mary',
      subject: 'Summer BBQ',
      message: 'Wish I could come, but I have some prior obligations.',
      image: 'https://angular.io/generated/images/bios/juleskremer.jpg'
    },
    {
      from: 'Bobby',
      subject: 'Oui oui',
      message: 'Do you have Paris reservations for the 15th? I just booked!',
      image: 'https://angular.io/generated/images/bios/jelbourn.jpg'
    }
  ];

  // 链接数组
  links: any[] = [
    {name: 'Inbox'},
    {name: 'Outbox'},
    {name: 'Spam'},
    {name: 'Trash'}
  ];

}
