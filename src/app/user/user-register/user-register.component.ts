import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'src/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

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
    let email = this.email.value;
    let password = this.password.value;
    let displayName = this.displayName.value;

    let newUser = await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
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

}
