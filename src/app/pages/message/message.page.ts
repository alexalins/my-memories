import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { ModalViewMessageComponent } from 'src/app/components/modal-view-message/modal-view-message.component';
import { ModalSendMessageComponent } from 'src/app/components/modal-send-message/modal-send-message.component';
import { MessageService } from 'src/app/services/message.service';
import { Observable } from 'rxjs';
import { Message } from 'src/app/models/Message';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})

export class MessagePage implements OnInit {

  messages: Message[] = [];
  
  constructor(
    private modalController: ModalController,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    let messages: Observable<any>;
    messages = this.messageService.getAllMessage();
    messages.subscribe(data =>{
      this.messages = data;
      this.messages = this.messages.reverse();
    })
  }

  async modalView(message: Message) {
    const modal = await this.modalController.create({
      component: ModalViewMessageComponent,
      componentProps: message
    });
    return await modal.present();
  }

  async modalNew() {
    const modal = await this.modalController.create({
      component: ModalSendMessageComponent
    });
    return await modal.present();
  }
}
