import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MessageService } from 'src/app/services/message.service';
import { Message } from 'src/app/models/Message';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-modal-send-message',
  templateUrl: './modal-send-message.component.html',
  styleUrls: ['./modal-send-message.component.scss'],
})
export class ModalSendMessageComponent implements OnInit {
  
  message: Message = new Message();

  constructor(
    private modalController: ModalController,
    private messageService: MessageService
  ) { }

  ngOnInit() {}

  sendMessage() {
    let user: User = new User();
    user = JSON.parse(localStorage.getItem('user'));
    this.message.user = user;
    this.message.date = this.getDate();
    //
    this.messageService.newMessage(this.message);
    this.dismissModal();
  }

  getDate() {
    let date = new Date();
    let day = date.getDate().toString();
    let month = (date.getMonth() + 1).toString();
    let year = date.getFullYear().toString();

    if (day.length == 1)
      day = '0' + day;
    if (month.length == 1)
      month = '0' + month;

    let dateFormart = day + '/' + month + '/' + year;
    return dateFormart;
  }

  dismissModal() {
    this.modalController.dismiss();
  }

}
