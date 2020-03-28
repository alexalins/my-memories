import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, DocumentReference } from 'angularfire2/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Message } from '../models/Message';
import { AngularFireDatabase } from '@angular/fire/database';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  list: User[] = [];
  constructor(private db: AngularFireDatabase) { }

  newMessage(message: Message) {
    return new Promise((resolve) => {
      this.db.list('message')
        .push(message)
        .then(() => resolve());
    })
  }

  getAllMessage() {
    this.db.database.ref('message')
      .on('value', tasksnap => {
        let tmp: User[] = [];
        tasksnap.forEach(taskData => {
          console.log(taskData)
          tmp.push({
            key: taskData.key,
            ...taskData.val()
          })
        });
        this.list = tmp;
      })
  }

}
