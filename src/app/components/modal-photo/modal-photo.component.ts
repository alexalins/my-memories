import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal-photo',
  templateUrl: './modal-photo.component.html',
  styleUrls: ['./modal-photo.component.scss'],
})
export class ModalPhotoComponent implements OnInit {

  photo: any;

  constructor(
    private modalController: ModalController,
    private alertController: AlertController,
    private navParams: NavParams
  ) { }

  ngOnInit() {
    this.photo = this.navParams.data;
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  async alertConfirmDonwload() {
    const alert = await this.alertController.create({
      header: 'Deseja baixar essa foto?',
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
            console.log('baixando');
          }
        }
      ]
    });

    await alert.present();
  }

  async alertConfirmDelete() {
    const alert = await this.alertController.create({
      header: 'Deseja apagar essa foto?',
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
  }

}
