import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'src/app/models/Message';

@Component({
  selector: 'app-card-message',
  templateUrl: './card-message.component.html',
  styleUrls: ['./card-message.component.scss'],
})
export class CardMessageComponent implements OnInit {

  urlAvatar: string = "https://66.media.tumblr.com/avatar_4f38df4a83b6_128.pnj";

  @Input() message: Message = new Message;

  constructor() { }

  ngOnInit() {}

}
