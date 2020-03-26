import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessagePageRoutingModule } from './message-routing.module';

import { MessagePage } from './message.page';
import { HeaderModule } from 'src/app/components/header/header.module';
import { CardMessageModule } from 'src/app/components/card-message/card-message.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessagePageRoutingModule,
    //
    HeaderModule,
    CardMessageModule
  ],
  declarations: [MessagePage]
})
export class MessagePageModule {}
