import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhotoPageRoutingModule } from './photo-routing.module';

import { PhotoPage } from './photo.page';
import { HeaderModule } from 'src/app/components/header/header.module';
import { CardPhotoModule } from 'src/app/components/card-photo/card-photo.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhotoPageRoutingModule,
    //
    HeaderModule,
    CardPhotoModule
  ],
  declarations: [PhotoPage]
})
export class PhotoPageModule {}
