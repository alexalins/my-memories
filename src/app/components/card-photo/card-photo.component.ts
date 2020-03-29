import { Component, OnInit, Input } from '@angular/core';
import { Photo } from 'src/app/models/Photo';

@Component({
  selector: 'app-card-photo',
  templateUrl: './card-photo.component.html',
  styleUrls: ['./card-photo.component.scss'],
})
export class CardPhotoComponent implements OnInit {
  
  @Input() photo: Photo = new Photo();

  constructor() { }

  ngOnInit() {}

}
