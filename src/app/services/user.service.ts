import { Injectable } from '@angular/core';
import { AngularFirestore  } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFirestore) { }

  getUsers() :any {
    return this.db.collection('test');
  }


}
