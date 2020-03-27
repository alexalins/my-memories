import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  
  urlAvatar: string = "https://66.media.tumblr.com/avatar_4f38df4a83b6_128.pnj";

  constructor(
    private alertController: AlertController,
    private router: Router) { }

  ngOnInit() {
  }

  
  async alertPassword() {
    const alert = await this.alertController.create({
      header: 'Insira a nova senha',
      inputs: [
        {
          name: 'Senha',
          type: 'password',
          placeholder: 'senha'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Enviar',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  async alertConfirmLogout() {
    const alert = await this.alertController.create({
      header: 'Deseja sair?',
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
            this.router.navigate(['/'])
          }
        }
      ]
    });

    await alert.present();
  }

  async alertConfirmDownload() {
    const alert = await this.alertController.create({
      header: 'Deseja baixar todas as fotos?',
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
}
