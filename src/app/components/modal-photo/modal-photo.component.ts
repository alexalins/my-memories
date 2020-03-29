import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, NavParams } from '@ionic/angular';
import { PhotoService } from 'src/app/services/photo.service';

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
    private navParams: NavParams,
    private photoService: PhotoService
  ) { }

  ngOnInit() {
    this.photo = this.navParams.data;
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  async alertConfirmDonwload() {
    alert("Ainda não estou funcionando");
    /*
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
    */
  }

  async alertConfirmDelete() {
    const alert = await this.alertController.create({
      header: 'Deseja apagar essa foto?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.photoService.deletePhoto(this.photo);
            this.dismissModal();
          }
        }
      ]
    });

    await alert.present();
  }
}
