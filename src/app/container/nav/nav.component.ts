import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { first, map, take, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/models/user';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(public firebase: AngularFireAuth, public authService : AuthService) { }

  ngOnInit() {
  }

  logout() {
    this.firebase.auth.signOut()
  }



}
