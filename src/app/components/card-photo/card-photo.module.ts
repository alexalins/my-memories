import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPhotoComponent } from './card-photo.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [CardPhotoComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [CardPhotoComponent]
})
export class CardPhotoModule { }
