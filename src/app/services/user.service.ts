import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection  } from "@angular/fire/firestore";
import { User } from 'src/models/user';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userCollcetion : AngularFirestoreCollection<User>;
  users: User[]
  constructor(private db: AngularFirestore) {
    if(!this.users){
      this.userCollcetion = db.collection<User>('users');
      this.userCollcetion.valueChanges().subscribe(users => this.users = users);
    }
   }

  register(user: User){
    let _u: User = this.users.find(x => x.uid == user.uid);
    if(_u === undefined){
      this.create(user);
    }
  }


  update(user: User) {
  }

  create(user: User) {
    console.log('create user');
    this.userCollcetion.add(user);
  }

}
