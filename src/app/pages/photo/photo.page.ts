import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPhotoComponent } from 'src/app/components/modal-photo/modal-photo.component';
import { ModalSendPhotoComponent } from 'src/app/components/modal-send-photo/modal-send-photo.component';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.page.html',
  styleUrls: ['./photo.page.scss'],
})
export class PhotoPage implements OnInit {

  list: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor(public modalController: ModalController) { }

  ngOnInit() {
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
