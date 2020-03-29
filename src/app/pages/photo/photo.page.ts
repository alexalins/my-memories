import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPhotoComponent } from 'src/app/components/modal-photo/modal-photo.component';
import { ModalSendPhotoComponent } from 'src/app/components/modal-send-photo/modal-send-photo.component';
import { Photo } from 'src/app/models/Photo';
import { Observable } from 'rxjs';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.page.html',
  styleUrls: ['./photo.page.scss'],
})
export class PhotoPage implements OnInit {

  photos: Photo[] = [];

  constructor(
    private modalController: ModalController,
    private photoService: PhotoService
  ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    let messages: Observable<any>;
    messages = this.photoService.getAllPhoto();
    messages.subscribe(data =>{
      this.photos = data;
    })
  }

  async modalPhoto() {
    const modal = await this.modalController.create({
      component: ModalPhotoComponent
    });
    return await modal.present();
  }

  async modalSendPhoto() {
    const modal = await this.modalController.create({
      component: ModalSendPhotoComponent
    });
    return await modal.present();
  }

}
