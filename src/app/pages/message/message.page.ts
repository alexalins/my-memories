import { Component, OnInit } from '@angular/core';
import { ModalPhotoComponent } from 'src/app/components/modal-photo/modal-photo.component';
import { ModalController, AlertController } from '@ionic/angular';
import { ModalViewMessageComponent } from 'src/app/components/modal-view-message/modal-view-message.component';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {

  list: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  constructor(
    public modalController: ModalController,
    public alertController: AlertController
  ) { }

  ngOnInit() {
  }

  async modalView() {
    const modal = await this.modalController.create({
      component: ModalViewMessageComponent
    });
    return await modal.present();
  }

  async alertSendMessage() {
    const alert = await this.alertController.create({
      header: 'Escreva sua mensagem',
      cssClass: 'modal',
      inputs: [
        {
          name: 'Mensagem',
          type: 'textarea',
          placeholder: 'Eu te amo <3'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'modal',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Enviar',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ],
    });

    await alert.present();
  }
}
