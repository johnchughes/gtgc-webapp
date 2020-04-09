import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gtgc';

  constructor(public firebase: AngularFireAuth, private userService: UserService) {

  }



}
