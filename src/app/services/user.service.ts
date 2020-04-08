import { Injectable } from '@angular/core';
import { AngularFirestore  } from "@angular/fire/firestore";
import { Post } from "../../models/post";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFirestore) { }


  


}
