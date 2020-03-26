import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-photo',
  templateUrl: './card-photo.component.html',
  styleUrls: ['./card-photo.component.scss'],
})
export class CardPhotoComponent implements OnInit {

  urlAvatar: string = "https://66.media.tumblr.com/avatar_4f38df4a83b6_128.pnj";
  img: string = "./assets/image/camera.jpg";

  constructor() { }

  ngOnInit() {}

}
