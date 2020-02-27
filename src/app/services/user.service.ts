import { Injectable } from '@angular/core';
import { AngularFirestore  } from "@angular/fire/firestore";
import { Post } from "../../models/post";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFirestore) { }

  getUsers() :any {
    return this.db.collection('test');
  }

  create() {
    let newPost = new Post("Test 1", "this is some sort of content");
    return this.db.collection('posts').add({...newPost});
  }


}
