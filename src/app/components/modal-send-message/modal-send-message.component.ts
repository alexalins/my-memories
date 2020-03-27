import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-send-message',
  templateUrl: './modal-send-message.component.html',
  styleUrls: ['./modal-send-message.component.scss'],
})
export class ModalSendMessageComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  dismissModal() {
    this.modalController.dismiss();
  }


}
