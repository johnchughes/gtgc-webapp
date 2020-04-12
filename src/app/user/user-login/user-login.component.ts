import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from '../../services/user.service';
import { User } from 'src/models/user';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  constructor(private firebase: AngularFireAuth, private userService: UserService, private router: Router) { }


  login_google() {
    this.firebase.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(response => {
      let user : User = {
        uid: response.user.uid,
        name: response.user.displayName
      };
      this.userService.register(user);
      this.router.navigate(['']);
    });
  }

  login_facebook() {
    //TODO
  }

  ngOnInit() {
  }

}
