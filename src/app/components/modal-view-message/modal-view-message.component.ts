import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-modal-view-message',
  templateUrl: './modal-view-message.component.html',
  styleUrls: ['./modal-view-message.component.scss'],
})
export class ModalViewMessageComponent implements OnInit {

  urlAvatar: string = "https://66.media.tumblr.com/avatar_4f38df4a83b6_128.pnj";

  constructor(
    private modalController: ModalController,
    private alertController: AlertController) { }

  ngOnInit() {}

  dismissModal() {
    this.modalController.dismiss();
  }

  async alertConfirmDelete() {
    const alert = await this.alertController.create({
      header: 'Deseja apagar essa mensagem?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('apagando');
          }
        }
      ]
    });

    await alert.present();
  }
}
