import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Post } from 'src/models/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  readonly collection : string = "posts";

  constructor(private store: AngularFirestore) { }

   create(post: Post) {
     this.store.collection(this.collection).add({...post});
   }

   getRecent() : Observable<Post[]> {
     return this.store.collection<Post>(this.collection).valueChanges();
   }

   getPostBySlug(slug: string) : Observable<Post[]> {
    return this.store.collection<Post>(this.collection, ref => ref.where('Slug', '==', slug).limit(1)).valueChanges();
   }

}
