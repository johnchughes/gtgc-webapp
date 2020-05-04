import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection  } from "@angular/fire/firestore";
import { User } from 'src/models/user';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userCollection : AngularFirestoreCollection<User>;
  users: User[]
  constructor(private db: AngularFirestore) {
    if(!this.users){
      this.userCollection = db.collection<User>('users');
    }
   }

  OnLogin(user: User) {
    let ref = this.userCollection.doc(user.uid);
    ref.get().toPromise().then((doc) => {
      if(!doc.exists){
        ref.set({...user});
      }
    })
    
  }

}
