import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from '../../services/user.service';
import { User } from 'src/models/user';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { Roles } from 'src/models/roles';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent {

  userLoginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private firebase: AngularFireAuth, private userService: UserService, private router: Router) { }

  get email() : FormControl {
    return this.userLoginForm.get('email') as FormControl;
  }

  get password() : FormControl {
    return this.userLoginForm.get('password') as FormControl;
  }

  login_google() {
    this.firebase.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(response => {

      let user : User = {
        uid: response.user.uid,
        name: response.user.displayName,
        roles: {
          league_editor: false,
          post_editor: false,
          admin: false
        }
      };
      
      this.userService.OnLogin(user);
      this.router.navigate(['']);
    });
  }

  // login_facebook() {
  //   this.firebase.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(response => {
  //     console.log(response);
  //   });
  // }

  async onSubmit() {
    let email = this.email.value.toString();
    let password = this.password.value.toString();

    console.log(email, password);

    try
    {
      let result = await this.firebase.auth.signInWithEmailAndPassword(email, password);
      console.log(result);
    }
    catch(error){
      console.error(error);
    }
  }

}
