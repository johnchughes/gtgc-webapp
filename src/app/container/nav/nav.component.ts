import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(public firebase: AngularFireAuth) { }

  ngOnInit() {
  }

    

  logout() {
    this.firebase.auth.signOut()
  }



}
