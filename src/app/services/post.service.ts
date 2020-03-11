import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Post } from 'src/models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts;

  constructor(private store: AngularFirestore) {
    this.posts = store.collection("posts");
   }

   create(post: Post) {
     this.posts.add({...post});
   }

   getRecent() {
     //return this.posts.orderBy('DateCreated').limit(5);
     return this.posts;
   }

   getPostBySlug(slug: string) {
    this.posts.wheere("Slug", "==", slug).get();
   }

}
