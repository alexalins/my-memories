import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-modal-photo',
  templateUrl: './modal-photo.component.html',
  styleUrls: ['./modal-photo.component.scss'],
})
export class ModalPhotoComponent implements OnInit {

  constructor(
    private modalController: ModalController,
    private alertController: AlertController) { }

  ngOnInit() { }

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
