import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import { User } from 'src/models/user';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User> = EMPTY;

  constructor(private afAuth : AngularFireAuth, private afs: AngularFirestore) { 
    this.afAuth.user.subscribe(user => {
      if(user){
        this.user$ = this.afs.doc<User>('users/'+user.uid).valueChanges();
      }
      else {
        this.user$ = EMPTY;
      }
    });
  }
  getUser() : Promise<firebase.User> {
    return this.afAuth.authState.pipe(first()).toPromise();
  }

  
  isPostEditor(user: User) : boolean {
    const allowed = ["admin", "post_editor"];
    return this.checkAuthorization(user, allowed);
  }

  isLeagueEditor(user: User) : boolean {
    const allowed = ["admin", "league_editor"];
    return this.checkAuthorization(user, allowed);
  }

  isAdmin(user: User) : boolean {
    const allowed = ["admin"];
    return this.checkAuthorization(user, allowed);
  }


  private checkAuthorization(user: User, allowedRoles: string[]): boolean {
    if (!user) return false
    for (const role of allowedRoles) {
      if ( user.roles[role] ) {
        return true
      }
    }
    return false
  }

  

}
