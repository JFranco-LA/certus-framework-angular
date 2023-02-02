import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private firebase: AngularFirestore) { }

  newMessage(message: Message): Promise<any>{
    return this.firebase.collection('messages').add(message);
  }
}
