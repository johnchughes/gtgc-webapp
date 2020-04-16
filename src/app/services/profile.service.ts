import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection  } from "@angular/fire/firestore";
import { Observable } from 'rxjs';
import { Profile } from 'src/models/profile';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ProfileService {


  constructor(private db: AngularFirestore) {

  }

  GetProfile(name:string) : Observable<Profile> {
    let ref = "podcast-profiles/" + name;
    return this.db.doc<Profile>(ref).snapshotChanges().pipe(
      map(action => {
        return action.payload.data() as Profile;
      })
    );
  }

}
