import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/models/post';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/models/user';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-viewblog',
  templateUrl: './viewblog.component.html',
  styleUrls: ['./viewblog.component.scss']
})
export class ViewblogComponent implements OnInit {

  user : User;
  post : Post = null;

  constructor(private postService : PostService, private route : ActivatedRoute, public auth : AuthService, private title : Title) {
    this.auth.user$.subscribe(user => this.user = user);
    let slug = this.route.snapshot.paramMap.get("slug");
    this.postService.getPostBySlug(slug).subscribe(response => {
      if(response.length != 1){
        //redirect to 404
      }
      this.title.setTitle("GTGC: " + response[0].Title);
      this.post = response[0];
    });
   }

  ngOnInit() {
  }

}
