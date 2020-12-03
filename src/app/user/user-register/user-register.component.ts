import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'src/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})



export class UserRegisterComponent implements OnInit {

  busy : boolean = false;

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    displayName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private afAuth : AngularFireAuth, private userService : UserService, private router : Router) { }

  get displayName() : FormControl { 
    return this.registerForm.get('displayName') as FormControl; 
  }

  get email() : FormControl {
    return this.registerForm.get('email') as FormControl;
  }

  get password() : FormControl {
    return this.registerForm.get('password') as FormControl;
  }

  get passwordConfirm() : FormControl {
    return this.registerForm.get('passwordConfirm') as FormControl;
  }

  async onSubmit() {
    this.busy = true;
    let email = this.email.value.toString();
    let password = this.password.value.toString();
    let displayName = this.displayName.value.toString();

    let newUser = await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    newUser.user.sendEmailVerification();
    let user : User = {
      uid: newUser.user.uid,
      name: displayName,
      roles: {
        league_editor: false,
        post_editor: false,
        admin :false
      }
    };



    this.userService.OnLogin(user);
    this.router.navigate(['']);
  }

  ngOnInit() {
  }

  login_google() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(response => {

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

}
