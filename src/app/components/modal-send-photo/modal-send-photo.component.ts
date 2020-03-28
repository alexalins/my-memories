import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-modal-send-photo',
  templateUrl: './modal-send-photo.component.html',
  styleUrls: ['./modal-send-photo.component.scss'],
})
export class ModalSendPhotoComponent implements OnInit {

  isImage: boolean = false;
  capturedSnapURL: string;

  cameraOptions: CameraOptions = {
    quality: 20,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  constructor(
    private modalController: ModalController,
    private camera: Camera
  ) { }

  ngOnInit() { }

  peckImage() {
    this.camera.getPicture(this.cameraOptions).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.capturedSnapURL = base64Image;
      this.isImage = true;
    }, (err) => {
      console.log(err);
    });
    
  }

  dismissModal() {
    this.modalController.dismiss();
  }
}
