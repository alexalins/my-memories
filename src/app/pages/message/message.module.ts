import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessagePageRoutingModule } from './message-routing.module';

import { MessagePage } from './message.page';
import { HeaderModule } from 'src/app/components/header/header.module';
import { CardMessageModule } from 'src/app/components/card-message/card-message.module';
import { ModalViewMessageComponent } from 'src/app/components/modal-view-message/modal-view-message.component';
import { ModalSendMessageComponent } from 'src/app/components/modal-send-message/modal-send-message.component';

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
  declarations: [MessagePage, ModalViewMessageComponent, ModalSendMessageComponent],
  entryComponents: [ModalViewMessageComponent, ModalSendMessageComponent]
})
export class MessagePageModule {}
