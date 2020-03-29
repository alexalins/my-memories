import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { PhotoService } from 'src/app/services/photo.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  
  user: User = new User();

  constructor(
    private alertController: AlertController,
    private router: Router,
    private photoService: PhotoService
  ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
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
          handler: () => {
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.photoService.downloadAllPhotos();
          }
        }
      ]
    });

    await alert.present();
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
          }
        }, {
          text: 'Enviar',
          handler: () => {
          }
        }
      ]
    });

    await alert.present();
  }
}
