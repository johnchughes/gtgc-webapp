import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gtgc';

  constructor(public auth: AngularFireAuth) {

  }

  login() {
    this.auth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.auth.auth.signOut()
  }

}
