import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, NavParams } from '@ionic/angular';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-modal-view-message',
  templateUrl: './modal-view-message.component.html',
  styleUrls: ['./modal-view-message.component.scss'],
})
export class ModalViewMessageComponent implements OnInit {
  
  message: any;

  constructor(
    private modalController: ModalController,
    private alertController: AlertController,
    private navParams: NavParams,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.message = this.navParams.data;
  }

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
            this.messageService.delete(this.message['key']);
            this.dismissModal();
          }
        }
      ]
    });

    await alert.present();
  }
}
