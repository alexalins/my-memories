import { Injectable } from '@angular/core';
import { Message } from '../models/Message';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';

const path = 'message';

@Injectable({
  providedIn: 'root'
})

export class MessageService {

  constructor(
    private db: AngularFireDatabase,
    private toastController: ToastController
  ) { }

  newMessage(message: Message) {
    return new Promise((resolve) => {
      this.db.list(path)
        .push(message)
        .then(() => {
          resolve();
          this.toast('Mensagem salva com sucesso');
        });
    })
  }

  getAllMessage() {
    return this.db.list(path)
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...(c.payload.val() as Message) }));
        }
        )
      );
  }

  delete(id: string) {
    this.db.object(`${path}/${id}`).remove();
    this.toast('Mensagem apagada');
  }

  private async toast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

}
