import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../models/User';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private firebaseauth: AngularFireAuth,
    private db: AngularFireDatabase,
    private toastController: ToastController,
    private router: Router,
  ) { }

  login(user: User) {
    this.firebaseauth.auth.signInWithEmailAndPassword(user.email, user.password)
      .then(() => {
        this.toast('Login efetuado com sucesso');
        this.recoverUser(user.email);
        this.router.navigate(['/tabs/photo']);
      })
      .catch((erro: any) => {
        this.toast(erro);
      });
  }

  recoverUser(email: string) {
    let list: any = [];
    return this.db.database.ref('user')
      .on('value', tasksnap => {
        let tmp = [];
        tasksnap.forEach(taskData => {
          console.log(taskData)
            tmp.push({
                key: taskData.key,
                ...taskData.val()
            })
        });
        list = tmp;
        list.forEach( l => {
          if(l['email'] == email){
            let user: User = new User;
            user.id = l['key'];
            user.name = l['name'];
            user.email = l['email'];
            let json = JSON.stringify(user);
            localStorage.setItem('user', json);
          }
        })
      })
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
