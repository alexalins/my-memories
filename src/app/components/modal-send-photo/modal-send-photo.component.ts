import { Component, OnInit } from '@angular/core';
import { ModalController, ActionSheetController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { PhotoService } from 'src/app/services/photo.service';
import { Photo } from 'src/app/models/Photo';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-modal-send-photo',
  templateUrl: './modal-send-photo.component.html',
  styleUrls: ['./modal-send-photo.component.scss'],
})
export class ModalSendPhotoComponent implements OnInit {

  isImage: boolean = false;
  photoUrl: string;
  photo: Photo = new Photo();

  constructor(
    private modalController: ModalController,
    private camera: Camera,
    private actionSheetController: ActionSheetController,
    private photoService: PhotoService
  ) { }

  ngOnInit() { }

  async pickImage(sourceType) {

    let cameraOptions: CameraOptions = {
      sourceType: sourceType,
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    }

    try {
      const result = await this.camera.getPicture(cameraOptions);
      this.photoUrl = `data:image/jpeg;base64,${result}`;
      this.isImage = true;
    } catch (error) {
    }
  }

  async sendImage() {
    this.photo.date = this.getDate();
    let user: User = new User();
    user = JSON.parse(localStorage.getItem('user'));
    this.photo.user = user;
    await this.photoService.uploadPicture(this.photoUrl, this.photo);
    this.dismissModal();
  }

  getDate() {
    let date = new Date();
    let day = date.getDate().toString();
    let month = (date.getMonth() + 1).toString();
    let year = date.getFullYear().toString();

    if (day.length == 1)
      day = '0' + day;
    if (month.length == 1)
      month = '0' + month;

    let dateFormart = day + '/' + month + '/' + year;
    return dateFormart;
  }

  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      header: "Selecionar imagem",
      buttons: [{
        text: 'Selecionar imagem da galeria',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Usar Camera',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.CAMERA);
        }
      },
      {
        text: 'Cancelar',
        role: 'cancel'
      }
      ]
    });
    await actionSheet.present();
  }

  dismissModal() {
    this.modalController.dismiss();
  }
}
