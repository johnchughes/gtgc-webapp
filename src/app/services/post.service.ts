import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { Post } from 'src/models/post';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActionSequence } from 'protractor';

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
     return this.store.collection<Post>(this.collection, ref => ref.limit(5)).valueChanges();
   }

   getPostBySlug(slug: string) : Observable<Post[]> {
    return this.store.collection<Post>(this.collection, ref => ref.where('Slug', '==', slug)).snapshotChanges().pipe(
      map(action => action.map(a => {
        const data = a.payload.doc.data() as Post;
        data.DocumentRef = a.payload.doc.id;
        return data;
      }))
    );
   }

   updatePost(post: Post){
    //TODO
   }

}
