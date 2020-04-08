import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { User } from 'src/models/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gtgc';

  constructor(public firebase: AngularFireAuth, private userService: UserService) {

  }

  login() {
    this.firebase.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(response => {
      let user : User = {
        uid: response.user.uid,
        name: response.user.displayName
      };
      this.userService.register(user);
    });
  }

  logout() {
    this.firebase.auth.signOut()
  }



}
