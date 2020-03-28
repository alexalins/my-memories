import { Injectable } from '@angular/core';
import { Message } from '../models/Message';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

const path = 'message';

@Injectable({
  providedIn: 'root'
})

export class MessageService {

  constructor(private db: AngularFireDatabase) { }

  newMessage(message: Message) {
    return new Promise((resolve) => {
      this.db.list(path)
        .push(message)
        .then(() => resolve());
    })
  }

  getAllMessage() {
    return this.db.list(path)
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...(c.payload.val() as Message) }));
        }
        )
      );
  }

  delete(id: string) {
    this.db.object(`${path}/${id}`).remove();
  }

}
