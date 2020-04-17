import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth : AngularFireAuth) { }

  getUser() : Promise<firebase.User> {
    return this.afAuth.authState.pipe(first()).toPromise();
  }

}
