import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import { User } from 'src/models/user';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User>;

  constructor(private afAuth : AngularFireAuth, private afs: AngularFirestore) { 
    this.afAuth.user.subscribe(user => {
      if(user){
        this.user$ = this.afs.collection<User>('users').doc<User>(user.uid).valueChanges();
      }
      else {
        this.user$ = EMPTY;
      }
    });
  }

  getUser() : Promise<firebase.User> {
    return this.afAuth.authState.pipe(first()).toPromise();
  }

}
