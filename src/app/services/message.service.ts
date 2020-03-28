import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, DocumentReference } from 'angularfire2/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Message } from '../models/Message';
import { User } from '../models/User';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private messages: Observable<User[]>;
  private messageCollection: AngularFirestoreCollection<User>;

  constructor(private db: AngularFireDatabase) {
  }

  newUser() {
    let user: User = new User();
    user.email = "marianafelix615@gmail.com";
    user.name = "Mariana Valença";
    return new Promise((resolve, reject) => {
      this.db.list('user')
      .push(user)
      .then(() => resolve());
    })
  }

}
