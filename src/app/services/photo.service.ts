import { Injectable } from '@angular/core';
import { Photo } from '../models/Photo';
import { AngularFireDatabase } from '@angular/fire/database';
import { ToastController } from '@ionic/angular';
import { map, finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';

const path = 'photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  downloadUrl: string;

  constructor(
    private db: AngularFireDatabase,
    private storage: AngularFireStorage,
    private toastController: ToastController
  ) { }

  newPhoto(photo: Photo) {
    photo.url = this.downloadUrl;
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

  uploadPicture(photoUrl: string, photo: Photo) {
    try {
      this.toast("Salvando imagem");
      let newName = `${new Date().getTime()}.jpg`;
      const ref = this.storage.ref(`images/${newName}`);
      const task = ref.putString(photoUrl, 'data_url').snapshotChanges().toPromise().then(_ => {
        return ref.getDownloadURL().toPromise().then(res => {
          alert(res);
          this.downloadUrl = res;
          this.newPhoto(photo);
          return res;
        });
      }
      )
    } catch (error) {
      alert("Erro")
    }
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
