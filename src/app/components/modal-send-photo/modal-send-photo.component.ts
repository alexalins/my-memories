import { Component, OnInit } from '@angular/core';
import { ModalController, ActionSheetController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-modal-send-photo',
  templateUrl: './modal-send-photo.component.html',
  styleUrls: ['./modal-send-photo.component.scss'],
})
export class ModalSendPhotoComponent implements OnInit {

  isImage: boolean = false;
  capturedSnapURL: string;

 

  constructor(
    private modalController: ModalController,
    private camera: Camera,
    public actionSheetController: ActionSheetController
  ) { }

  ngOnInit() { }

  pickImage(sourceType) {

    let cameraOptions: CameraOptions = {
      sourceType: sourceType,
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(cameraOptions).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.capturedSnapURL = base64Image;
      this.isImage = true;
    }, (err) => {
      console.log(err);
    });
    
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
