import { Injectable } from '@angular/core';
import { Photo } from '../models/Photo';
import { AngularFireDatabase } from '@angular/fire/database';
import { ToastController } from '@ionic/angular';
import { map } from 'rxjs/operators';

const path = 'foto';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(
    private db: AngularFireDatabase,
    private toastController: ToastController
  ) { }

  newPhoto(photo: Photo) {
    return new Promise((resolve) => {
      this.db.list(path)
        .push(photo)
        .then(() => {
          resolve();
          this.toast('Foto salva com sucesso');
        });
    })
  }

  getAllPhoto() {
    return this.db.list(path)
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...(c.payload.val() as Photo) }));
        }
        )
      );
  }

  deletePhoto(key: string) {
    this.db.object(`${path}/${key}`).remove();
    this.toast('Foto apagada');
  }

  private async toast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: "top"
    });
    toast.present();
  }
}
