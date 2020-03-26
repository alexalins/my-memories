import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {

  list: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  constructor() { }

  ngOnInit() {
  }

}
