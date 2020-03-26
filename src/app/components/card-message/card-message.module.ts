import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardMessageComponent } from './card-message.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [CardMessageComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [CardMessageComponent]
})
export class CardMessageModule { }
