import { Component, OnInit } from '@angular/core';
import { Post } from 'src/models/post';
import { PostService } from 'src/app/services/post.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newblogpost',
  templateUrl: './newblogpost.component.html',
  styleUrls: ['./newblogpost.component.scss']
})
export class NewblogpostComponent implements OnInit {

  post: Post = new Post();

  constructor(private postService: PostService, private auth : AngularFireAuth, private router : Router) {

   }

  OnFormSubmit($event : Post) {
    
    this.auth.user.subscribe(x => {
      $event.Author = x.displayName;
      $event.DateCreated = Date.now();
      this.postService.create($event);
      this.router.navigate(["/posts"]);
    });
    
  }
  

  ngOnInit() {
    console.log("POST => ",this.post);
  }

}