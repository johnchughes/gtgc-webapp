import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(public firebase: AngularFireAuth, public authService : AuthService) { }

  ngOnInit() {
  }

  displayName() : string{
    return "<user>";
  }

  logout() {
    this.firebase.auth.signOut()
  }



}
