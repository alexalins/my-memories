import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  
  urlAvatar: string = "https://66.media.tumblr.com/avatar_4f38df4a83b6_128.pnj";

  constructor() { }

  ngOnInit() {
  }

}
