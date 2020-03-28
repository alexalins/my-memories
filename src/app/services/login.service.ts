import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../models/User';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private firebaseauth: AngularFireAuth,
    private toastController: ToastController,
    private router: Router,
  ) { }

  login(user: User) {
    this.firebaseauth.auth.signInWithEmailAndPassword(user.email, user.password)
      .then(() => {
        this.toast('Login efetuado com sucesso');
        this.router.navigate(['/tabs/photo']);
      })
      .catch((erro: any) => {
        this.toast(erro);
      });
  }

  newPassword(email: string) {
    this.firebaseauth.auth.sendPasswordResetEmail(email)
      .then(() => {
        this.toast('E-mail enviado');
      })
      .catch((erro: any) => {
        this.toast(erro);
      });
  }

  logout() {
    this.firebaseauth.auth.signOut()
      .then(() => {
        this.toast('Você saiu');
      })
      .catch((erro: any) => {
        this.toast(erro);
      });
  }

  private async toast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
}
