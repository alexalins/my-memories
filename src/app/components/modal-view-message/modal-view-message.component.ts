import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-view-message',
  templateUrl: './modal-view-message.component.html',
  styleUrls: ['./modal-view-message.component.scss'],
})
export class ModalViewMessageComponent implements OnInit {

  urlAvatar: string = "https://66.media.tumblr.com/avatar_4f38df4a83b6_128.pnj";

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  dismissModal() {
    this.modalController.dismiss();
  }

}
