import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { User } from 'src/app/models/User';
import { LoginService } from 'src/app/services/login.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers:[AngularFireAuth]
})
export class LoginPage implements OnInit {

  img: string = "./assets/image/camera.jpg";
  user: User = new User();

  constructor(
    private alertController: AlertController,
    private loginService: LoginService  
  ) { }

  ngOnInit() {
  }

  login() {
    this.loginService.login(this.user);
  }

  async alertPassword() {
    const alert = await this.alertController.create({
      header: 'Insira seu email',
      inputs: [
        {
          name: 'email',
          type: 'email',
          placeholder: 'Email'
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
          handler: (data) => {
            this.loginService.newPassword(data.email);
          }
        }
      ]
    });

    await alert.present();
  }

}
